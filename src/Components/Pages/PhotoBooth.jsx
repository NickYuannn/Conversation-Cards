import React from "react";
import "./PhotoBooth.css";
import { useRef, useState, useEffect } from "react";
import Footer from "../Footer";

function PhotoBooth() {
  const videoRef = useRef();
  const photoRef = useRef();

  const [gallery, setGallery] = useState(false);

  const [hasPhoto, setHasPhoto] = useState(false);

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
    const width = 700;
    const height = 500;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.height = height;
    photo.width = width;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);
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
      </div>
      <Footer />
    </div>
  );
}

export default PhotoBooth;
