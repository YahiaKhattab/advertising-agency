import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import Header from './components/Header/Header';
 import Navbar from './components/Navbar/Navbar';
import NotFound from "./pages/NotFound.js";
import Companies from './components/Companies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proposal from './components/Proposal/Proposal.js';
import Studies from './components/Studies/Studies.js';
import Process from './components/Process/Process.js';
import Team from './components/Team/Team.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home.js';


function App() {
  // // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // // useEffect(() => {
  // //   fetch('https://68821f1f66a7eb81224d80cf.mockapi.io/product')
  // //     .then((response) => {
  // //       if (!response.ok) {
  // //         throw new Error('Failed to fetch products');
  // //       }
  // //       return response.json();
  // //     })
  // //     .then((data) => {
  // //       setProducts(data);
  // //       setIsLoading(false);
  // //     })
  // //     .catch((error) => {
  // //       console.error('Error fetching products:', error);
  // //       setError(error.message);
  // //       setIsLoading(false);
  // //     });
  // // }, []);

  // // const newArrivals = products.filter((p) => p.is_new);
  // // const topSelling = products.filter((p) => p.is_top_selling);

  // if (isLoading) {
  //   return (
  //     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //       <span className="ms-3">Loading products...</span>
  //     </Container>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  //       <div className="alert alert-danger">
  //         Error loading products: {error}
  //       </div>
  //     </Container>
  //   );
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;