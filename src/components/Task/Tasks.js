import React from "react";
import TaskList from "./TaskList";
import styles from "./Tasks.module.css";

const Tasks = (props) => {
	return (
		<div className={styles["tasks-main-page"]}>
			<TaskList tasks={props.tasks} />
		</div>
	);
};

export default Tasks;
