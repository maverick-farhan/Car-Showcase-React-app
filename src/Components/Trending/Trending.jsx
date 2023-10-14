import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './trending.css';
import Audi_A4 from '../../assets/audia4.png'
import mercedes from '../../assets/mercedes.png'
import macan from '../../assets/macan.png'
import porsche from '../../assets/porsche.png'
import e_tron from '../../assets/e-tron.png'
const Trending = () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Trending Cars Near You
          </h3>

          <div className="navBtns flex">
            <AiOutlineArrowLeft className='icon'/>
            <AiOutlineArrowRight className='icon'/>
          </div>
        </div>

        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={Audi_A4} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi A4 X4 Premium Plus</h5>
            <span className='miles'>11457 miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className='price'>$13,000</span>
              <span className='seller'>Prem Chopra Auto Corp</span>
            </div>
          </div>

        <div className="singleCar grid">
            <div className="imgDiv">
              <img src={porsche} alt="" />
            </div>
            <h5 className="carTitle">Used 2017 Porsche 911 S Turbo</h5>
            <span className='miles'>18057 miles</span>
            <span className="AWD">RWD 6-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className='price'>$23,000</span>
              <span className='seller'>Sheikh Auto</span>
            </div>
          </div>
        <div className="singleCar grid">
            <div className="imgDiv">
              <img src={mercedes} alt="" />
            </div>
            <h5 className="carTitle">Used 2021 Mercedes QLA Superfast</h5>
            <span className='miles'>13457 miles</span>
            <span className="AWD">AWD 6-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className='price'>$54,000</span>
              <span className='seller'>Imran Automobil </span>
            </div>
          </div>

         <div className="singleCar grid">
            <div className="imgDiv">
              <img src={macan} alt="" />
            </div>
            <h5 className="carTitle">Used 2023 Porsche Macan Super GT</h5>
            <span className='miles'>2257 miles</span>
            <span className="AWD">AWD 6-Cylinder Turbo Charge</span>
            <div className="price_seller flex">
              <span className='price'>$34,000</span>
              <span className='seller'>FIMMS Auto Corp</span>
            </div>
          </div>

 <div className="singleCar grid">
            <div className="imgDiv">
              <img src={e_tron} alt="" />
            </div>
            <h5 className="carTitle">Used 2022 Audi E-Tron Premium Plus</h5>
            <span className='miles'>2377 miles</span>
            <span className="AWD">AWD Fully Electric 435HP</span>
            <div className="price_seller flex">
              <span className='price'>$25,000</span>
              <span className='seller'>Shaheen & Sons Auto Corp</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Trending