import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
	const inputNameRef = useRef();
	const [inputName, setInputName] = useState("");
	const [isValidName, setIsValidName] = useState(true);

	const [inputPassword, setInputPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);

	useEffect(() => {
		inputNameRef.current.focus();
	}, []);

	const nameInputChangeHandler = (event) => {
		console.log(event.target.value);
		if (!event.target.value.includes("_")) {
			setIsValidName(false);
		} else {
			setIsValidName(true);
		}
		setInputName(event.target.value);
	};

	const passwordInputChangeHandler = (event) => {
		console.log(event.target.value);
		if (event.target.value.length < 8) {
			setIsValidPassword(false);
		} else {
			setIsValidPassword(true);
		}
		setInputPassword(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const credential = {
			username: inputName,
			password: inputPassword,
		};

		console.log(credential);
	};

	return (
		<Card className={styles["login-form"]}>
			<form onSubmit={submitHandler}>
				<h3>Login Form</h3>
				<div className={styles.details}>
					<div className={styles.detail}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							value={inputName}
							onChange={nameInputChangeHandler}
							ref={inputNameRef}
							placeholder="must contains underscore"
							className={isValidName ? "" : styles.invalid}
						/>
					</div>
					<div className={styles.detail}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							value={inputPassword}
							onChange={passwordInputChangeHandler}
							placeholder="minimum length: 8"
							className={isValidPassword ? "" : styles.invalid}
						/>
					</div>
				</div>
				<div className={styles.actions}>
					<Link to="?mode=signup">SignUp</Link>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Card>
	);
};

export default LoginForm;
