import siteLogo from "./assets/siteLogo.svg";
import pageImg1 from "./assets/pageImg1.svg";
import pageImg2 from "./assets/pageImg2.svg";
import pageImg3 from "./assets/pageImg3.svg";
import pageImg4 from "./assets/pageImg4.svg";
import pageImg5 from "./assets/pageImg5.svg";
import cardImg1 from "./assets/cardImg1.svg";
import cardImg2 from "./assets/cardImg2.svg";
import cardImg3 from "./assets/card.svg";
import user from "./assets/user.png";
import edit from "./assets/edit-2.png";
import amoCrm from "./assets/crm.svg";
import telegram from "./assets/telegram.svg";
import trello from "./assets/trello.svg";
import phone from "./assets/phone.svg";
import bitrix from "./assets/bitrix.svg";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    { name: "SMS yuborilganlar", users: 110 },
    { name: "kirganlar", users: 68 },
    { name: "Mahsulot sahifasiga kirganlar", users: 49 },
    { name: "Sotib olganlar", users: 82 },
    { name: "Izoh qoldirganlar", users: 65 },
  ];

  const radius = 85;
  return (
    <>
      <div className="header">
        <div className="header-container">
          <img src={siteLogo} alt="" />
          <div className="links">
            <div className="pagesUrl">
              <img src={pageImg1} alt="" />
              <p>Asosiy</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg2} alt="" />
              <p>Mijozlar bazasi</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg3} alt="" />
              <p>Tracking loyihalari</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg4} alt="" />
              <p>Sharh olish loyihalari</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg5} alt="" />
              <p>Redirect loyihalari</p>
            </div>
          </div>
          <div className="select">
            <img src={user} alt="" />
            <select>
              <option value="Austin Robertson" className="select">
                Austin Robertson
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="right">
          <div className="cards">
            <div className="cards_card">
              <img src={cardImg1} alt="" />
              <div className="card_desc">
                <p className="card_title">Tracking loyihalari</p>
                <h4>5 ta</h4>
                <p className="sub">(7 ta subloyiha)</p>
              </div>
            </div>
            <div className="cards_card">
              <img src={cardImg2} alt="" />
              <div className="card_desc">
                <p className="card_title">Sharh olish loyihalari</p>
                <h4>15 ta</h4>
                <p className="sub">(7 ta subloyiha)</p>
              </div>
            </div>
            <div className="cards_card">
              <img src={cardImg3} alt="" />
              <div className="card_desc">
                <p className="card_title">Mijozlar</p>
                <h4>12,345 ta</h4>
                <p className="sub">(563 ta saralanmagan)</p>
              </div>
            </div>
          </div>
          <div className="right_container">
            <h1 className="right_container_title">Tracking loyihasi</h1>
            <div className="Appp">
              <BarChart width={1000} height={400} data={data} barSize={30}>
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 111, right: 111 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="users"
                  fill="#6D3AFF"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>
          </div>
          <div className="right_footer">
            <div className="right_footer_title_container">
              <h2 className="firsttitle">#Tag lar</h2>
              <div className="right_footer_title_twoo">
                <h2>120 ta</h2>
                <p>umumiy #tag lar soni</p>
              </div>
            </div>
            <div className="main_tag">
              <div className="tag">
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
              </div>
              <div className="tag">
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
              </div>
              <div className="tag">
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
              </div>
              <div className="tag">
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
                <div className="tagDesc">
                  <div className="childreen">
                    <span className="circle"></span>
                    <p>Bolalar uchun</p>
                  </div>
                  <p className="subscription">15.7k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="left_header">
            <p className="SMS">1 oylik SMS lar</p>
            <p className="mainnn">Umumiy</p>
            <h2 className="number">1000 ta</h2>
            <div className="block">
              <svg width={70} height={70} viewBox={`0 0 ${200} ${200}`}>
                <circle
                  cx={200 / 2}
                  cy={200 / 2}
                  strokeWidth="15px"
                  r={radius}
                  className="circle-backk"
                />
                <circle
                  cx={200 / 2}
                  cy={200 / 2}
                  strokeWidth="15px"
                  r={radius}
                  className="circle-progress"
                  style={{
                    strokeDasharray: 190,
                    strokeDashoffset: 0,
                  }}
                />
                <p>76%</p>
              </svg>
              <div className="desccc">
                <h4>740 ta</h4>
                <p>Yetib borgan</p>
              </div>
            </div>
            <div className="block">
              <svg width={70} height={70} viewBox={`0 0 ${200} ${200}`}>
                <circle
                  cx={200 / 2}
                  cy={200 / 2}
                  strokeWidth="15px"
                  r={radius}
                  className="circle-back"
                />
                <circle
                  cx={200 / 2}
                  cy={200 / 2}
                  strokeWidth="15px"
                  r={radius}
                  className="circle-progres"
                  style={{
                    strokeDasharray: 490,
                    strokeDashoffset: 590,
                  }}
                />
                <p>26%</p>
              </svg>
              <div className="desccc">
                <h4>260 ta</h4>
                <p>Hatolik bo’lgan</p>
              </div>
            </div>
          </div>
          <div className="tracking">
            <div className="firs">
              <h2>234 ta</h2>
              <p>bu oygi feedbacklar</p>
            </div>
            <p className="last">1.5%</p>
          </div>
          <div className="left_footer">
            <div className="interation">
              <h1 className="interation-title">Integratsiyalar</h1>
              <div className="cardsss">
                <div className="interation-card">
                  <div className="circle-card-info">
                    <span>
                      <img src={amoCrm} alt="" width={45} height={45} />
                    </span>
                    <div className="card-title">
                      <h1 className="card-title-name">AmoCrm</h1>
                      <p className="card-title-bot">CRM</p>
                    </div>
                  </div>
                  <span className="edit">
                   <img src={edit} alt="" />
                  </span>
                </div>

                <div className="interation-card">
                  <div className="circle-card-info">
                    <span>
                      <img src={telegram} alt="" width={45} height={45} />
                    </span>
                    <div className="card-title">
                      <h1 className="card-title-name">TelegramBot</h1>
                      <p className="card-title-bot">Habar yuboruvchi</p>
                    </div>
                  </div>
                  <span className="edit">
                   <img src={edit} alt="" />
                  </span>
                </div>

                <div className="interation-card">
                  <div className="circle-card-info">
                    <span>
                      <img src={trello} alt="" width={45} height={45} />
                    </span>
                    <div className="card-title">
                      <h1 className="card-title-name">Trello</h1>
                      <p className="card-title-bot">Task Management</p>
                    </div>
                  </div>
                  <span className="edit">
                   <img src={edit} alt="" />
                  </span>
                </div>

                <div className="interation-card">
                  <div className="circle-card-info">
                    <span>
                      <img src={bitrix} alt="" width={45} height={45} />
                    </span>
                    <div className="card-title">
                      <h1 className="card-title-name">Bitrix</h1>
                      <p className="card-title-bot">CRM</p>
                    </div>
                  </div>
                  <span className="edit">
                   <img src={edit} alt="" />
                  </span>
                </div>

                <div className="interation-card">
                  <div className="circle-card-info">
                    <span>
                      <img src={phone} alt="" width={45} height={45} />
                    </span>
                    <div className="card-title">
                      <h1 className="card-title-name">IP Phone</h1>
                      <p className="card-title-bot">Phone</p>
                    </div>
                  </div>
                  <span className="edit">
                   <img src={edit} alt="" />
                  </span>
                </div>
              </div>
              <p className="more-info">
                <p>Barcha integratsiyalar</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
