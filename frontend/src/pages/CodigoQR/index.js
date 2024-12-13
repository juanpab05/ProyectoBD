import React, { useState, useEffect } from 'react';
import QrCode from '../../components/QrCode/QrCode';

const GenerateQr = () => {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    const generateRandomString = () => {
      return Math.random().toString(36).substring(2, 15);
    };

    setQrValue(generateRandomString());
  }, []);

  return (
    <div className="generate-qr-container">
      <h1>QR PARA EL QUIZ</h1>
      {qrValue && <QrCode value={qrValue} />}
    </div>
  );
};

export default GenerateQr;
