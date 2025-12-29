import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSprayCan, 
  faGift 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import './CTA.css';

const CTA = () => {
  const whatsappMessage = `Halo Men Parfume! Saya tertarik untuk mengetahui lebih lanjut tentang koleksi parfum premium Anda. Bisakah Anda memberikan rekomendasi yang sesuai dengan karakter saya?`;
  const whatsappUrl = `https://wa.me/087778086123?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-visual">
            <div className="cta-icon-wrapper">
              <FontAwesomeIcon icon={faSprayCan} className="cta-icon" />
              <div className="icon-glow"></div>
            </div>
          </div>
          
          <div className="cta-text">
            <h2>Siap Menemukan Wangi Berkarakter Anda?</h2>
            <p className="cta-description">
              Jangan biarkan kesempatan ini berlalu! Dapatkan konsultasi gratis dan 
              rekomendasi parfum yang sesuai dengan kepribadian unik Anda. Tim ahli kami 
              siap membantu Anda menemukan signature scent yang sempurna.
            </p>
            
            <div className="cta-benefits">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faGift} className="benefit-icon" />
                <span>Konsultasi Gratis</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faSprayCan} className="benefit-icon" />
                <span>Rekomendasi Personal</span>
              </div>
              <div className="benefit-item">
                <FontAwesomeIcon icon={faWhatsappBrand} className="benefit-icon" />
                <span>Respon Cepat 24/7</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large cta-main-btn"
              >
                <FontAwesomeIcon icon={faWhatsappBrand} className="btn-icon" />
                Hubungi Kami Sekarang
              </a>
              <a 
                href="#products" 
                className="btn btn-secondary btn-large"
              >
                Lihat Koleksi Lagi
              </a>
            </div>
          </div>
        </div>
        
        <div className="urgency-note">
          <p>
            <strong>Penawaran Terbatas!</strong> 
            Dapatkan diskon spesial untuk pembelian hari ini. 
            <span className="highlight">Stok terbatas, pesan sekarang!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;