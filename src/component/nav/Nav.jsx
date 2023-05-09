import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button/Button';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.logo} href="/#">
          sparkloop
        </a>
      </div>
      <ul>
        <li>
          <a href="/#">Features</a>
          <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
        </li>
        <li>
          <a href="/#">Publisher Stories</a>
        </li>
        <li>
          <a href="/#">Pricing</a>
        </li>
        <li>
          <a href="/#">Login</a>
        </li>
      </ul>
      <Button text="Start For Free" />
    </div>
  );
};

export default Nav;
