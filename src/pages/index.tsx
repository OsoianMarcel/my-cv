import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Section from '../components/Section';
import AsideDetail from '../components/AsideDetail';
import ProgressBar from '../components/ProgressBar';
import EmploymentItem from '../components/Employment/EmploymentItem';
import Skills from '../components/Skills/Skills';

const Home: NextPage = () => {
	return (
		<Layout>

			<Head>
				<title>Osoian Marcel — CV</title>
				<meta name="description" content="Curriculum vitae of Osoian Marcel"/>
				<meta name="author" content="Osoian Marcel"/>
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

						<AsideDetail title="Phone">
							<p>
								<NoSSR>
									<a href="tel:+37379125905">+373-791-25-905</a>
								</NoSSR>
							</p>
						</AsideDetail>

						<AsideDetail title="Email">
							<p>
								<NoSSR>
									<a href="mailto:osoian.marcel.d@gmail.com">osoian.marcel.d@gmail.com</a>
								</NoSSR>
							</p>
						</AsideDetail>

						<AsideDetail title="Github">
							<p>
								<a href="https://github.com/OsoianMarcel?tab=repositories"
								   target="_blank"
								   rel="noreferrer">
									github.com/OsoianMarcel
								</a>
							</p>
						</AsideDetail>
					</Section>

					<Section title="Skills">
						<div className={styles.skill_section}>
							<div className={styles.skill_name}>Back End</div>
							<ProgressBar val="100"/>
							<ul className={styles.skill_list}>
								<li>Node.js, Express, Socket.IO, Sequelize</li>
								<li>PHP, Symfony, Doctrine</li>
								<li>MySQL, Postgres, Redis, RabbitMQ, Minio</li>
								<li>Ubuntu, Nginx, Apache2</li>
								<li>Prometheus, Grafana, Consul</li>
							</ul>
						</div>

						<div className={styles.skill_section}>
							<div className={styles.skill_name}>Front End</div>
							<ProgressBar val="80"/>
							<ul className={styles.skill_list}>
								<li>HTML5, CSS3, JavaScript ES6</li>
								<li>React, Next.js, Vue.js</li>
								<li>Frontend optimization, Technical SEO</li>
							</ul>
						</div>

						<div className={styles.skill_section}>
							<div className={styles.skill_name}>Blockchain</div>
							<ProgressBar val="95"/>
							<ul className={styles.skill_list}>
								<li>Ethereum Blockchain</li>
								<li>Web3, Ethers, BigNumber</li>
								<li>Solidity, Truffle</li>
								<li>MetaMask, Geth, OpenEthereum</li>
							</ul>
						</div>
					</Section>

					<Section title="Languages">
						<div className={styles.lang_section}>
							<div className={styles.lang_name}>Romanian</div>
							<div className={styles.lang_level}>Native</div>
						</div>
						<div className={styles.lang_section}>
							<div className={styles.lang_name}>Russian</div>
							<div className={styles.lang_level}>Advanced</div>
						</div>
						<div className={styles.lang_section}>
							<div className={styles.lang_name}>English</div>
							<div className={styles.lang_level}>Intermediate</div>
						</div>
						<div className={styles.lang_section}>
							<div className={styles.lang_name}>Spanish</div>
							<div className={styles.lang_level}>Beginner</div>
						</div>
					</Section>
				</aside>
				<section className={styles.content}>
					<Section title="Profile">
						<p>
							Full-stack web engineer with 10+ years of professional working experience.
							I had the opportunity in achieving different knowledges in the IT sphere,
							starting with web technologies, desktop and mobile applications to even hardware products.<br/>
							In last 4 years I achieved big experience with creating decentralized applications,
							where most of them were built using Ethereum Blockchain.
						</p>
					</Section>
					<Section title="Experience">
						<EmploymentItem
							position="Full-stack Web Engineer"
							company="DMEX.app"
							periodFrom="Mar 2018"
							periodTo="present"
						>
							<ul>
								<li>
									Architected and developed from scratch the back-end of 3 decentralized
									applications based on Ethereum blockchain:<br/>
									- ethermium.com - decentralized cryptocurrency exchange;<br/>
									- dmex.app - decentralized exchange for margin trading;<br/>
									- criptoleu.com - national cryptocurrency and payment system.
								</li>
								<li>Writing API endpoints and API documentation.</li>
								<li>Smart Contract analysis and integration on back-end.</li>
								<li>Maintaining servers software (web servers, databases, eth nodes, etc).</li>
								<li>Horizontal scaling of Node.js and back-end optimizations.</li>
								<li>Prometheus and Grafana metrics integration.</li>
								<li>Frontend development with Vue.js &amp; Vuex.</li>
							</ul>
							<Skills limit={8} skills={[
								'JavaScript', 'Node.js', 'Express', 'Socket.IO', 'Sequelize',
								'Solidity', 'Web3', 'Geth', 'Openethereum', 'Vue.js', 'Metamask',
								'MySQL', 'Postgres', 'Redis', 'RabbitMQ', 'Consul', 'Minio',
								'Nginx', 'Apache2', 'Ubuntu SysAdmin', 'Docker', 'Letsencrypt',
								'Prometheus', 'Grafana'
							]}/>
						</EmploymentItem>

						<EmploymentItem
							position="Co-Owner &amp; Full-stack Web Engineer"
							company="Devify.net"
							periodFrom="Jun 2016"
							periodTo="Mar 2018"
						>
							<ul>
								<li>Company administration, hiring software developers, project management.</li>
								<li>
									Main projects:<br/>
									- Developed the Front-end of website BtcXChange.ro and their backoffice,
									implemented new design and features;<br/>
									- Continued to develop avigo.md software and maintain their servers;<br/>
									- Developed another projects with my team as Tech Lead.
								</li>
							</ul>
							<Skills skills={[
								'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript',
								'Ubuntu SysAdmin', 'Docker', 'YouTrack'
							]}/>
						</EmploymentItem>

						<EmploymentItem
							position="Full-stack Web Engineer"
							company="Avigo.md"
							periodFrom="Oct 2014"
							periodTo="Jun 2016"
						>
							<ul>
								<li>Worked as main software engineer in the company.</li>
								<li>
									Developed the first version of website avigo.md. Implemented flight
									search engine, booking and payment system.
								</li>
								<li>Developed the backoffice with all needed functional for selling and reporting.</li>
								<li>
									Developed and implemented a library for parsing the booking output from different
									flight booking systems, which allowed the company to simplify sale
									process and ticket generation.
								</li>
							</ul>
							<Skills skills={[
								'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript',
								'Symfony', 'Doctrine', 'Ubuntu SysAdmin', 'SEO'
							]}/>
						</EmploymentItem>

						<EmploymentItem
							position="Full-stack Developer &amp; Hardware Engineer"
							company="Myvic Inc"
							periodFrom="Jul 2013"
							periodTo="Oct 2014"
						>
							<ul>
								<li>
									Developed a store platform (ExtJS SPA) for selling wholesale products.
									Implemented new platform features, configured automatic product importing
									and implemented required features for each customer individually.
								</li>
								<li>
									Built a hardware device and developed it&apos;s software for monitoring activity
									of industrial machines.
								</li>
								<li>
									Participated in development of Cross-Platform mobile application designed
									for displaying and reporting machines states in realtime.
								</li>
							</ul>
							<Skills skills={[
								'JavaScript', 'PHP', 'MySQL', 'Python', 'Websocket',
								'ExtJS & Touch', 'SysAdmin', 'Raspberry PI'
							]}/>
						</EmploymentItem>
					</Section>

					<Section title="Education">
						<EmploymentItem position="Civil Law" company="Technical University of Moldova" periodFrom="2009" periodTo="2013"/>
					</Section>
				</section>
			</main>
		</Layout>
	);
};

export default Home;
