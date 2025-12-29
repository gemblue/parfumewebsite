import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faSprayCan,
  faHeart,
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';
import { getParfumes } from '../../lib/contentful';
import './ProductList.css';

const ProductList = () => {
  const [parfumes, setParfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchParfumes = async () => {
      try {
        const data = await getParfumes();
        setParfumes(data);
      } catch (error) {
        console.error('Error loading parfumes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchParfumes();
  }, []);

  const categories = ['all', ...new Set(parfumes.map(p => p.category))];
  const filteredParfumes = selectedCategory === 'all' 
    ? parfumes 
    : parfumes.filter(p => p.category === selectedCategory);

  const featuredParfumes = parfumes.filter(p => p.featured);

  if (loading) {
    return (
      <section id="products" className="products section">
        <div className="container">
          <div className="loading-state">
            <FontAwesomeIcon icon={faSprayCan} className="loading-icon" />
            <p>Memuat koleksi parfum...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="products-header text-center mb-8">
          <h2>Koleksi Eksklusif Men Parfume</h2>
          <p className="section-subtitle">
            Temukan parfum yang sesuai dengan karakter dan gaya hidup Anda
          </p>
        </div>

        {featuredParfumes.length > 0 && (
          <div className="featured-section mb-8">
            <h3 className="featured-title">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              Koleksi Unggulan
            </h3>
            <div className="products-grid">
              {featuredParfumes.map((parfume) => (
                <ProductCard key={parfume.id} parfume={parfume} featured={true} />
              ))}
            </div>
          </div>
        )}

        <div className="category-filter">
          <h3>Filter Kategori:</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'Semua' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredParfumes.map((parfume) => (
            <ProductCard key={parfume.id} parfume={parfume} />
          ))}
        </div>

        {filteredParfumes.length === 0 && (
          <div className="no-products text-center">
            <FontAwesomeIcon icon={faSprayCan} className="no-products-icon" />
            <p>Tidak ada produk dalam kategori ini</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ProductCard = ({ parfume, featured = false }) => {
  const whatsappMessage = `Halo! Saya tertarik dengan parfum *${parfume.name}* seharga Rp ${parfume.price?.toLocaleString('id-ID')}. Bisakah Anda memberikan informasi lebih lanjut?`;
  const whatsappUrl = `https://wa.me/087778086123?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`product-card ${featured ? 'featured-card' : ''}`}>
      {featured && (
        <div className="featured-badge">
          <FontAwesomeIcon icon={faStar} />
          Unggulan
        </div>
      )}
      
      <div className="product-image">
        {parfume.image ? (
          <img 
            src={parfume.image} 
            alt={parfume.name}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="placeholder-image" style={parfume.image ? {display: 'none'} : {}}>
          <FontAwesomeIcon icon={faSprayCan} />
        </div>
        <button className="wishlist-btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-category">{parfume.category}</div>
        <h3 className="product-name">{parfume.name}</h3>
        <p className="product-description">{parfume.description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            Rp {parfume.price?.toLocaleString('id-ID')}
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary product-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Beli Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;