import className from 'classnames';
import classNames from 'classnames/bind';
import styles from './App.module.css';
export default function App() {
  const isCancel = true;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={isCancel ? styles.red_c : styles.line_through}>
        App Component
      </h1>
      <h1 className={styles.red_c}>App Component</h1>
      <h1 className={styles.line_through}>App Component</h1>
      <h1 className={cx('red_c', 'line_through')}>App Component</h1>
      <h1 className={cx('red_c', { line_through: isCancel })}>App Component</h1>
      <h1 className={`primary ${isItalic ? 'italic' : ''} `}>Global</h1>
      <h1 className={className('primary', { italic: isItalic })}>Global2</h1>
    </>
  );
}
