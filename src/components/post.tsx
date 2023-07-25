// Post.tsx
import React, { useState } from "react";

import styles from './Post.module.scss';
import { Trash } from "phosphor-react";

interface PostProps {
  tasks: string[];
}

export function Post({ tasks }: PostProps) {

    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
 

  return (
    <div>
      {tasks.map((task, key) => (
        <div key={key} className={styles.content}>
          <header>

             <label  className={styles.container}>
                 <input key={key} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              <span className={styles.checkmark}></span>
             </label>


          </header>
          <strong>{task}</strong>
          <button title="delete" /*</div>onClick={}*/>
            <Trash size={24} />
          </button>
        </div>
      ))}
    </div>
  );
}
