// App.tsx
import styles from './App.module.scss';
import clipboard from './assets/Clipboard.svg';
import plus from './assets/plus.svg';
import { useState } from 'react';
import { Post } from './components/post';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCheckboxChange = (updatedIsCheckedList: boolean[]) => {
    setIsCheckedList(updatedIsCheckedList);
  };

  const handleCreateTask = () => {
    if (searchValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, searchValue]);
      setIsCheckedList((prevIsCheckedList) => [...prevIsCheckedList, false]);
      setSearchValue('');
    }
  };
  

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };


  

  function deletComment(commentToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task: string) => {
      return task !== commentToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  const totalTasks = tasks.length;
  const completedTasks = isCheckedList.filter((isChecked) => isChecked).length;

  return (
    <main>
      <div className={styles.search}>
      <input
          placeholder='Adicione uma nova tarefa'
          type='search'
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Adiciona o evento onKeyPress
        />
        <button onClick={handleCreateTask}>
          Criar <img src={plus} alt="Ícone de Adição" />
        </button>
      </div>

      <header className={styles.main}>
      <div> Tarefas criadas <samp title='Tarefas criada'> {totalTasks}</samp></div>
        <div>Concluídos <samp title='Concluídas' > {completedTasks} de {totalTasks}</samp></div>
      </header>

      {/* Conditionally render the Post component */}
      {tasks.length > 0 ? (
        <article className={styles.register}>
          <Post tasks={tasks} key={''} onDeletComment={deletComment} onCheckboxChange={handleCheckboxChange} />
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

