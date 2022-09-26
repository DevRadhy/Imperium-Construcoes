import Image from 'next/image';

import work from '../../public/images/house1.png';
import bed from '../../public/icons/bed.svg';
import shower from '../../public/icons/shower.svg';
import garage from '../../public/icons/garage.svg';

import styles from '../styles/components/Work.module.scss';

const Work = () => {
  return (
    <div className={styles.container}>
      <Image
        src={work}
        alt="House"
      />

      <p>Casa Centro</p>

      <ul>
        <li>
          <Image
            src={bed}
            alt="Bedroom"
            />

            <span>3</span>
        </li>
        <li>
          <Image
            src={shower}
            alt="Shower"
            />

            <span>2</span>
        </li>
        <li>
          <Image
            src={garage}
            alt="Garage"
            />

            <span>1</span>
        </li>
      </ul>
    </div>
  );
}

export { Work };