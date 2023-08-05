import React from "react";
import TaskList from "./TaskList";
import styles from "./Tasks.module.css";

const Tasks = () => {
	return (
		<div className={styles["tasks-main-page"]}>
			<h2>Your Tasks</h2>
			<TaskList />
		</div>
	);
};

export default Tasks;
