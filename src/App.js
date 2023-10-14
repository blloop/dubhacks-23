import logo from './logo.svg';
import './App.css';
import page1 from './components/page1';
import page2 from './components/page2';
import page3 from './components/page3';
import page4 from './components/page4';

let pageIndex = 1;

const App = () => {
  switch (pageIndex) {
    case 1: 
      return page1();
    case 2: 
      return page2();
    case 3: 
      return page3();
    case 4: 
      return page4();
  }
}

export default App;
