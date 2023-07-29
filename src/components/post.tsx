// post.tsx
import { useState } from "react";

import styles from './Post.module.scss';
import { Trash } from "phosphor-react";

interface PostProps {
  tasks: string[];
  onDeletComment: (task: string) => void; 
  onCheckboxChange: (isCheckedList: boolean[]) => void;
  
}

export function Post({ tasks, onDeletComment , onCheckboxChange }: PostProps) {


  const [isCheckedList, setIsCheckedList] = useState<boolean[]>(Array(tasks.length).fill(false));

  const handleCheckboxChange = (key: number) => {
    const newIsCheckedList = [...isCheckedList];
    newIsCheckedList[key] = !newIsCheckedList[key];
    setIsCheckedList(newIsCheckedList);
    onCheckboxChange(newIsCheckedList); 
  };

  const handLeDeLeteComment = (taskToDelete: string) => {
    onDeletComment(taskToDelete);
  };


  return (
    <div>
      {tasks.map((task, key) => (
        <div key={key} className={styles.content}>
          <header>
            <label className={styles.container}>
              <input
                type="checkbox"
                checked={isCheckedList[key]}
                onChange={() => handleCheckboxChange(key)}
              />
              <span className={styles.checkmark}></span>
            </label>
          </header>
          <strong style={{ textDecoration: isCheckedList[key] ? 'line-through' : 'none' }}>
            {task}
          </strong>
          <button title="delete" onClick={() => handLeDeLeteComment(task)}>
            <Trash size={24} />
          </button>
        </div>
      ))}
    </div>
  );
}
