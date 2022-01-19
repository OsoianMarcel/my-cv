import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Section from '../components/Section';
import AsideDetail from '../components/AsideDetail';
import ProgressBar from '../components/ProgressBar';

const Home: NextPage = () => {
	return (
		<Layout>

			<Head>
				<title>Osoian Marcel — CV</title>
			</Head>

			<main className={styles.main}>
				<aside className={styles.aside}>
					<Section title="Details">
						<AsideDetail title="Address">
							<p>
								Chisinau<br/>
								Moldova
							</p>
						</AsideDetail>

						<AsideDetail title="Email">
							<p><NoSSR>osoian.marcel.d@gmail.com</NoSSR></p>
						</AsideDetail>

						<AsideDetail title="Phone">
							<p>+373-791-25-905</p>
						</AsideDetail>

						<AsideDetail title="Github">
							<p>
								<a href="https://github.com/OsoianMarcel?tab=repositories"
								   target="_blank"
								   rel="noreferrer">
									OsoianMarcel
								</a>
							</p>
						</AsideDetail>
					</Section>

					<Section title="Skills">
						Back End
						<ProgressBar val="10"/>
						<br/>

						Front End
						<ProgressBar val="7"/>
						<br/>

						DevOps
						<ProgressBar val="6"/>
					</Section>
				</aside>
				<section className={styles.content}>
					<Section title="Profile">
						<p>
							My name is Marcel and I am a web developer currently living in Chisinau, Republic of Moldova.
							I have over 10 years of professional working experience. In this time, I had the
							opportunity in achieving different knowledges in the IT sphere, starting with web
							technologies, desktop and mobile applications to even hardware products.
						</p>
					</Section>
					<Section title="Employment history">
						Wiii
					</Section>
				</section>
			</main>
		</Layout>
	);
};

export default Home;
