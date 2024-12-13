import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCode = ({ value }) => {
  return (
    <div className="qr-container">
      <QRCodeCanvas value={value} size={256} />
    </div>
  );
};

export default QrCode;
