import Image from 'next/image';
import { ReactChild } from 'react';

import arrow from '../../public/icons/right-arrow.svg';

import styles from '../styles/components/Button.module.scss';

interface IButtonProps {
  text: string;
  children?: ReactChild
}

const Button = ({ text }: IButtonProps) => {
  return (
    <button type="button" className={styles.work}>
      <a href="https://wa.link/1grfbr">
        <span>{text}</span>

        <Image
          src={arrow}
          alt="Right Arrow"
        />
      </a>
    </button>
  );
}

export { Button };