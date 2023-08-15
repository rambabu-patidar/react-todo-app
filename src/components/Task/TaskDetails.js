import React from "react";
import Card from "../UI/Card";

import styles from "./TaskDetails.module.css";

const TaskDetails = (props) => {
	return (
		<Card className={styles.card}>
			<section className={styles.details}>
				<h2>{props.task.title}</h2>
				<table className={styles.table}>
					<thead>
						<tr className={styles["header-row"]}>
							<th>Property</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Priority</th>
							<td>{props.task.priority}</td>
						</tr>
						<tr>
							<th>Status</th>
							<td>{props.task.status ? "Completed" : "InComplete"}</td>
						</tr>
						<tr>
							<th>Deadline</th>
							<td>{props.task.deadline}</td>
						</tr>
						<tr>
							<th>Resource</th>
							<td>{props.task.resource}</td>
						</tr>
						<tr>
							<th>Description</th>
							<td>{props.task.description}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</Card>
	);
};

export default TaskDetails;
