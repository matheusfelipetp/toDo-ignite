import { useContext } from 'react';
import styles from './Infos.module.css';
import { ListContext } from '../../context/ListContext';

export default function Infos() {
  const { list } = useContext(ListContext);

  const tasksFinished = list.filter((elem) => elem.isChecked);

  return (
    <div className={styles.infos}>
      <div className={styles.tasks}>
        <p>Tarefas criadas</p>
        <span>{list.length}</span>
      </div>
      <div className={styles.finished}>
        <p>Concluídas</p>
        <span>
          {tasksFinished.length} de {list.length}
        </span>
      </div>
    </div>
  );
}
