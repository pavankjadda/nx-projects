import styles from './home.module.scss';
import Header from './Header';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
	return (
		<div className={styles['container']}>
			<h1>Welcome to Home!</h1>
			<Header></Header>
		</div>
	);
}

export default Home;
