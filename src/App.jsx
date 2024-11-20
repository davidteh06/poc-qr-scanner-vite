import { useState } from "react";
import "./App.css";
import QRScanner from "./page/QRScanner";

function App() {
  const [showScanner, setShowScanner] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowScanner(true);
    setResultMessage("");
  };
  const handleScanSuccess = () => {
    setResultMessage("Success! QR code matched.");
    setShowScanner(false);
  };

  const handleScanFailure = () => {
    setResultMessage("QR code does not match.");
  };

  return (
    <div className="container">
      <h1>QR Code Scanner POC</h1>
      {!showScanner ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" required />

          <label htmlFor="amount">Amount Spent:</label>
          <input type="number" id="amount" required />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Scan QR Code</h2>
          <QRScanner
            onScanSuccess={handleScanSuccess}
            onScanFailure={handleScanFailure}
          />
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
