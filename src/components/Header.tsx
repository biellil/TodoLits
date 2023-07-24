
import styles from './Header.module.scss'

import Logo from '../assets/Logo.svg'
import plus from '../assets/plus.svg'

export function Header(){
 return(
   <nav>
    <div className={styles.Header}>
         <img src={Logo} alt="IgniteLog" />
       
    </div>
    <div className={styles.search}>
      <input  placeholder='Adicione uma nova tarefa'  type="search" ></input>
      <button>Criar <img src={plus} alt="" /></button>
      </div>
   </nav>
      
 )
}
