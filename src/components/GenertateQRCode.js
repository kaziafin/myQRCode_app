import React, { useEffect } from 'react';
import QRCode from 'qrcode.react';
import './GenerateQRCode.css'; // Import the CSS file

const GenerateQRCode = () => {
  const url = 'www.physiotherapywithdrmubina.com';

  useEffect(() => {
    // This will run when the component mounts
    const qrCodeContainer = document.getElementById('qrcode');
    if (qrCodeContainer) {
      qrCodeContainer.innerHTML = '';
      new QRCode(qrCodeContainer, url);
    }
    console.log(url);
  }, [url]);

  return (
    <div className='container'>
      <h1 className='title'>QR Code Generator</h1>
      <div className='qr-code'>
        <QRCode size={400} bgColor='white' value={url} />
      </div>
    </div>
  );
};

export default GenerateQRCode;
