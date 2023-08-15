import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./TasksNavigation.module.css";

const TasksNavigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				<li>
					<NavLink
						to=""
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						All Tasks
					</NavLink>
				</li>
				<li>
					<NavLink
						to="new"
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						New Task
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default TasksNavigation;
