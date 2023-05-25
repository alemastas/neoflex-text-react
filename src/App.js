import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
