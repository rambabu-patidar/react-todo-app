import React from "react";

import TaskItem from "./TaskItem";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./TaskList.module.css";

const DUMMY_TASKS = [
	{
		id: "t1",
		title: "Listen to twitter space.",
		priority: "1",
		status: false,
	},
	{
		id: "t2",
		title: "Learn react.",
		priority: "2",
		status: false,
	},
	{
		id: "t3",
		title: "Do POTD.",
		priority: "3",
		status: true,
	},
];

const TaskList = () => {
	return (
		<Card className={styles["task-list"]}>
			<div className={styles["task-list-nav"]}>
				<Button>All Tasks</Button>
				<Button>New Task</Button>
			</div>
			{DUMMY_TASKS.map((task) => (
				<TaskItem
					key={task.id}
					id={task.id}
					title={task.title}
					priority={task.priority}
					status={task.status}
				/>
			))}
		</Card>
	);
};

export default TaskList;
