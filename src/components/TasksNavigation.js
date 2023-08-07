import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./TasksNavigation.module.css";

const TasksNavigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				<li>
					<NavLink
						to="/tasks"
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						All Tasks
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/tasks/new"
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
