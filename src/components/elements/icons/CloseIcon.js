const CloseIcon = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill="none"
				stroke="inherit"
				strokeWidth="1.06"
				d="M16,16 L4,4"
			></path>
			<path
				fill="none"
				stroke="inherit"
				strokeWidth="1.06"
				d="M16,4 L4,16"
			></path>
		</svg>
	);
};

export default CloseIcon;
