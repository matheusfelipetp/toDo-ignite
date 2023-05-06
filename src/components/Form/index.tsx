import styles from './Form.module.css';
import { PlusCircle } from 'phosphor-react';
import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { ListContext } from '../../context/ListContext';

export default function Form() {
  const [inputText, setInputText] = useState('');
  const { list, setList } = useContext(ListContext);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      content: inputText,
      id: (list.length + 1).toString(),
      isChecked: false,
    };

    setList((prev) => [newTask, ...prev]);
    setInputText('');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onChange={onChange}
        value={inputText}
        required
      />
      <button
        type="submit"
        className={styles.button}
        disabled={inputText.length <= 0}
      >
        Criar
        <PlusCircle className={styles.icon} />
      </button>
    </form>
  );
}
