import "./list.css"
import Header from '../../compoments/header/Header';
import Navbar from '../../compoments/navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../compoments/searchItem/SearchItem";
import Footer from "../../compoments/footer/Footer";
import MailList from "../../compoments/mailList/MailList";


const List = () => {

  const location = useLocation()

  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)


  return (
    <div>
      <Navbar/>
      <Header type ="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Tìm kiếm</h1>
            <div className="lsItem">
              <label>Điểm đến</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} 
                      to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                      {openDate &&(<DateRange onChange={(item)=>setDate ([item.selection])} 
                      minDate={new Date()}
                      ranges={date}  />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá tối thiểu <small>1 đêm</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá tối đa <small>1 đêm</small>
                </span>
                <input type="number" className="lsOptionInput"  />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                 Người lớn 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Trẻ em
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                 Phòng
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
            </div>
            </div>
             <button>Tìm Kiếm</button>
          </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <MailList/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default List;