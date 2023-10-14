import './sellers.css';
import toyota from '../../assets/toyota.png'
import porche from '../../assets/porscheLogo.png'
import mercedes from '../../assets/mercedesLogo.png'
import bmw from '../../assets/bmw.png'
const Sellers = () => {
  return (
    <>
    <div className="seller section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">
            Explore Top Sellers in Town
          </h3>
          <p>Joseph Gerald holds the Guinness World Record for being the greatest salesman in the World</p>
        </div>
        <div className="sellersContainer">
          <div className="flex singleSeller">
            <div className="imgDiv flex">
              <img src={toyota} alt="" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>From $40K</p>
            </span>
          </div>

          <div className="flex singleSeller">
            <div className="imgDiv flex">
              <img src={porche} alt="" />
            </div>
            <span className="info">
              <h4 className="name">Porche</h4>
              <p>From $60K</p>
            </span>
          </div>

          <div className="flex singleSeller">
            <div className="imgDiv flex">
              <img src={bmw} alt="" />
            </div>
            <span className="info">
              <h4 className="name">BMW</h4>
              <p>From $80K</p>
            </span>
          </div>
          
          <div className="flex singleSeller">
            <div className="imgDiv flex">
              <img src={mercedes} alt="" />
            </div>
            <span className="info">
              <h4 className="name">Mercedes</h4>
              <p>From $80K</p>
            </span>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default Sellers