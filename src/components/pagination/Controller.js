import Button from "../elements/Button";

const Controller = ({ onClick, icon, isDisabled, id }) => {
	return (
		<Button
			style={{ padding: "0" }}
			id={id}
			icon
			disabled={isDisabled}
			onClick={onClick}
		>
			{icon}
		</Button>
	);
};

export default Controller;
