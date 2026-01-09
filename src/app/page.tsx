import type { Metadata } from 'next';
import styles from './page.module.scss';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Section from '../components/Section';
import AsideDetail from '../components/AsideDetail';
import ProgressBar from '../components/ProgressBar';
import EmploymentItem from '../components/Employment/EmploymentItem';
import Skills from '../components/Skills/Skills';
import content from '../data/content';

const SITE_URL = 'https://marcel.osoian.com';

const seoDescription =
  'Senior Software Engineer with 10+ years of experience in ' +
  'Node.js, TypeScript, Golang, Kubernetes, and blockchain, ' +
  'building scalable cloud-native systems.';

export const metadata: Metadata = {
  title: 'Osoian Marcel — Software Engineer | CV & Portfolio',
  description: seoDescription,
  authors: [{ name: 'Osoian Marcel' }],
  keywords: [
    'Software Engineer',
    'Node.js Developer',
    'TypeScript',
    'Kubernetes',
    'Blockchain Developer',
    'Full Stack Engineer',
    'Tech Lead',
    'DevOps',
    'Microservices',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'profile',
    title: 'Osoian Marcel — Software Engineer | CV & Portfolio',
    description: seoDescription,
    siteName: 'Osoian Marcel - Software Engineer',
    locale: 'en_US',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Osoian Marcel - Software Engineer CV'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osoian Marcel — Software Engineer',
    description: seoDescription,
    creator: '@OsoianMarcel',
    images: [`${SITE_URL}/og-image.png`]
  }
};

export default function Home() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Person',
            name: 'Osoian Marcel',
            url: SITE_URL,
            image: `${SITE_URL}/photo-of-me.jpg`,
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
                <a
                  href={content.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  {content.github.label}
                </a>
              </p>
            </AsideDetail>
          </Section>

          <Section title="Skills">
            {content.skills.map((skill, idx) => (
              <div className={styles.skill_section} key={idx}>
                <div className={styles.skill_name}>{skill.name}</div>
                <ProgressBar
                  val={skill.progress}
                  label={`${skill.name} skill level`}
                />
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
                {job.skills && <Skills skills={job.skills} />}
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
}
