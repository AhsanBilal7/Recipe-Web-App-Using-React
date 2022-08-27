import React, { useEffect, useState } from "react";
const Apifun = async (prop, setData, setLoad) => {
  console.log("Yes I am running");
  setLoad(false);

  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${prop}`
  ).then((response) => {
     return response = response.json()
    }).then((data)=>{
      data = data.meals
      console.log(data)
      setData(data);
      setLoad(true);

    })
    .catch((err) => {
      console.log(err);
      setLoad(false);
    });

  // then(response =>response.json0()).then(info=>{setData(info)})
  // result = result.meals;
};

export { Apifun };
