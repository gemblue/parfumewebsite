import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSprayCan, 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faInstagram, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/087778086123`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <FontAwesomeIcon icon={faSprayCan} className="brand-icon" />
              <span className="brand-name">Men Parfume</span>
            </div>
            <p className="brand-description">
              Parfum premium untuk pria berkarakter. Temukan signature scent yang 
              mencerminkan kepribadian unik Anda.
            </p>
            <div className="social-links">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" className="social-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Produk</h4>
              <ul>
                <li><a href="#products">Koleksi Parfum</a></li>
                <li><a href="#products">Parfum Unggulan</a></li>
                <li><a href="#products">Kategori</a></li>
                <li><a href="#why">Mengapa Memilih Kami</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Layanan</h4>
              <ul>
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Pemesanan</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Customer Service</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Garansi</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Kontak</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <span>087778086123</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <span>info@menparfume.com</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Men Parfume. Semua hak dilindungi.</p>
            <div className="footer-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <span>•</span>
              <a href="#">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;