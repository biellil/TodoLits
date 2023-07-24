import styles from'./App.module.scss'
import clipboard from './assets/Clipboard.svg'

export function App() {
 

  return (
    <main >
    
      <header className={styles.main}> 
     <div> Tarefas criadas <samp>0</samp></div>

      <div>Concluídas <samp>0</samp></div>

        
         </header>

         <article className={styles.register}>
          <img src={clipboard} alt="" />
         Você ainda não tem tarefas cadastradas
        <br /> 
        <samp>Crie tarefas e organize seus itens a fazer</samp>
         </article>
    </main>

  )
}

export default App;
