import { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import { ClipboardText } from 'phosphor-react';
import styles from './MainContent.module.css';
import Card from '../Card';

export default function MainContent() {
  const { list } = useContext(ListContext);

  return (
    <section className={styles.container}>
      {list.length ? (
        list.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            content={elem.content}
            isChecked={elem.isChecked}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <ClipboardText className={styles.icon} />
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </section>
  );
}
