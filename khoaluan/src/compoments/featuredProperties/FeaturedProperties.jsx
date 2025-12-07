import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://image.vietgoing.com/hotel/03/35/vietgoing_qzt2404307844.webp"
          alt=""
          className="fpImg"
        />
        <span className="fpName">La Siesta Premium</span>
        <span className="fpCity">TP. Hồ Chí Minh</span>
        <span className="fpPrice">3,163,000 VND</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Tốt</span>
        </div>      
      </div>
      <div className="fpItem">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.zhi5p7TbDmCg1er0v5NLIQHaE9?pid=Api&P=0&h=180"
          alt=""
          className="fpImg"
        />
        <span className="fpName">A La Carte Đà Nẵng Beach</span>
        <span className="fpCity">Đà Nẵng</span>
        <span className="fpPrice">3,500,000 VND</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.TtnwH3xgdU1r7UstAy3fbAHaE8?pid=Api&P=0&h=180"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Khách sạn Eagle Hà Tĩnh</span>
        <span className="fpCity">Hà Tĩnh</span>
        <span className="fpPrice">1,500,000 VND</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.Kd9DpwaYOiM30kKAeEQPOwHaE8?pid=Api&P=0&h=180"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Khách Sạn JW Marriott Hà Nội</span>
        <span className="fpCity">Hà Nội</span>
        <span className="fpPrice">2,500,000 VND</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Tốt</span>
        </div>
      </div>
    </div>
    
  );
};

export default FeaturedProperties;