import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              Wangi Yang Berkarakter dan  
              Aura Yang Tak Terlupakan
            </h2>
            <p className="hero-description">
              Temukan koleksi parfum pria eksklusif yang dirancang khusus untuk mencerminkan 
              kepribadian unik Anda. Setiap tetes mengandung karakter kuat yang membedakan 
              Anda dari yang lain.
            </p>
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary btn-large">
                <FontAwesomeIcon icon={faSprayCan} className="btn-icon" />
                Jelajahi Koleksi
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img style={{width: "80%"}} src="https://parfumes-1389906377.cos.ap-singapore.myqcloud.com/Rashid.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;