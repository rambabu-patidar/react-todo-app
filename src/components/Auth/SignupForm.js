import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./SignupForm.module.css";

const SignupForm = () => {
	const inputNameRef = useRef();

	const [inputName, setInputName] = useState("");

	const [inputUsername, setInputUsername] = useState("");
	const [isValidUsername, setIsValidUsername] = useState(true);

	const [inputPassword, setInputPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);

	const [inputConfirmPassword, setInputConfirmPassword] = useState("");
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

	const nameInputChangeHandler = (event) => {
		setInputName(event.target.value);
	};

	const usernameInputChangeHandler = (event) => {
		const value = event.target.value;
		if (!value.includes("_")) {
			setIsValidUsername(false);
		} else {
			setIsValidUsername(true);
		}
		setInputUsername(value);
	};

	const passwordInputChangeHandler = (event) => {
		const value = event.target.value;
		if (value.length < 8) {
			setIsValidPassword(false);
		} else {
			setIsValidPassword(true);
		}

		setInputPassword(value);
	};

	const confirmPasswordInputChangeHandler = (event) => {
		const value = event.target.value;
		if (value !== inputPassword || value.length <= 0) {
			setIsValidConfirmPassword(false);
		} else {
			setIsValidConfirmPassword(true);
		}
		setInputConfirmPassword(value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const user = {
			name: inputName,
			username: inputUsername,
			password: inputPassword,
		};

		console.log(user);
	};

	return (
		<Card className={styles["login-form"]}>
			<form onSubmit={submitHandler}>
				<h3>SignUp Form</h3>
				<div className={styles.details}>
					<div className={styles.detail}>
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={nameInputChangeHandler}
							value={inputName}
							placeholder="name"
						/>
					</div>
					<div className={styles.detail}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="must contain underscore"
							ref={inputNameRef}
							onChange={usernameInputChangeHandler}
							value={inputUsername}
							className={isValidUsername ? "" : styles.invalid}
						/>
					</div>
					<div className={styles.detail}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="minimum length: 8"
							onChange={passwordInputChangeHandler}
							value={inputPassword}
							className={isValidPassword ? "" : styles.invalid}
						/>
					</div>
					<div className={styles.detail}>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							onChange={confirmPasswordInputChangeHandler}
							value={inputConfirmPassword}
							placeholder="confirm again"
							className={isValidConfirmPassword ? "" : styles.invalid}
						/>
					</div>
				</div>
				<div className={styles.actions}>
					<Link to="?mode=login">Login</Link>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Card>
	);
};

export default SignupForm;
