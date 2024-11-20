import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import PropTypes from "prop-types";

const QrScanner = ({ onScanSuccess, onScanFailure }) => {
  const qrCodeRef = useRef(null);
  const qrCodeReader = useRef(null);

  useEffect(() => {
    if (qrCodeRef.current) {
      qrCodeReader.current = new Html5Qrcode(qrCodeRef.current.id);

      qrCodeReader.current
        .start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText) => {
            if (decodedText === "1234") {
              onScanSuccess();
            } else {
              onScanFailure();
            }
            qrCodeReader.current.stop(); // Stop after one scan
          },
          (errorMessage) => {
            // Handle scan error if needed
          }
        )
        .catch((err) => {
          console.error(err);
        });
    }

    return () => {
      qrCodeReader.current?.stop(); // Cleanup on unmount
    };
  }, []);

  return (
    <React.Fragment>
      <div
        id="reader"
        ref={qrCodeRef}
        style={{ width: "300px", height: "300px" }}
      />
    </React.Fragment>
  );
};

// Add PropTypes validation
QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired,
  onScanFailure: PropTypes.func.isRequired,
};

export default QrScanner;
