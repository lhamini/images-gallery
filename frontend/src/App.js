import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
const App = () =>  {
  return (
    <div>
      <Header title="Images Gallery Header"></Header>
      <Search/>
    </div>
  );
}

export default App;
