import { useState } from 'react';

const SpidrPinInput = ({ name }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const formatPin = (digits) => {
		const parts = [];
		for (let i = 0; i < digits.length; i += 4) {
			parts.push(digits.substring(i, i + 4));
		}
		return parts.join('-');
	};

	const validatePin = (pin) => {
		const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
		return regex.test(pin);
	};

	const handleChange = (e) => {
		let input = e.target.value;
		let digits = input.replace(/\D/g, '');
		if (digits.length > 16) digits = digits.slice(0, 16);
		const formatted = formatPin(digits);
		setValue(formatted);

		if (formatted.length === 19) {
			if (validatePin(formatted)) {
				setError('');
			} else {
				setError('PIN format invalid.');
			}
		} else {
			setError('PIN must be 16 digits.');
		}
	};

	const handleBlur = () => {
		if (!validatePin(value)) {
			setError('PIN must match format ####-####-####-####');
		} else {
			setError('');
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();

		const paste = e.clipboardData.getData('text');
		const digits = paste.replace(/\D/g, '').slice(0, 16);
		const formatted = formatPin(digits);
		setValue(formatted);

		if (formatted.length === 19 && validatePin(formatted)) {
			setError('');
		} else {
			setError('Invalid PIN format from paste.');
		}
	};

	return (
		<div>
			<input
				type="text"
				name={name}
				value={value}
				maxLength={19}
				onChange={handleChange}
				onBlur={handleBlur}
				onPaste={handlePaste}
				aria-describedby="spidrPinError"
				aria-invalid={error ? 'true' : 'false'}
				required
			/>
			{error && (
				<div
					id="spidrPinError"
					style={{ color: 'salmon', marginTop: '0.25rem', fontSize: '0.85rem' }}
					role="alert"
				>
					{error}
				</div>
			)}
		</div>
	);
};

export default SpidrPinInput;
