import React from "react";
import "./PhotoBooth.css";
import { useRef, useState, useEffect } from "react";

function PhotoBooth() {
  const videoRef = useRef();
  const photoRef = useRef();

  const [hasPhoto, setHasPhoto] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const getVideo = () => {
    if (!hasPhoto) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1280, height: 720 },
        })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.height = height;
    photo.width = width;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="photobooth-container">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>Capture</button>
      </div>
      <div className={"result " + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>Close</button>
      </div>
    </div>
  );
}

export default PhotoBooth;
