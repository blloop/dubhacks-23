import './App.css';
import Today from './components/Today';
import All from './components/All';
import Feed from './components/Feed';

let pageIndex = 1;

const App = () => {
  switch (pageIndex) {
    case 1: 
      return (
        <Today/>
      );
    case 2: 
      return (
        <All/>
      );
    case 3: 
      return (
        <Feed/>
      );
  }
}

export default App;
