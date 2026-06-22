import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroTitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/main/narrativa">
            Explorar Documentación 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Plataforma de e-learning para programadores basada en flujos reales de GitHub">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--12 text--center padding-vert--lg')}>
                <Heading as="h2">Bienvenido a la Evolución del Aprendizaje Técnico</Heading>
                <p>
                  FragmentsV2 no es solo un LMS. es un puente entre la academia y la industria, 
                  utilizando el poder de GitHub para transformar la forma en que aprendemos a programar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
