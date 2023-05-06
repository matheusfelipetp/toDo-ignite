import { Trash } from 'phosphor-react';
import styles from './Card.module.css';
import { useContext, MouseEvent, ChangeEvent } from 'react';
import { ListContext } from '../../context/ListContext';

interface ICard {
  content: string;
  isChecked: boolean;
  id: string;
}

export default function Card({ id, content, isChecked }: ICard) {
  const { list, setList } = useContext(ListContext);

  const onDelete = (event: MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.id;
    setList((prev) => prev.filter((elem) => elem.id != id));
  };

  const changeChecked = (event: ChangeEvent<HTMLElement>) => {
    const id = event.currentTarget.id;
    const updatedList = list.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !isChecked,
        };
      }
      return task;
    });
    setList(updatedList);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <input
          name="checkbox"
          id={id}
          type="checkbox"
          value={content}
          checked={isChecked}
          onChange={changeChecked}
        />

        <p className={isChecked ? styles.textChecked : ''}>{content}</p>
      </div>
      <button id={id} className={styles.button} onClick={onDelete}>
        <Trash />
      </button>
    </div>
  );
}
