import {BsArrowRightShort,BsArrowLeftShort} from 'react-icons/bs';
import './review.css';
import car from '../../assets/cadiallac.jpg';
const Review = () => {
  return (
   <div className="review section">
    <div className="secContainer container">
      <div className="secHeading flex">
        <h3 className="secTitle">
          Recent Reviews
        </h3>
        <div className="navBtns flex">
        <BsArrowLeftShort className='icon leftIcon' />
        <BsArrowRightShort className='icon rightIcon' />
        </div>
      </div>

      <div className="reviewContainer grid">
      <div className="singleReview grid">
        <div className="imgDiv">
          <img src={car} alt="car Image" className='carImage'/>
        </div>
        <h5 className="reviewTitle">2020 Cadiallac</h5>
        <span className="desc">Good Car with good feature, luxurious interior, and spacious inside. pretty good at price. happy Customer</span>

        <div className="reviewDiv flex">
          <div className="leftDiv flex">
            <div className="reviewerImage">
              <img src='https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="Alt" />
            </div>
            <div className="about">
              <span className="name">John Doe</span>
              <p>Master chef At Taj Hotel</p>
            </div>
          </div>
    <div className="rightDiv">
      <blockquote>4.76</blockquote>
    </div>
        </div>
      </div>
      </div>
    </div>
   </div> 
  )
}

export default Review