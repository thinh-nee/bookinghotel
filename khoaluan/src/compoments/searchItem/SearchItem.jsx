import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://tse3.mm.bing.net/th/id/OIP.XGDyC7w0UB9RPnVaVrQqCgHaE8?pid=Api&P=0&h=180" 
      alt="" className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">La Siesta Hoi An Resort & Spa</h1>
        <span className="siDistance">Thanh Hà,Hội An. Cách trung tâm 1,5km.</span>
        <span className="siTaxiOp">Miễn phí taxi từ sân bay.</span>
        <span className="siSubTitle">Phòng có máy lạnh đầy đủ tiện nghi.</span>
        <span className="siFeatures">Phòng rộng 27m², 1 giường ngủ đôi.</span>
        <span className="siCancelOp">Hủy phòng miễn phí.</span>
        <span className="siCancelOpSubTitle"></span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Tốt</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">2.192.799 VND</span>
          <span className="siTaxOp">Bao gồm thuế và phí.</span>
          <button className="siCheckButton">Tình trạng.</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;