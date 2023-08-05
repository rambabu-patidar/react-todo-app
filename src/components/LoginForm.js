import React from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import Button from "./UI/Button";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
	return (
		<Card className={styles["login-form"]}>
			<form>
				<h3>Login Form</h3>
				<div className={styles.details}>
					<div className={styles.detail}>
						<label htmlFor="username">Username or Email</label>
						<input type="text" name="username" id="username" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
				</div>
				<div className={styles.actions}>
					<Link to="/auth/?mode=signup">SignUp</Link>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Card>
	);
};

export default LoginForm;
