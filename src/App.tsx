import { Form, Header, Infos, MainContent } from './components';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <Form />
        <Infos />
        <MainContent />
      </div>
    </>
  );
}
