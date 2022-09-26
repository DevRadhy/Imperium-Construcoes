import Image from 'next/image';

import planning from '../../public/images/people.jpg';

import styles from '../styles/components/Presentation.module.scss';
import { Button } from './Button';

const Presentation = () => {
  return (
    <section className={styles.container}>
      <section className={styles.image}>
        <Image
          src={planning}
          alt="Planning"
          width={512}
          height={512}
          layout="intrinsic"
          objectFit="cover"
        />
      </section>

      <section className={styles.text}>
        <h2>Você em boas mãos</h2>
        <p>Oferecemos um ótimo serviço, para garantir muitos anos de paz e tranquilidade, no conforto da sua nova casa.</p>

        <Button text="Veja mais" />
      </section>
    </section>
  );
}

export { Presentation };