import Button from "../elements/Button";

const PageNumber = ({ onClick, pageNumber, isActive }) => {
	return (
		<Button
			id={`page-number-${pageNumber}`}
			isActive={isActive}
			icon
			onClick={onClick}
			style={{ lineHeight: 0.5 }}
		>
			{pageNumber}
		</Button>
	);
};

export default PageNumber;
