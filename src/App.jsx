import { useState } from "react";
import "./App.css";
import QRScanner from "./page/QRScanner";

function App() {
  const [showScanner, setShowScanner] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneRegex = /^(01[0-9]{1})[0-9]{7,8}$/;
    if (!phoneRegex.test(phone)) {
      setResultMessage("Please enter a valid Malaysian phone number.");
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      setResultMessage("Please enter a valid amount greater than 0.");
      return;
    }

    setShowScanner(true);
    setResultMessage("");
  };

  const handleScanSuccess = () => {
    setResultMessage("Success! You've earned your points!");
    setShowScanner(false);
  };

  const handleScanFailure = () => {
    setResultMessage("QR code does not match.");
  };

  return (
    <div className="container">
      <h1>Spend & Earn</h1>
      {!showScanner ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0123456789" // Placeholder for phone number
            required
          />
          <label htmlFor="amount">Amount Spent:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 100" // Placeholder for amount
            required
          />
          <button type="submit">Submit</button>
          {resultMessage && <p>{resultMessage}</p>}{" "}
          {/* Display validation messages */}
        </form>
      ) : (
        <div>
          <h2>Scan QR Code</h2>
          <QRScanner
            onScanSuccess={handleScanSuccess}
            onScanFailure={handleScanFailure}
          />
          <p>{resultMessage}</p>
          <button onClick={() => setShowScanner(false)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
