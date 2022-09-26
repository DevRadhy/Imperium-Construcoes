import Image from 'next/image';
import { Button } from './Button';

import logo from '../../public/images/logo.svg';

import facebook from '../../public/icons/facebook.svg';
import twitter from '../../public/icons/twitter.svg';
import instagram from '../../public/icons/instagram.svg';

import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.header}>
          <p>Faça seu sonho se tornar <span>realidade</span></p>

          <Button text='Trabalhe Conosco'/>
        </section>

        <section className={styles.info}>
          <article className={styles.socials}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Imperium Construções"
              />
            </div>

            <div>
              <a
                href="https://www.facebook.com/ImperiumConstrucoes"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                />
              </a>

              <a
                href="#"
                // target="_blank"
                rel="noreferrer"
                >
                <Image
                  src={twitter}
                  alt="Twitter"
                />
              </a>

              <a
                href="https://www.instagram.com/imperium_construcoes/"
                target="_blank"
                rel="noreferrer"
                >
                <Image
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </div>
          </article>

          <article className={styles.links}>
            <a href="">Termos de uso</a>
            <a href="">Politica de privacidade</a>
            <a href="">Sobre nós</a>

            <a href="https://wa.link/1grfbr">Contato</a>
            <a href="#">Projetos</a>
            <a href="https://wa.link/1grfbr">SAC</a>

            <a href="https://wa.link/1grfbr">Telefone</a>
            <a href="mailto:imperiumjg.tg@gmail.com">Email</a>
            <a href="#">Timbó Grande, SC</a>
          </article>
        </section>
      </footer>
  );
}

export { Footer };