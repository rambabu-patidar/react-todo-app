import React from "react";
import TaskForm from "../components/TaskForm";
import { json, redirect } from "react-router-dom";

const NewTaskPage = () => {
	return <TaskForm />;
};

export default NewTaskPage;

export async function action({ request, params }) {
	const data = await request.formData();

	const taskData = {
		title: data.get("title"),
		priority: data.get("priority"),
		deadline: data.get("deadline"),
		resource: data.get("resource"),
		description: data.get("description"),
		status: false,
	};

	const response = await fetch(
		"https://todo-app-27b19-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(taskData),
		}
	);

	if (!response.ok) {
		throw json({ message: "Could not send the task!" }, { status: 500 });
	}

	return redirect("/tasks");
}
