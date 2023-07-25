
import styles from './Header.module.scss';
import Logo from '../assets/Logo.svg';


export function Header() {

 

  return (
    <nav>
      <div className={styles.Header}>
        <img src={Logo} alt="IgniteLog" />
      </div>

    </nav>
  );
}
