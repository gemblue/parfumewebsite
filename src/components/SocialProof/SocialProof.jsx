import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faStar, 
  faUsers, 
  faAward,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Ahmad Rizky",
      role: "Business Executive",
      rating: 5,
      text: "Men Parfume benar-benar mengubah cara saya tampil di kantor. Aromanya sophisticated dan tahan seharian. Kolega sering menanyakan parfum apa yang saya pakai!"
    },
    {
      name: "Dimas Pratama", 
      role: "Creative Director",
      rating: 5,
      text: "Sebagai orang kreatif, saya butuh parfum yang mencerminkan kepribadian unik saya. Men Parfume memberikan karakter yang tepat - maskulin tapi tidak berlebihan."
    },
    {
      name: "Rian Hartono",
      role: "Entrepreneur",
      rating: 5,
      text: "Investasi terbaik untuk appearance saya! Kualitas premium dengan harga yang reasonable. Parfum ini sudah menjadi signature scent saya sejak 2 tahun lalu."
    }
  ];

  const stats = [
    {
      icon: faUsers,
      number: "5000+",
      label: "Pria Percaya Men Parfume"
    },
    {
      icon: faStar,
      number: "4.9/5",
      label: "Rating Kepuasan"
    },
    {
      icon: faAward,
      number: "3 Tahun",
      label: "Pengalaman Terpercaya"
    },
    {
      icon: faShieldAlt,
      number: "100%",
      label: "Garansi Kualitas"
    }
  ];

  return (
    <section className="social-proof section">
      <div className="container">
        <div className="social-proof-header text-center mb-8">
          <h2>Apa Kata Mereka yang Sudah Merasakan?</h2>
          <p className="section-subtitle">
            Bergabunglah dengan ribuan pria yang telah menemukan signature scent mereka
          </p>
        </div>

        <div className="stats-grid mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-badges">
          <div className="trust-badge">
            <FontAwesomeIcon icon={faShieldAlt} className="trust-icon" />
            <div className="trust-text">
              <strong>Teruji Dermatologi</strong>
              <span>Aman untuk semua jenis kulit</span>
            </div>
          </div>
          <div className="trust-badge">
            <FontAwesomeIcon icon={faAward} className="trust-icon" />
            <div className="trust-text">
              <strong>Premium Quality</strong>
              <span>Bahan import berkualitas tinggi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;