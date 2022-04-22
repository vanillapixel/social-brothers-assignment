const CameraIcon = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#000"
			{...props}
		>
			<circle
				fill="none"
				stroke="#000"
				strokeWidth="1.1"
				cx="10"
				cy="10.8"
				r="3.8"
			></circle>
			<path
				fill="none"
				stroke="inherit"
				d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"
			></path>
		</svg>
	);
};

export default CameraIcon;
