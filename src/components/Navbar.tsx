import Image from 'next/image';
import { useState } from 'react';

import logo from '../../public/images/logo.svg';
import menu from '../../public/icons/menu.svg';
import close from '../../public/icons/close.svg';

import styles from '../styles/components/Navbar.module.scss';
import { Button } from './Button';

const Navbar = () => {
  const [ dropdown, setDropdown ] = useState<boolean>(false);

  return (
    <nav className={styles.container}>
      <div 
        className={styles.icons}
      >
        <Image
          src={logo}
          alt='Logo'
          width={100}
          height={60}
          layout="fixed"
        />
        <div
          className={styles.menu}
          onClick={() => setDropdown(!dropdown)}
        >
          { dropdown ? 
            <Image 
              src={close}
              alt="Close"
              width={30}
              height={30}
              layout="fixed"
            /> :
            <Image
              src={menu}
              alt="Menu"
              width={30}
              height={30}
              layout="fixed"
            />
          }
        </div>
        
      </div>

      <ul className={`${styles.navlinks} ${dropdown ? styles.dropdown : ''}`}>
        <li><a>Início</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="https://wa.link/1grfbr" target="_blank" rel='noreferrer'>Contato</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><Button text="Trabalhe Conosco" /></li>
      </ul>
    </nav>
  );
}

export { Navbar };