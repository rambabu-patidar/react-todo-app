import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
	const cardStyles = `${styles.card} ${props.className ? props.className : ""}`;
	return <div className={cardStyles}>{props.children}</div>;
};

export default Card;
