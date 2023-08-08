import React from "react";
import { json, redirect, useLoaderData } from "react-router-dom";

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

export async function action({ request, params }) {
	const data = await request.json();
	const id = data.id;
	const method = request.method;

	let URL;
	let requestInit;
	let errorMessage;
	console.log(method);
	if (method === "DELETE") {
		URL = `https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}/.json`;
		requestInit = {
			method,
		};
		errorMessage = "Could not delete task!";
	} else if (method === "PUT") {
		// to toggle the task status
		URL = `https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}/status/.json`;
		requestInit = {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(!data.status),
		};
		errorMessage = "Could not change status of task!";
	}
	console.log(URL, requestInit, errorMessage);

	const response = await fetch(URL, requestInit);

	if (!response.ok) {
		throw json({ message: errorMessage }, { status: 500 });
	}
	return redirect("/tasks");
}
