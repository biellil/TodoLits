// App.tsx
import styles from './App.module.scss';
import clipboard from './assets/Clipboard.svg';
import plus from './assets/plus.svg';
import { useState } from 'react';
import { Post } from './components/post';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCreateTask = () => {
    if (searchValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, searchValue]);
      setSearchValue('');
    }
  };

  return (
    <main>
      <div className={styles.search}>
        <input
          placeholder='Adicione uma nova tarefa'
          type='search'
          value={searchValue}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateTask}>
          Criar <img src={plus} alt='' />
        </button>
      </div>

      <header className={styles.main}>
        <div> Tarefas criadas <samp>{tasks.length}</samp></div>
        <div>Concluídas <samp>0</samp></div>
      </header>

      {/* Conditionally render the Post component */}
      {tasks.length > 0 ? (
        <article className={styles.register}>
         
          <Post tasks={tasks} />
        </article>
      ) : (
        <article className={styles.register}>
          <img src={clipboard} alt='' />
          Você ainda não tem tarefas cadastradas
          <br />
          <samp>Crie tarefas e organize seus itens a fazer</samp>
        </article>
      )}
    </main>
  );
}

export default App;
