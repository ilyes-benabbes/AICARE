import React, { useEffect, useRef, useState } from "react";
import Card from "../components/sub/Card";
import { useUser } from "../pages/reducers/common";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSharedData } from "../context/context";

function ClientsDeck() {
  const cardsref = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { fillContracts, fillConvos, contracts, convos } = useSharedData();

  // *************** finished loading : */
  useEffect(() => {
    if (contracts.length > 0 && convos.length > 0) {
      setIsLoading(false);
    }
  }, [contracts, convos]);

  //********* fill convos */
  useEffect(() => {
    fillConvos();
  }, []);

  //********* fill accounts */
  useEffect(() => {
    fillContracts();
  }, []);

  //********************/

  function print(e) {
    e.preventDefault();
    console.log("Convos :");
    console.log(convos);
    console.log("contracts ", contracts);
  }
  function handleScroll(e) {
    e.preventDefault();
    const container = cardsref.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    console.log("scroll");

    // Check if the user has reached the right end
    const isRightEnd = scrollLeft + clientWidth >= scrollWidth;
    const isLeftEnd = container.scrollLeft === 0;

    if (isRightEnd) {
      setShowLeftArrow(true);
      setShowRightArrow(false);
    } else {
      if (isLeftEnd) {
        setShowLeftArrow(false);
        setShowRightArrow(true);
      } else {
        setShowLeftArrow(true);
        setShowLeftArrow(true);
      }
    }

    console.log(cardsref.current.scrollWidth);
    if (cardsref.current.scrollWidth > cardsref.current.clientWidth) {
      console.log("scrollable");
    }
    console.log("container.clientWidth", cardsref.current.clientWidth);
    // console.log(e)
  }
  function handlescroll(direction) {
    const container = cardsref.current;
    if (direction == "left") container.scrollLeft -= 200;
    else if (direction == "right") container.scrollLeft += 200;
  }

  useEffect(() => {
    if (cardsref.current.scrollWidth > cardsref.current.clientWidth) {
      setShowRightArrow(true);
    }
  }, []);

  return (
    <div className="clients ">
      <h1 className="containertitle">{"Contractors : "}</h1>
      <div
        className="cardsrow  drow g2 "
        ref={cardsref}
        onScroll={(e) => handleScroll(e)}
      >
        {!isLoading ? (
          <>
            {contracts.map((contract) => {
              return <Card contract={contract} key={contract.id}></Card>;
            })}
          </>
        ) : (
          <h1>{"..."}</h1>
        )}

        {showRightArrow && (
          <div className="rightroundCircle">
            <img
              src="arrow.svg"
              className="rightArrow"
              onClick={(e) => handlescroll("right")}
            ></img>
          </div>
        )}
        {showLeftArrow && (
          <div className="leftroundCircle">
            <img
              src="arrow.svg"
              className="leftArrow"
              onClick={(e) => handlescroll("left")}
            ></img>
          </div>
        )}

      </div>
      {/* <Popup
  trigger={Card}
  position="center"
  closeOnDocumentClick
>
<div className="CONTRACT" >
        <p>hello sir </p>
        <p>hello sir1 </p>
        <p>hello sir12 </p>
        <p>hello sir123 </p>
        <p>hello sir1234 </p>
        <p>hello sir12345 </p>
        </div>
</Popup> */}
    </div>
  );
}

export default ClientsDeck;
