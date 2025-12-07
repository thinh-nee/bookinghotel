import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://tse4.mm.bing.net/th/id/OIP.FS61wD65fPpTk5iJTfAfjQHaE8?pid=Api&P=0&h=180" alt="" className="featuredItem" />
            <div className="featuredTitles">
                <h1>TP Hồ Chí Minh</h1>
                <h2>240 địa điểm.</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://tse2.mm.bing.net/th/id/OIP.Yir7QAgyRHx4G0x2_mE9YAHaEK?pid=Api&P=0&h=180" alt="" className="featuredItem" />
            <div className="featuredTitles">
                <h1>Đà Nẵng</h1>
                <h2>150 địa điểm.</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://tse4.mm.bing.net/th/id/OIP.EscCj7M9FXSs5qJuvfY_bwHaE4?pid=Api&P=0&h=180" alt="" className="featuredItem" />
            <div className="featuredTitles">
                <h1>Hà Nội</h1>
                <h2>180 địa điểm.</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://tse4.mm.bing.net/th/id/OIP.9afjASyERbojyKuU7bfDNgHaE8?pid=Api&P=0&h=180" alt="" className="featuredItem" />
            <div className="featuredTitles">
                <h1>Hà Tĩnh</h1>
                <h2>120 địa điểm.</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured;