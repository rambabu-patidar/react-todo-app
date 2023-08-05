// Dependencies import
import React from "react";
import { NavLink } from "react-router-dom";

// CSS import
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/auth?mode=login">Authentication</NavLink>
				</li>
				<li>
					<NavLink to="/tasks">Tasks</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
