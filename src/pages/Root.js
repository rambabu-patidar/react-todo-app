import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LoadingPage from "./Loading";

const RootLayout = () => {
	const navigation = useNavigation();

	const isLoading = navigation.state === "loading";
	return (
		<>
			<Header />
			{isLoading ? <LoadingPage /> : <Outlet />}
		</>
	);
};

export default RootLayout;
