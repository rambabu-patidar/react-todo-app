import React from "react";
import TasksNavigation from "../components/Task/TasksNavigation";
import { Outlet } from "react-router-dom";

const TasksRootLayout = () => {
	return (
		<>
			<TasksNavigation />
			<Outlet />
		</>
	);
};

export default TasksRootLayout;
