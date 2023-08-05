import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
	const className = `${styles.button} ${
		props.className ? props.className : ""
	}`;
	return (
		<button className={className} onClick={props.onClick} type={props.type}>
			{props.children}
		</button>
	);
};

export default Button;
