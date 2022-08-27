import React, { useEffect, useState } from "react";
import { Apifun } from "../apicall/apicall";
import { FaBeer } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import main from "./Main.module.css";
import Card from "../Card/Card";
import MuiCard from "../Mui-Card/MuiCard";
function Main() {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState(null);
  const [displayFlag, setDisplayFlag] = useState(false);
  const [apiLoad, setApiLoad] = useState(false);
  useEffect(() => {
    console.log("This is inside Effect", title, load);
    Apifun(title, setData, setLoad);
    setApiLoad(false);
  }, [apiLoad]);

  const Click = () => {
    {
      console.log("Outside the useEffect", title, load);
      console.log(data);
      setDisplayFlag(true);
      setApiLoad(true);
    }
  };
  const change = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <>
      <div className={main.Allinall}>
        <div className={main.container}>
          <div className={main.inputTag}>
            {/* <label>Enter the name of the meal: </label> */}
            <input
              onChange={change}
              placeholder="Enter the name of the meal: "
              type="text"
            />
            <button className={main.button} onClick={Click}>
              <BiSearchAlt />
              <span> Search</span>
            </button>
          </div>
        </div>
        {console.log("This is the daaaaaaaaaaaaaaaaa", data)}
        <div className={main.cardContainer}>
          {displayFlag ? (
            load ? (
              data == null ? (
                <>
                  <h1>Not Found !!!</h1>
                </>
              ) : (
                data.map((arr, index) => {
                  return (
                    <>
                      <div className={main.cardItem}>
                        <MuiCard value={arr} />
                      </div>
                    </>
                  );
                })
              )
            ) : (
              <>
                {" "}
                <div>Api is Loading !! Check Your internet Connection</div>
              </>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
