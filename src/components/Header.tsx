import styles from'./Header.module.scss'

import Logo from '../assets/Logo.svg'

export function Header(){
 return(
    <div className={styles.Header}>
         <img src={Logo} alt="IgniteLog" />
    </div>
 )
}
export default Header;