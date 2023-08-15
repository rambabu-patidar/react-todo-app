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
					<NavLink
						to=""
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="auth?mode=login"
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Authentication
					</NavLink>
				</li>
				<li>
					<NavLink
						to="tasks"
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Tasks
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
