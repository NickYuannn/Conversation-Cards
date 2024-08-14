import React from "react";
import "./PhotoBooth.css";
import { useRef, useState, useEffect } from "react";
import Footer from "../Footer";

function PhotoBooth() {
  const videoRef = useRef();
  const photoRef = useRef();
  const [gallery, setGallery] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.log("Error accessing video stream: ", error);
      });
  }, []);

  const takePhoto = () => {
    const width = 500;
    const height = 700;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.height = height;
    photo.width = width;

    let ctx = photo.getContext("2d");

    ctx.filter = "saturate(200%)";

    ctx.drawImage(video, 0, 0, width, height);

    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "#fc7703";
    ctx.textAlign = "center";

    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    } / ${currentDate.getDate()} / ${currentDate.getFullYear()}`;

    ctx.fillText(`Convo`, width / 2, height - 60);

    ctx.fillText(`${formattedDate}`, width / 2, height - 30);

    setHasPhoto(true);
  };

  return (
    <div className="photobooth-container">
      <div className="camera-container">
        <h1>Photo Booth</h1>
        <div className="camera">
          <video ref={videoRef} autoPlay loop muted />
          <div className={gallery ? "controls active" : "controls"}>
            {!gallery && <button onClick={takePhoto} />}
            <canvas
              ref={photoRef}
              className={gallery ? "active" : ""}
              onClick={() => {
                setGallery(!gallery);
              }}
            />
          </div>
        </div>
        <p>Take a picture, save to make the memories last</p>
        <p>
          Take the picture, click the picture to the right, right click and save
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PhotoBooth;
