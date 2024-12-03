import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Welcome from './components/Welcome';
import ImagesCard from './components/ImagesCard';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(searchTerm);
    // fetch(`${API_URL}/new_image?query=${searchTerm}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setImages([{ ...data, title: searchTerm }, ...images]);

    //   })
    //   .catch(err => console.log(err))
    try {
      const res = await axios.get(`${API_URL}/new_image?query=${searchTerm}`);
      setImages([{ ...res.data, title: searchTerm }, ...images])
      
    } catch (error) {
      console.log(error);
      
    }
    setSearchTerm('');
  }
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  }

  return (
    <div>
      <Header title="Images Gallery Header"></Header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSearchSubmit} />
      <Container className='mt-4'>
        {images.length ? <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className='pb-3'>
              <ImagesCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row> : <Welcome />
        }
      </Container>
    </div>
  );
}

export default App;
