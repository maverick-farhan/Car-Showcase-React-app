import './search.css';
import { BsSearch } from 'react-icons/bs'
const Search = () => {
  return (
    <div className='search'>
      <div className="secContainer container">
        <h3 className="title">Which vehicle you are looking for?</h3>
        <div className="searchDiv grid">
          <input type="text" id="text" placeholder='Vehicle Type'/>
          <input type="text" id="text" placeholder='Model'/>
          <input type="text" id="text" placeholder='Year'/>
          <input type="text" id="text" placeholder='Budget'/>
          <button className='btn primaryBtn flex'>
            <BsSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search