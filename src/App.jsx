import Hero from './components/Hero/Hero';
import Why from './components/Why/Why';
import ProductList from './components/ProductList/ProductList';
import CTA from './components/CTA/CTA';
import SocialProof from './components/SocialProof/SocialProof';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Why />
      <ProductList />
      <CTA />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
