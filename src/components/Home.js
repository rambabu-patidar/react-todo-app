import React from "react";
import styles from "./Home.module.css";
import todoImage from "../assets/todo.png";

const Home = () => {
	return (
		<main className={styles.main}>
			<section className={styles.content}>
				<h2>Your Daily Task Completion Is Our Priority</h2>
				<p>
					The most simplistic and powerfull application to manage your day to
					day tasks. <br />
					Say good bye to premium todo apps. <br />
					This is all in one solution build by Rambabu for the energetic
					peoples.
				</p>
			</section>
			<section className={styles.image}>
				<img src={todoImage} alt="todo app png" />
			</section>
		</main>
	);
};

export default Home;
