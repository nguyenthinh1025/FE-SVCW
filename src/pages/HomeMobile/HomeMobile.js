import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import { useFormik } from 'formik';

export default function QRScanner () {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState(null);
  const [data, setData] = useState()
  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (error) {
        console.error('Lỗi truy cập camera:', error);
      }
    };

    setupCamera();

    const scanQRCode = () => {
      const canvasElement = document.createElement('canvas');
      const context = canvasElement.getContext('2d');
      canvasElement.width = videoRef.current.videoWidth;
      canvasElement.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvasElement.width, canvasElement.height);
      const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);

      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        setScannedData(code.data); // Lưu kết quả vào state
        setData({
          userId: localStorage.getItem('userIDMobile'),
          activityId: code.data,
        })

      }
    };

    const intervalId = setInterval(scanQRCode, 1000);

    return () => {
      clearInterval(intervalId);
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline></video>
      <h1> QR: {scannedData && <div> {data}</div>}</h1>
    </div>
  );
}