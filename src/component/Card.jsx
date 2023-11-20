import React, { useEffect, useState } from "react";
import "../css/card.css";
import axios from "axios";

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      console.log(response.data.results);
      setCardData(response.data.results);
    };
    fetchdata();
  }, []);
  return (
    <>
      {cardData.map((ele) => {
        return (
          <div className="cardwrapper" key={ele.id}>
            <div className="head">
              <p>{ele.location.city + " " + ele.location.country}</p>
            </div>
            <div className="cardcontent">
              <div className="imagewrapper">
                <img src={ele.picture.large} className="profleimg"></img>
              </div>
              <div className="content">
                <p>
                  Name :
                  <span>
                    {ele.name.title +
                      ". " +
                      ele.name.first +
                      " " +
                      ele.name.last}
                  </span>
                </p>
                <br></br>
                <p>
                  Gender : <span>{ele.gender}</span>
                </p>
                <br></br>
                <p>
                  Phone : <span>{ele.cell}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
