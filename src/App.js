import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import TasksPage, { loader as tasksLoader } from "./pages/Tasks";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import NewTaskPage, { action as newTaskAction } from "./pages/NewTask";
import TasksRootLayout from "./pages/TasksRoot";
import TaskDetailsPage, {
	loader as taskDetailsLoader,
} from "./pages/TaskDetails";

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
					},
					{
						path: "/tasks/new",
						element: <NewTaskPage />,
						action: newTaskAction,
					},
					{
						path: "/tasks/:taskId",
						element: <TaskDetailsPage />,
						loader: taskDetailsLoader,
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
