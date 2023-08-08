import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<AiOutlineLoading3Quarters className={styles.icon} />
			<p>Please wait a while</p>
		</div>
	);
};

export default Loading;
