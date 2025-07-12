import { useState, useEffect } from 'react';

const PhoneInput = ({ name = 'phone', onValidityChange }) => {
	const [phone, setPhone] = useState('');
	const [rawDigits, setRawDigits] = useState('');
	const [error, setError] = useState('');

	const formatPhoneNumber = (value) => {
		const digits = value.replace(/\D/g, '');
		setRawDigits(digits);

		const len = digits.length;
		if (len === 0) return '';
		if (len < 4) return `(${digits}`;
		if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
		if (len <= 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
		return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
	};

	const validateLength = (digits) => {
		let valid = false;
		if (digits.length === 10) {
			setError('');
			valid = true;
		} else if (digits.length === 0) {
			setError('');
		} else {
			setError('Phone number must be exactly 10 digits');
		}
		if (onValidityChange) {
			onValidityChange(valid);
		}
	};

	const handleChange = (e) => {
		const input = e.target.value;
		const formatted = formatPhoneNumber(input);
		setPhone(formatted);
		validateLength(rawDigits);
	};

	const handleBlur = () => {
		validateLength(rawDigits);
	};

    const handlePaste = (e) => {
        e.preventDefault();

        const clipboardData = e.clipboardData.getData('Text') || '';
        const digits = clipboardData.replace(/\D/g, '').slice(0, 10);

        if (digits.length === 0) return;

        const formatted = formatPhoneNumber(digits);
        setPhone(formatted);
        setRawDigits(digits);
        validateLength(digits);
    }

	useEffect(() => {
		validateLength(rawDigits);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rawDigits]);

	return (
		<div>
			<input
				type="tel"
				value={phone}
				onChange={handleChange}
				onBlur={handleBlur}
                onPaste={handlePaste}
				maxLength={14}
				autoComplete="tel"
				aria-label="Phone number"
				aria-describedby="phone-error"
				required
			/>
			<input type="hidden" name={name} value={rawDigits} />
			{error && (
				<div id="phone-error" style={{ color: 'salmon', fontSize: '0.85rem', marginTop: '0.25rem' }}>
					{error}
				</div>
			)}
		</div>
	);
};

export default PhoneInput;
