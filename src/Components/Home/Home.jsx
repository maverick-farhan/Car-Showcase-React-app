import './home.css';
import homeImage from '../../assets/homeImage.png'
const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">

        <div className="homeText">
          <span className="homeSpan">
            Meet Your New Car
          </span>
          <h1 className="homeTitle">Toyota Camry XSE</h1>
          <div className="btn-group flex">
            <button className="btn custom">Build Own</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
        
        <div className="homeImage">
          <img src={homeImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home