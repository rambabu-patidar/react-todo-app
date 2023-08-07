import React from "react";
import { json, useLoaderData } from "react-router-dom";

import Tasks from "../components/Tasks";

const TasksPage = () => {
	const tasks = useLoaderData();

	return <Tasks tasks={tasks} />;
};

export default TasksPage;

export async function loader() {
	const response = await fetch(
		"https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
	);

	if (!response.ok) {
		throw json(
			{ message: "Response is not ok!. Could not fetch data1" },
			{ status: 500 }
		);
	}

	const data = await response.json();

	const tasks = [];
	for (const key in data) {
		const taskObject = {
			id: key,
			title: data[key].title,
			priority: data[key].priority,
			status: data[key].status,
			deadline: data[key].deadline,
			resource: data[key].resource,
			description: data[key].description,
		};

		tasks.push(taskObject);
	}
	return tasks;
}
