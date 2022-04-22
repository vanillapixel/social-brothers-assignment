import Button from "./Button";

import LoadingIcon from "./icons/LoadingIcon";

const Loader = (props) => {
	return (
		<Button {...props} loader>
			<LoadingIcon />
			Loading...
		</Button>
	);
};

export default Loader;
