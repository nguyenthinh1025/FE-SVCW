import React, { useEffect, useRef } from 'react';
import jsQR from 'jsqr';

export default function QRScanner() {
  const videoRef = useRef(null);

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
        console.log('Mã QR được tìm thấy:', code.data);
        // Thực hiện xử lý với mã QR ở đây
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
    </div>
  );
}