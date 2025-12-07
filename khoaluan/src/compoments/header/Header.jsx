import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDay, faCar, faPerson, faPlaceOfWorship, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from "react-date-range"
import { Children, useState } from "react"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"


const Header = ({type}) => {
    const [destination,setDestination] = useState("")
    const  [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key : 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] =useState(false);
    const [options, setOptions] =useState({
        adult: 1,
        children:0,
        room:1,
    });

  const navigate=useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => {
      const value = operation === "i" ? prev[name] + 1 : prev[name] - 1;
      return {
        ...prev,
        [name]: Math.max(0, value) 
      };
    });
  };

  const handleSearch =()=>{
    navigate("/hotels",{state:{destination,date,options}});
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faPlaceOfWorship} />
                <span>Attractions</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxi</span>
            </div>
        </div>
        { type !== "list" &&
            <>
            <h1 className="headerTitle">Nơi ngủ ngon kể cả khi bạn ở xa nhà.</h1>
        <p className="headerDesc">Trải nghiệm tuyệt vời cùng với Booking_App.Nhận ưu đãi ngay khi có tài khoản.</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed}className="headerIcon"/>
                <input type="text" 
                       placeholder="Tìm kiếm địa điểm." 
                       className="headerSearchInput"
                       onChange={e=>setDestination(e.target.value)}
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay}className="headerIcon"/>
                <span onClick={() => setDestination((prev) => !prev)}  className="headerSearchText"> {`${format(date[0].startDate, "dd/MM/yyyy")} 
                                                     to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                {destination && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson}className="headerIcon"/>
                <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}</span>
                 {openOptions && <div className="options">
      <div className="optionItem">
        <span className="optionText">Người lớn</span>
        <div className="optionCounter">
          <button
            className="optionCounterButton"
            onClick={() => handleOption("adult", "d")}
            disabled={options.adult <= 1}
          >
            -
          </button>
          <span className="optionCounterNumber">{options.adult}</span>
          <button
            className="optionCounterButton"
            onClick={() => handleOption("adult", "i")}
          >
            +
          </button>
        </div>
      </div>

      <div className="optionItem">
        <span className="optionText">Trẻ em</span>
        <div className="optionCounter">
          <button
            className="optionCounterButton"
            onClick={() => handleOption("children", "d")}
            disabled={options.children <= 0}
          >
            -
          </button>
          <span className="optionCounterNumber">{options.children}</span>
          <button
            className="optionCounterButton"
            onClick={() => handleOption("children", "i")}
          >
            +
          </button>
        </div>
      </div>

      <div className="optionItem">
        <span className="optionText">Phòng</span>
        <div className="optionCounter">
          <button
            className="optionCounterButton"
            onClick={() => handleOption("room", "d")}
            disabled={options.room <= 1} 
          >
            -
          </button>
          <span className="optionCounterNumber">{options.room}</span>
          <button
            className="optionCounterButton"
            onClick={() => handleOption("room", "i")}
          >
            +
          </button>
        </div>
      </div>
    </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Tìm kiếm</button>
            </div>
        </div> </>}
      </div>
    </div>
  )
}

export default Header