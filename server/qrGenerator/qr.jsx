import QRCode from "qrcode";
import { useEffect, useState } from "react";
import "./qr.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQrCode(url);
    });
  };

  return (
    <div className="app">
      <h1>QR code</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} />
        </>
      )}
    </div>
  );
}

export default App;
