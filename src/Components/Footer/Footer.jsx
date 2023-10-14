import './footer.css';
const Footer = () => {
  return (
  <div className="footer">
    <div className="footerContainer container">
      <div className="footerMenuDiv grid">
        <div className="singleGrid">
          <span className="footerTitle">
            About
          </span>
          <ul className="footerui grid">
            <li className="footerList">
              How it Works
            </li>
            <li className="footerList">
              Careers
            </li>
            <li className="footerList">
              Affliates
            </li>
            <li className="footerList">
              Media
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerSection grid">
        <p>2023 All Rights Reserved</p>
        <blockquote>Fimms Corp</blockquote>
      </div>
    </div>
  </div> 
  )
}

export default Footer