import { useState } from 'react';
import './InterestForm.css';
import PhoneInput from './PhoneInput';
import SpidrPinInput from './SpidrPinInput';

const InterestForm = () => {
    const [isPhoneValid, setIsPhoneValid] = useState(false);

	const handlePhoneValidityChange = (valid) => {
		setIsPhoneValid(valid);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isPhoneValid) {
			alert('Please enter a valid 10-digit phone number.');
			return;
		}

		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

        if (data.firstName) data.firstName = data.firstName.trim();
	    if (data.lastName) data.lastName = data.lastName.trim();
        if (data.email) data.email = data.email.trim();

        const cost = Number(data.costGuess);
        if (cost < 0 || cost > 9999)
        {
            alert('Please enter a cost guess between $0 and $9,999.');
            return;
        }
        
		console.table(data);
	};
    return (
        <div className="interest-form-container">
            <form onSubmit={handleSubmit}>
                <h2 className="interest-form-title">Show Your Interest in Spidr's Next Big Thing!</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name<span className="required-asterisk">*</span></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        maxLength={50}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name<span className="required-asterisk">*</span></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        maxLength={50}
                        required
                    />
                </div>
                <div className="form-group">
					<label htmlFor="phone">Phone Number<span className="required-asterisk">*</span></label>
					<PhoneInput onValidityChange={handlePhoneValidityChange} />
				</div>
                <div className="form-group">
                    <label htmlFor="email">Email Address<span className="required-asterisk">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="costGuess">Guess the Air Fryer’s Cost ($)<span className="required-asterisk">*</span></label>
                    <input
                        type="number"
                        id="costGuess"
                        name="costGuess"
                        min="0"
                        max="9999"
                        step="1"
                        required
                        title="Please enter a dollar amount between 0 and 9999."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="spidrPin">Very, VERY Secret Spidr PIN<span className="required-asterisk">*</span></label>
                    <label htmlFor="spidrPinFormat" id="spidrPinFormat">Format: ####-####-####-####</label>
                    <SpidrPinInput name="spidrPin" />
                </div>
                <button type="submit" className="submit-button" disabled={!isPhoneValid}>
					Submit
				</button>
            </form>
        </div>
    );
};

export default InterestForm;
