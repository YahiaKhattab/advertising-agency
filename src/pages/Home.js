import { useState, useEffect } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import Header from '../components/Header/Header.js';
 import Navbar from '../components/Navbar/Navbar';
import Companies from '../components/Companies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proposal from '../components/Proposal/Proposal.js';
import Studies from '../components/Studies/Studies.js';
import Process from '../components/Process/Process.js';
import Team from '../components/Team/Team.js';
import Footer from '../components/Footer/Footer.js';
import Services from '../components/Services/Services.js';
import axios from 'axios';


function Home() {
   const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   axios.get('https://68821f1f66a7eb81224d80cf.mockapi.io/services')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch products');
        }
        setServices(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className="ms-3">Loading services...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="alert alert-danger">
          Error loading services: {error}
        </div>
      </Container>
    );
  }

  return (
    <>
            <Navbar />
            <Header />
            <Companies />
            <Services services={services}/>
            <Proposal />
            <Studies />
            <Process />
            <Team />
            <Footer />
    </>
  );
}

export default Home;