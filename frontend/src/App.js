import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Search from './components/Search';
import Welcome from './components/Welcome';
import Spinner from './components/Spinner';
import ImagesCard from './components/ImagesCard';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      {res.data.length &&
      toast.success('Saved images downloaded', {toastId: 'get_saved_images'})};
      setImages(res.data || []);
      
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  };
  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(searchTerm);
    try {
      const res = await axios.get(`${API_URL}/new_image?query=${searchTerm}`);
      setImages([{ ...res.data, title: searchTerm }, ...images])
      toast.info(`New image ${searchTerm.toUpperCase()} loaded`, {toastId: 'new_image'});
      
    } catch (error) {
      console.log(error);
      
    }
    setSearchTerm('');
  }
  const handleDeleteImage = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id){
        toast.warning(`Image ${images.find((i) => i.id === id).title} was deleted`, {toastId: 'delete_image'});
  
        setImages(images.filter((image) => image.id !== id));
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;
    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      
      if (res.data?.inserted_id) {
        setImages(images.map((image) => image.id === id ? { ...image, saved: true } : image));
        toast.success(`Image ${imageToBeSaved.title.toUpperCase()} was saved`, {toastId: 'save_image'});
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <Header title="Images Gallery Header"></Header>
      {loading ? (<Spinner />) :<> <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSearchSubmit} />
      <Container className='mt-4'>
        {images.length ? <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className='pb-3'>
              <ImagesCard image={image} deleteImage={handleDeleteImage} saveImage={handleSaveImage} />
            </Col>
          ))}
        </Row> : <Welcome />
        }
      </Container> </>}
      <ToastContainer position='bottom-right'/>
    </div>
  );
}

export default App;
