import { useEffect, useContext, useRef, useState } from "react";

import CameraIcon from "./elements/icons/CameraIcon";
import CloseIcon from "./elements/icons/CloseIcon";
import {
	Button,
	Label,
	Text,
	Card,
	FormSegment,
	InputWrapper,
} from "./elements";

import postsContext from "../context/posts/postsContext";

const initialPostForm = {
	title: "",
	content: "",
	category_id: "",
	image: null,
};
const initialFormError = {
	title: "",
	content: "",
	category_id: "",
	image: "",
};

const BlogForm = () => {
	const [postForm, setPostForm] = useState(initialPostForm);
	const [formError, setFormError] = useState(initialFormError);
	const [imageName, setImageName] = useState("");

	const { categories, getCategories, createPost, error, success } =
		useContext(postsContext);

	const [successStatus, setSuccessStatus] = useState(false);

	const inputRef = useRef(null);

	const updatePostInputs = (e) => {
		const { type, name, files, value } = e.target;
		e.preventDefault();
		if (type === "file") {
			setImageName(files[0].name);
			files.length > 0 &&
				setPostForm({
					...postForm,
					[name]: files[0],
				});
			setFormError({
				...formError,
				image: "",
			});
			return;
		}
		setPostForm({
			...postForm,
			[name]: value,
		});
		if (value === "") {
			setFormError({
				...formError,
				[name]: "*Dit veld is verplicht",
			});
			return;
		}
		setFormError({
			...formError,
			[name]: "",
		});
	};

	const formatData = () => {
		const formData = new FormData();
		Object.keys(postForm).forEach((key) => {
			formData.append(key, postForm[key]);
		});
		return formData;
	};

	const validateForm = () => {
		Object.keys(postForm).forEach((key) => {
			if (postForm[key] === "" || postForm[key] === null) {
				setFormError((prevState) => ({
					...prevState,
					[key]: "*Dit veld is verplicht",
				}));
				return;
			}
			setFormError({ ...formError, [key]: "" });
		});
		return Object.keys(postForm).every((key) => postForm[key] !== "");
	};

	const createNewPost = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			await createPost(formatData());
			setImageName("");
			setPostForm(initialPostForm);
		}
	};

	const resetImageInputField = () => {
		setPostForm({ ...postForm, image: null });
		setImageName("");
		setFormError((prevState) => ({
			...prevState,
			image: "*Dit veld is verplicht",
		}));
	};

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		if (success) {
			setSuccessStatus(true);
			setTimeout(() => setSuccessStatus(false), 1500);
		}
	}, [success]);

	return (
		<form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<FormSegment>
				<Label htmlFor="title">Berichtnaam</Label>
				{formError.title && <Text type="error">{formError.title}</Text>}
				<InputWrapper>
					<input
						placeholder="Geen titel"
						type="text"
						name="title"
						value={postForm.title}
						onChange={updatePostInputs}
						required
					/>
				</InputWrapper>
			</FormSegment>
			<FormSegment>
				<Label htmlFor="category_id">Categorie</Label>
				{formError.category_id && (
					<Text type="error">{formError.category_id}</Text>
				)}

				<InputWrapper>
					<select
						style={{
							fontStyle: postForm.category_id === "" ? "italic" : "initial",
							color: postForm.category_id === "" ? "hsl(0 0% 77%)" : "black",
						}}
						name="category_id"
						value={postForm.category_id}
						onChange={updatePostInputs}
						required
					>
						<option value={""} disabled>
							Geen categorie
						</option>
						{categories &&
							categories.map((category) => (
								<option key={category.id} id={category.id} value={category.id}>
									{category.name}
								</option>
							))}
					</select>
				</InputWrapper>
			</FormSegment>
			<FormSegment>
				<Label htmlFor="image">Header afbeelding</Label>
				{formError.image && <Text type="error">{formError.image}</Text>}

				<div style={{ width: "max-content" }}>
					<InputWrapper>
						<div className="fileUploadWrapper">
							<CameraIcon width="12px" />
							<Button
								onClick={(e) => {
									e.preventDefault();
									inputRef.current.click();
								}}
								secondary
								size="compact"
								style={{ lineHeight: 1.3 }}
							>
								Kies bestand
							</Button>
						</div>
						<input
							ref={inputRef}
							onChange={updatePostInputs}
							accept="image/*"
							style={{ display: "none" }}
							type="file"
							name="image"
							required
						/>
						{imageName && (
							<Card
								style={{ background: "transparent" }}
								size="xs"
								alignItems="center"
								flexDirection="row"
							>
								<Button style={{ padding: 0 }} icon>
									<CloseIcon
										cursor="pointer"
										width="12px"
										onClick={resetImageInputField}
									/>
								</Button>
								<p style={{ fontSize: "12px" }}>{imageName}</p>
							</Card>
						)}
					</InputWrapper>
				</div>
			</FormSegment>
			<FormSegment>
				<Label htmlFor="content">Bericht</Label>
				{formError.content && <Text type="error">{formError.content}</Text>}

				<InputWrapper>
					<textarea
						placeholder="Schrijf een bericht..."
						type="text"
						name="content"
						value={postForm.content}
						onChange={updatePostInputs}
						required
					/>
				</InputWrapper>
			</FormSegment>
			<Button
				disabled={successStatus}
				success={successStatus}
				cta
				primary
				onClick={createNewPost}
			>
				{!successStatus ? "Bericht aanmaken" : "Success"}
			</Button>
		</form>
	);
};

export default BlogForm;
