import Image from 'next/image';

import logo from '../../public/images/logo.svg';

import styles from '../styles/components/Navbar.module.scss';
import { Button } from './Button';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Image
        src={logo}
        alt='Logo'
        width={100}
        height={60}
        layout="fixed"
      />

      <ul className={styles.navlinks}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><Button text="Trabalhe Conosco" /></li>
      </ul>
    </nav>
  );
}

export { Navbar };