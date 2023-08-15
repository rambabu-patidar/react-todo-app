import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	const errorMessage = error
		? error.message
		: "Please look in your application and resolve it.";

	return (
		<div style={{ textAlign: "center", padding: "2rem" }}>
			<h1>Something went wrong!</h1>
			<p style={{ fontSize: "2rem" }}>{errorMessage}</p>
			<Link
				to=""
				style={{
					textDecoration: "none",
					color: "gold",
					display: "inline-block",
					margin: "1rem",
				}}
			>
				Go back to Home
			</Link>
		</div>
	);
}
