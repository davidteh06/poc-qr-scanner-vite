# Spend & Earn QR Code Scanner

## Overview

The Spend & Earn application allows users to input their spending amounts and scan QR codes to earn points. This React-based application, built with Vite, provides an intuitive interface for managing user inputs and scanning QR codes.

## Features

- Input fields for phone number and amount spent
- Validation for Malaysian phone numbers
- Validation for spending amounts (must be greater than 0)
- QR code scanning functionality
- Feedback messages for successful scans and validation errors
- Conditional rendering for a seamless user experience

## Technologies Used

- React
- Vite for development and build
- CSS for styling
- @yudiel/react-qr-scanner for QR code scanning

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidteh06/poc-qr-scanner-vite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd poc-qr-scanner-vite
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the application, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in your Vite configuration).

## Usage

1. Enter your Malaysian phone number and the amount you spent.
2. Click "Submit" to proceed to the QR code scanning interface.
3. Scan the QR code to earn points.
4. You will receive feedback on the success or failure of the scan.

### Sample QR Codes

For testing purposes, you can use the following sample QR codes:

#### Successful Scan

#### Successful Scan

<img src="./src/assets/qr-1234.png" alt="Sample QR Code (1234)" width="150" />

- **Data:** `1234`
- This QR code can be scanned to simulate a successful scan.

#### Wrong Scan

<img src="./src/assets/qr-5678.png" alt="Sample QR Code (5678)" width="150" />

- **Data:** `5678`
- This QR code can be scanned to simulate a wrong scan.
