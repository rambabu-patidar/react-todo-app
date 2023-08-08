import React from "react";
import { useNavigate, useSubmit } from "react-router-dom";

import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete, MdLowPriority, MdClose } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

import Card from "./UI/Card";

import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
	const navigate = useNavigate();
	const submit = useSubmit();

	const showTaskHandler = () => {
		navigate(`/tasks/${props.id}`);
		console.log("task div is clicked");
	};

	const onEditTaskHandler = (event) => {
		event.stopPropagation();

		navigate(`/tasks/${props.id}/edit`);
	};

	const onDeleteTaskHandler = (event) => {
		event.stopPropagation();

		submit({ id: props.id }, { method: "DELETE", encType: "application/json" });
	};

	const onToggleStatusHandler = (event) => {
		event.stopPropagation();

		submit(
			{ id: props.id, status: props.status },
			{ method: "PUT", encType: "application/json" }
		);
	};

	const onPriorityTaskHandler = (event) => {
		event.stopPropagation();
	};

	return (
		<Card className={styles["task-item"]} onClick={showTaskHandler}>
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
						<FiCheck
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
