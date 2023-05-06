import Logo from '../../assets/Logo.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="ToDo List Logo" className={styles.logo} />
    </header>
  );
}
