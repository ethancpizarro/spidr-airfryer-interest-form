# Spidr Air Fryer Interest Form

This React app implements an **interest form** to be embedded at the bottom of a hypothetical Spidr Design air fryer landing page. The user interface is designed to match Spidr's brand style by using a similar color palette, font, and on-hover actions for buttons.

---

## Features

- Collects user details
  - First Name
  - Last Name
  - Phone Number (with live formatting and validation)
  - Email Address
  - Guess of the air fryer’s cost (validated between $0 and $9,999)
  - Very, VERY Secret Spidr PIN (16-digit input formatted as `####-####-####-####`)
- Phone number input
  - Formats user input in `(###) ###-####` style
  - Validates for exactly 10 digits
  - Handles paste events
- Spidr PIN input
  - Enforces strict 16-digit format with dash separators
  - Validates on change, blur, and paste events
- Submit button is disabled until the phone number is valid
- On submit
  - Validates phone number and cost guess range
  - Prints all form data to the console as a table

---

## Styling

- Designed to match the [Spidr Design](https://spidr.design/) brand identity
  - Primary background color: `#252627`
  - Accent color: `#479daf`
  - Typography uses **Raleway** font family
  - Button styling and on-hover effects match those of "We're Hiring" button at the top of the page
- Colors extracted from the Spidr Design website using a color picker tool

---

## Project Structure

- `InterestForm.jsx`: Main form component managing state, validation, and submit logic  
- `PhoneInput.jsx`: Controlled phone number input with formatting and validation  
- `SpidrPinInput.jsx`: Controlled PIN input with strict formatting and validation  
- `InterestForm.css`: Styles for form layout and visual identity

---

## Setup & Deployment

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ethancpizarro/spidr-airfryer-interest-form.git
   cd https://github.com/ethancpizarro/spidr-airfryer-interest-form.git

2. **Install dependencies:**

   ```bash
   npm install

3. **Run locally:**

   ```bash
   npm run dev

4. **Build for production:**

   ```bash
   npm run build

5. **Deploy to your choice of free hosting:**
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 (free tier)
   - Google Cloud Storage public bucket

---

## Live Demo

Access the deployed app at [this link](https://ethancpizarro.github.io/spidr-airfryer-interest-form/).
