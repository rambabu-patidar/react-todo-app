import React from "react";
import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<h1>Todo List</h1>
			</Link>
			<MainNavigation />
		</header>
	);
};

export default Header;
