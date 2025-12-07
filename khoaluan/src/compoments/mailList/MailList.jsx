import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailLTitle">Đặt phòng mọi nơi.</h1>
        <span className="mailDesc">Đăng ký ngay để trải nghiệm.</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Nhập Email" />
            <button>Đăng ký</button>
        </div>
    </div>
  )
}

export default MailList