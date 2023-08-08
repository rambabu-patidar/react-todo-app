import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";

import TaskDetails from "../components/TaskDetails";

const TaskDetailsPage = () => {
	const task = useRouteLoaderData("task-details");

	return <TaskDetails task={task} />;
};

export default TaskDetailsPage;

export async function loader({ request, params }) {
	const id = params.taskId;

	const response = await fetch(
		"https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
	);

	if (!response.ok) {
		throw json({ message: "Could not fetch task!" }, { status: 500 });
	}

	const data = await response.json();

	// find the task from the tasks object using the key available in params
	let task;
	for (const key in data) {
		if (key === id) {
			task = {
				id: key,
				title: data[key].title,
				priority: data[key].priority,
				status: data[key].status,
				deadline: data[key].deadline,
				resource: data[key].resource,
				description: data[key].description,
			};
		}
	}

	return task;
}
