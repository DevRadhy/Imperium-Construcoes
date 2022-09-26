import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Presentation } from '../components/Presentation';
import { Work } from '../components/Work';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

import banner from '../../public/images/banner.png';

import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {  
  return (
    <div className={styles.container}>
      <Head>
        <title>Imperium | Home</title>
      </Head>

      <Navbar />
      <Image
        src={banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />

      <section className={styles.welcome}>
        <h1>Belas casas feitas para você</h1>

        <p>É hora de fazer o seu sonho se tornar realidade, do jeito que você sempre quis.</p>
      </section>

      <Presentation />

      <section className={styles.workSection}>
        <h2>Veja nosso trabalho</h2>

        <section className={styles.work}>
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
        </section>
      </section>

      <section className={styles.presentation}>
        <h2>Do jeito que você imaginar</h2>
        <p>trabalhamos no para que seu sonho se torne realidade.</p>

        <Button text="Veja mais" />
      </section>

      <section className={styles.testemunial}></section>

      <Footer />
    </div>
  );
}

export default Home;
