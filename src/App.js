import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import TasksPage, {
	loader as tasksLoader,
	action as tasksAction,
} from "./pages/Tasks";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import NewTaskPage, { action as newTaskAction } from "./pages/NewTask";
import TasksRootLayout from "./pages/TasksRoot";
import TaskDetailsPage, {
	loader as taskDetailsLoader,
} from "./pages/TaskDetails";
import EditTaskPage, { action as editTaskAction } from "./pages/EditTask";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/auth",
				element: <AuthPage />,
			},
			{
				path: "/tasks",
				element: <TasksRootLayout />,
				children: [
					{
						index: true,
						element: <TasksPage />,
						loader: tasksLoader,
						action: tasksAction,
					},
					{
						path: "/tasks/new",
						element: <NewTaskPage />,
						action: newTaskAction,
					},
					{
						path: "/tasks/:taskId",
						id: "task-details", // this will help use to get the loader data of this route to another nested route.
						loader: taskDetailsLoader,
						children: [
							{
								index: true,
								element: <TaskDetailsPage />,
							},
							{
								path: "/tasks/:taskId/edit",
								element: <EditTaskPage />,
								action: editTaskAction,
							},
						],
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
