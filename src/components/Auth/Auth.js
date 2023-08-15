import React from "react";
import { useSearchParams } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Card from "../UI/Card";

import styles from "./Auth.module.css";

const Auth = () => {
	const [params] = useSearchParams();

	const mode = params.get("mode") || "login";

	if (mode !== "login" && mode !== "signup") {
		throw new Error("Invalid authentication mode!");
	}

	const authForm = mode === "login" ? <LoginForm /> : <SignupForm />;

	return (
		<Card className={styles["auth-card"]}>
			<h1 className={styles.heading}>Welcome, to our Todo App</h1>
			{authForm}
		</Card>
	);
};

export default Auth;
