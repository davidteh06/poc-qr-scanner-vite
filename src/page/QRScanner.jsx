import { Scanner } from "@yudiel/react-qr-scanner";
import PropTypes from "prop-types";
import React from "react";

const QrScanner = ({ onScanSuccess, onScanFailure }) => {
  return (
    <React.Fragment>
      <Scanner
        onScan={(result) => {
          const scannedValue = result[0].rawValue;
          if (scannedValue === "1234") {
            onScanSuccess();
          } else {
            onScanFailure();
          }
        }}
      />
    </React.Fragment>
  );
};

QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired,
  onScanFailure: PropTypes.func.isRequired,
};

export default QrScanner;
