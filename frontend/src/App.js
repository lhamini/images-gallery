import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_ACESS_KEY;


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  console.log(images);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetch(`https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${UNSPLASH_KEY}`)
      .then(res => res.json())
      .then(data => {
        setImages([data, ...images]);

      })
      .catch(err => console.log(err))
    setSearchTerm('');
  }
  return (
    <div>
      <Header title="Images Gallery Header"></Header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
