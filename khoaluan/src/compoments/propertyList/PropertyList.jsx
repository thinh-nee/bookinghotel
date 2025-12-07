import "./propertyList.css"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://tse3.mm.bing.net/th/id/OIP.kv03qJKbxxFj0lkbTuHuTQHaFI?pid=Api&P=0&h=180" alt="" className="pList" />
            <div className="pListTitles">
              <h1>Khách sạn</h1>
              <h2> 250 khách sạn.</h2>
            </div>
        </div>
    <div className="pListItem">
            <img src="https://tse1.mm.bing.net/th/id/OIP.1-NrCpRMcddiFPKqGvDhagHaE7?pid=Api&P=0&h=180" alt="" className="pList" />
            <div className="pListTitles">
              <h1>Nhà nghỉ</h1>
              <h2> 200 nhà nghỉ.</h2>
            </div>
        </div>
    <div className="pListItem">
            <img src="https://tse2.mm.bing.net/th/id/OIP.0yUJlaVFvromUcv4hJvPFgHaEK?pid=Api&P=0&h=180" alt="" className="pList" />
            <div className="pListTitles">
              <h1>Resort</h1>
              <h2> 100 resort.</h2>
            </div>
        </div> 
    <div className="pListItem">
            <img src="https://tse4.mm.bing.net/th/id/OIP.NjFjRh2oE5mY32fEIxkytQHaFO?pid=Api&P=0&h=180" alt="" className="pList" />
            <div className="pListTitles">
              <h1>Homestay</h1>
              <h2> 120 homestay.</h2>
            </div>
        </div>             
    </div>
  )
}

export default propertyList