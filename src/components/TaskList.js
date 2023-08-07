import React from "react";

import TaskItem from "./TaskItem";
import Card from "./UI/Card";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
	const { tasks } = props;

	console.log(tasks);
	return (
		<Card className={styles["task-list"]}>
			{tasks.length ? (
				props.tasks.map((task) => (
					<TaskItem
						key={task.id}
						id={task.id}
						title={task.title}
						priority={task.priority}
						status={task.status}
						deadline={task.deadline}
						resource={task.resource}
						description={task.description}
					/>
				))
			) : (
				<p>No tasks! Try adding some!</p>
			)}
		</Card>
	);
};

export default TaskList;
