import React from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete, MdLowPriority, MdClose } from "react-icons/md";

import Card from "./UI/Card";

import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
	const onEditTaskHandler = () => {};
	const onDeleteTaskHandler = () => {};
	const onToggleStatusHandler = () => {};
	const onPriorityTaskHandler = () => {};

	return (
		<Card className={styles["task-item"]}>
			<div className={styles.title}>{props.title}</div>
			<ul>
				<li title="task priority">{props.priority}</li>
				<li>
					<FaEdit
						className={styles.icon}
						title="edit task"
						onClick={onEditTaskHandler}
					/>
				</li>
				<li>
					<MdDelete
						className={styles.icon}
						title="delete task"
						onClick={onDeleteTaskHandler}
					/>
				</li>
				<li>
					{props.status ? (
						<FaCheck
							className={styles.icon}
							title="completed task"
							onClick={onToggleStatusHandler}
						/>
					) : (
						<MdClose
							className={styles.icon}
							title="uncomplete task"
							onClick={onToggleStatusHandler}
						/>
					)}
				</li>
				<li>
					<MdLowPriority
						className={styles.icon}
						title="edit priority"
						onClick={onPriorityTaskHandler}
					/>
				</li>
			</ul>
		</Card>
	);
};

export default TaskItem;
