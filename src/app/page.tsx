import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './page.module.scss';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Section from '../components/Section';
import AsideDetail from '../components/AsideDetail';
import ProgressBar from '../components/ProgressBar';
import EmploymentItem from '../components/Employment/EmploymentItem';
import Skills from '../components/Skills/Skills';
import content from '../configs/content';

const Home: NextPage = () => {
  const title = 'Osoian Marcel — Software Engineer';
  const description = 'Curriculum vitae of Osoian Marcel (Software Engineer)';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Osoian Marcel" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:site_name"
          content="Curriculum vitae of Osoian Marcel"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content="https://marcel.osoian.com" />
        <meta
          property="og:image"
          content="https://marcel.osoian.com/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1078" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Curriculum vitae of Osoian Marcel"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Person',
              name: 'Osoian Marcel',
              url: 'https://marcel.osoian.com',
              image: 'https://marcel.osoian.com/photo-of-me.jpg',
              sameAs: [
                'https://github.com/OsoianMarcel',
                'https://www.linkedin.com/in/osoian-marcel/',
                'https://www.facebook.com/marcel.osoian',
                'https://www.instagram.com/osoian.marcel/',
                'https://x.com/OsoianMarcel'
              ],
              jobTitle: 'Software Engineer'
            })
          }}
        />
      </Head>

      <main className={styles.main}>
        <aside className={styles.aside}>
          <Section title="Details">
            <AsideDetail title="Address">
              <p className="ws-pre-line">{content.address}</p>
            </AsideDetail>

            <AsideDetail title="Email">
              <p>
                <NoSSR>
                  <a href={`mailto:${content.email}`}>{content.email}</a>
                </NoSSR>
              </p>
            </AsideDetail>

            <AsideDetail title="Github">
              <p>
                <a href={content.github.url} target="_blank" rel="noreferrer">
                  {content.github.label}
                </a>
              </p>
            </AsideDetail>
          </Section>

          <Section title="Skills">
            {content.skills.map((skill, idx) => (
              <div className={styles.skill_section} key={idx}>
                <div className={styles.skill_name}>{skill.name}</div>
                <ProgressBar val={skill.progress} />
                <ul className={styles.skill_list}>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Languages">
            {content.languages.map((lang, idx) => (
              <div className={styles.lang_section} key={idx}>
                <div className={styles.lang_name}>{lang.name}</div>
                <div className={styles.lang_level}>{lang.level}</div>
              </div>
            ))}
          </Section>
        </aside>
        <section className={styles.content}>
          <Section title="Profile">
            <p className="ws-pre-line">{content.description}</p>
          </Section>

          <Section title="Experience">
            {content.employmentHistory.map((job, index) => (
              <EmploymentItem
                key={index}
                position={job.position}
                company={job.company}
                periodFrom={job.periodFrom}
                periodTo={job.periodTo}
              >
                <ul>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="ws-pre-line">
                      {item}
                    </li>
                  ))}
                </ul>
                <Skills skills={job.skills} />
              </EmploymentItem>
            ))}
          </Section>

          <Section title="Education">
            {content.educationHistory.map((edu, index) => (
              <EmploymentItem
                key={index}
                position={edu.position}
                company={edu.company}
                periodFrom={edu.periodFrom}
                periodTo={edu.periodTo}
              >
                <ul>
                  {edu.responsibilities.map((item, idx) => (
                    <li key={idx}>
                      <i>{item}</i>
                    </li>
                  ))}
                </ul>
              </EmploymentItem>
            ))}
          </Section>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
