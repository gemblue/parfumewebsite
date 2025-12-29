import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGem, 
  faHeart, 
  faCrown, 
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import './Why.css';

const Why = () => {
  const features = [
    {
      icon: faGem,
      title: "Kualitas Premium",
      description: "Dibuat dari bahan-bahan terbaik dengan formula eksklusif yang tahan hingga 12 jam."
    },
    {
      icon: faHeart,
      title: "Aroma Berkarakter",
      description: "Setiap parfum memiliki karakter unik yang mencerminkan kepribadian maskulin modern."
    },
    {
      icon: faCrown,
      title: "Eksklusivitas",
      description: "Koleksi terbatas yang membuat Anda tampil beda dan berkesan di setiap kesempatan."
    },
    {
      icon: faShieldAlt,
      title: "Aman & Berkualitas",
      description: "Teruji dermatologi dan aman untuk segala jenis kulit, tanpa efek samping."
    }
  ];

  return (
    <section className="why section">
      <div className="container">
        <div className="why-header text-center mb-8">
          <h2>Mengapa Memilih Men Parfume?</h2>
          <p className="section-subtitle">
            Lebih dari sekadar wangi, kami hadirkan pengalaman yang menggugah jiwa maskulin Anda
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-cta text-center">
          <p className="cta-text">
            Rasakan perbedaannya dan biarkan aura Anda berbicara lebih dari sekedar kata-kata
          </p>
          <a href="#products" className="btn btn-secondary">
            Lihat Koleksi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Why;