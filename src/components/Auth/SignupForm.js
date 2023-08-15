import React from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./SignupForm.module.css";

const SignupForm = () => {
	return (
		<Card className={styles["login-form"]}>
			<form>
				<h3>SignUp Form</h3>
				<div className={styles.details}>
					<div className={styles.detail}>
						<label htmlFor="name">Full Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="username">Username or Email</label>
						<input type="text" name="username" id="username" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
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
