import React from "react";
import { json, useRouteLoaderData, redirect } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const EditTaskPage = () => {
	const task = useRouteLoaderData("task-details");

	return <TaskForm task={task} />;
};

export default EditTaskPage;

export async function action({ request, params }) {
	const data = await request.formData();

	const id = params.taskId;

	const editedTask = {
		title: data.get("title"),
		priority: data.get("priority"),
		deadline: data.get("deadline"),
		resource: data.get("resource"),
		description: data.get("description"),
		status: false,
	};

	const response = await fetch(
		"https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/" +
			id +
			"/.json",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editedTask),
		}
	);

	if (!response.ok) {
		throw json({ message: "Could not edit task!" }, { status: 500 });
	}

	console.log(await response.json());
	return redirect("/tasks/" + id);
}
