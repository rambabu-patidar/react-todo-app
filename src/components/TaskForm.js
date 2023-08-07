import React from "react";
import { useNavigate, Form, useNavigation } from "react-router-dom";

import styles from "./TaskForm.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const TaskForm = () => {
	const navigate = useNavigate();
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const cancelHandler = () => {
		navigate("..");
	};

	return (
		<Card className={styles.card}>
			<Form method="POST" className={styles.form}>
				<div className={styles.details}>
					<div className={styles.detail}>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="priority">Priority</label>
						<input type="number" id="priority" name="priority" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="deadline">Deadline</label>
						<input type="date" id="deadline" name="deadline" />
					</div>
					<div className={styles.detail}>
						<label htmlFor="resource">Resources</label>
						<input
							type="text"
							id="resource"
							name="resource"
							placeholder="For eg. link"
						/>
					</div>
					<div className={styles.detail}>
						<label htmlFor="description">Description</label>
						<input type="text" id="description" name="description" />
					</div>
				</div>
				<div className={styles.actions}>
					<Button type="button" onClick={cancelHandler}>
						Cancel
					</Button>
					<Button disabled={isSubmitting}>
						{isSubmitting ? "Submitting" : "Submit"}
					</Button>
				</div>
			</Form>
		</Card>
	);
};

export default TaskForm;
