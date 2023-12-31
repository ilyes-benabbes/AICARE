import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./profile";
import axios from "axios";
import { fetchData, PROFILE_BY_ID_API, fetchUser } from "./reducers/common";
import Layout from "./Layout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Review from "../components/Review";

function Profilepage() {
  //! states and Vars
  const location = useLocation();
  const profileId = location.state ;
  const genericProfile = {
    name: "generic",
    email: "generic@generic.com",
    gender: "generic",
    address: "generic addres",
    age: "generic Age",
    phone: "generic phone number",
  };
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState({});
  const [basicInfo, setInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  const Item = ({ smallkey, mainkey }) => {
    const element = profile[mainkey][smallkey];
    const GenericResponse = "not specefied";

    if (element.type == "field") {
      return (
        <div className="col ">
          {element.value.length > 0 ? (
            <>
              {element.value.map((item) => {
                return <p className="">{item.name}</p>;
              })}
            </>
          ) : (
            <p>{GenericResponse}</p>
          )}
        </div>
      );
    } else if (element.type == "string") {
      return (
        <>
          <div className="col option">
            <p>{element.value ? element.value : GenericResponse}</p>
          </div>
        </>
      );
    } else if (element.type == "boolean") {
      return <div className="">{element.value ? <p>yes</p> : <p>no</p>}</div>;
    } else if (element.type =="choice") {
      return (
        <>
          <div className="col option">
            <p>{element.value ? element.value : GenericResponse}</p>
          </div>
        </>)

    }else {
      return (
        <div className="myinteger">
          {element.value ? <p>{element.value}</p> : <p>{GenericResponse}</p>}
        </div>
      );
    }
  };

  useEffect(() => {
    fetchData(PROFILE_BY_ID_API + profileId + "/", "get")
      .then((data) => {
        if (data) {
          setProfile(data.myself.all_categories);
          setInfo(data.myself.basic_info);
          setReviews(data.myself.reviews)
          return data;
        }
      })
      .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    if (Object.keys(profile).length > 0) {
      setReady(true);
      console.log('reviews', reviews)
    }
  }, [profile]);

  return (
    <Layout checkingProfile="true" profile={ready ? basicInfo : genericProfile}>
      <div className=" profilepage col g2 ">
        <div className="profileContainer col">
          <h1>{"Account Details"}</h1>
          {ready &&
            Object.keys(profile).map((mainkey) => {
              return (
                <Accordion >
                  <AccordionSummary
                  
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "black",
                        fontFamily: "oswald",
                        textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {mainkey}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    {ready &&
                      Object.keys(profile[mainkey]).map((key) => {
                        return (
                          <>
                            <p className="sectionfontthin">
                              {profile[mainkey][key].label}
                            </p>
                            <Item smallkey={key} mainkey={mainkey}></Item>
                          </>
                        );
                      })}
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </div>

        <div className=" col g1 reviews profileContainer">
          <h1>{"Reviews :"}</h1>
          {reviews.map(review => {
            return(
              // <Review review = {{content :"you are a bad user  bacause you don't want to do this and that , you don't clean , you fuckng do nothing you r peaicje fj j;fkad fj;klasdd f;jklaf j;ask dfj;l " , rating :"4"}}></Review>
              <Review review = {review } myName={basicInfo.email}></Review>

            )
          })}

        </div>
      </div>
    </Layout>
  );
}

export default Profilepage;
