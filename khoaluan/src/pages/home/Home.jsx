import Featured from "../../compoments/featured/Featured";
import FeaturedProperties from "../../compoments/featuredProperties/FeaturedProperties";
import Footer from "../../compoments/footer/Footer";
import Header from "../../compoments/header/Header";
import MailList from "../../compoments/mailList/MailList";
import Navbar from "../../compoments/navbar/Navbar";
import PropertyList from "../../compoments/propertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Khám Phá.</h1>
        <Featured/>
        <h1 className="homeTitle">Lựa chọn nơi nghỉ ngơi ưng ý.</h1>
        <PropertyList/>
        <h1 className="homeTitle">Được yêu thích.</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;