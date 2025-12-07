import "./hotel.css"
import Header from '../../compoments/header/Header';
import Navbar from '../../compoments/navbar/Navbar';
import MailList from "../../compoments/mailList/MailList";
import Footer from "../../compoments/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src:"https://tse4.mm.bing.net/th/id/OIP.HS2Xai1OaR2qcuFQrIhjcAHaE8?pid=Api&P=0&h=180"
    },
    {
      src:"https://tse1.mm.bing.net/th/id/OIP.4REvCy7i505NrmmUAZN9SAHaE8?pid=Api&P=0&h=180"
    },
    {
      src:"https://tse1.mm.bing.net/th/id/OIP.4zxAwNmAEWMfs7XImRii4AHaE8?pid=Api&P=0&h=180"
    },
    {
      src:"https://tse3.mm.bing.net/th/id/OIP.-vHCduqK6x6hZx5NZdT5JgHaDq?pid=Api&P=0&h=180"
    },
    {
      src:"https://tse4.mm.bing.net/th/id/OIP.crxk-fk47q6MIAoCi84OhAHaFj?pid=Api&P=0&h=180"
    },
    {
      src:"https://tse2.mm.bing.net/th/id/OIP.rt96vZzugKpKHbxJI1DvigHaE8?pid=Api&P=0&h=180"
    }, 
  ];

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
            <button className="bookNow">Đặt trước hoặc đặt phòng ngay!</button>
          <h1 className="hotelTitle">La Siesta Hoi An Resort & Spa</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>132 Hung Vuong, Thanh Ha, Hoi An</span>
          </div>
          <span className="hotelDistance">Đầy đủ tiện nghi. Cách trung tâm 0.9km.</span>
          <span className="hotelPriceHighlight">Đặt phòng ngay để nhận ưu đãi.</span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
                <h1 className="hotelTitle">Đôi chút về La Siesta Hoi An Resort & Spa</h1>
                <p className="hotelDesc">Tọa lạc giữa lòng phố cổ Hội An thơ mộng, La Siesta Hội An Resort & Spa mang đến sự kết hợp hài hòa giữa nét duyên dáng truyền thống và sự sang trọng hiện đại. Khu nghỉ dưỡng tinh tế này mời gọi du khách đắm mình trong nền văn hóa phong phú của Hội An, đồng thời tận hưởng sự thoải mái và dịch vụ tuyệt vời.
                </p>
            </div>
            <div className="hotelDetailsPrice">
                <h1>Giá/Phòng/Đêm</h1>
                <h2>
                    <p>2.193.290 VND</p>
                </h2>
                <button>Đặt trước hoặc đặt phòng ngay!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;