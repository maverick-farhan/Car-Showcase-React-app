import './App.css'
import Auction from './Components/Auction/Auction.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Review from './Components/Review/Review.jsx';
import Sellers from './Components/Sellers/Sellers.jsx';
import Search from './Components/Search/Search.jsx';
import Trending from './Components/Trending/Trending.jsx';
const App = () => {
  return (
  <>
  <Navbar />
  <Home />
  <Search />
  <Trending />
  <Sellers />
  <Auction />
  <Review />
  <Footer />
  
  </>
    )
}

export default App