import './auction.css';
import porsche from '../../assets/porsche.png'
import bmw from '../../assets/e-tron.png'
import mercedes from '../../assets/mercedes.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Auction = () => {
  return (
       <div className='auction section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Active Auction
          </h3>

          <div className="navBtns flex">
            <AiOutlineArrowLeft className='icon'/>
            <AiOutlineArrowRight className='icon'/>
          </div>
        </div>

        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={porsche} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi A4 X4 Premium Plus</h5>
            <span className='miles'>11457 miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_Btn flex">
              <span className='price'>$10k</span>
              <span className='buyBtn'>Buy</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={mercedes} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi A4 X4 Premium Plus</h5>
            <span className='miles'>11457 miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_Btn flex">
              <span className='price'>$10k</span>
              <span className='buyBtn'>Buy</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={bmw} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi A4 X4 Premium Plus</h5>
            <span className='miles'>11457 miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_Btn flex">
              <span className='price'>$10k</span>
              <span className='buyBtn'>Buy</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Auction