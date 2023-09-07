import React, { useEffect } from 'react';
import jsQR from 'jsqr';

export default function HomeMobile() {
  useEffect(() => {
    let videoElement;
    let stream;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement = document.createElement('video');
        document.body.appendChild(videoElement);

        videoElement.srcObject = stream;
        videoElement.play();

        videoElement.addEventListener('loadeddata', () => {
          const canvasElement = document.createElement('canvas');
          const context = canvasElement.getContext('2d');
          canvasElement.width = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;

          setInterval(() => {
            context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
            const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);

            // Sử dụng thư viện jsQR để quét mã QR
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
              console.log('Mã QR được tìm thấy:', code.data);
              // Thực hiện xử lý với mã QR ở đây
            }
          }, 1000);
        });
      } catch (error) {
        console.error('Lỗi truy cập camera:', error);
      }
    };

    setupCamera();

    return () => {
      if (videoElement) {
        videoElement.srcObject = null;
        videoElement.pause();
        document.body.removeChild(videoElement);
      }

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <p>Camera QR Scanner</p>
    </div>
  );
}