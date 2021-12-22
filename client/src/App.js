import style from './App.module.css';
import Header from './components/Header/Header';


function App() {
  return (
    <div className={style.app}>
        <h1>Let's Begin</h1>
        <Header/>
    </div>
  );
}

export default App;
