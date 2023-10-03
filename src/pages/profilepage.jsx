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
  const [isloading, setisloading] = useState(true);
  // const [ready, setready] = useState(false)
  // const ready = true ;
  const location = useLocation();
  // const profileId = location.state ;
  const profileId = 2;
  const genericProfile = {
    name: "ilyes",
    email: "ilyes@benabbes.com",
    gender: "male",
    address: "cite kasrou , Batna",
    age: "105",
    phone: "0790852279",
  };
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState({});
  const [basicInfo, setInfo] = useState({});

  const Item = ({ smallkey, mainkey }) => {
    const element = profile[mainkey][smallkey];
    console.log("mainke0kmsalprofiely", profile[mainkey][smallkey]);
    const GenericResponse = "not specefied";

    if (element.type == "choice") {
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
    } else {
      return (
        <div className="myinteger">
          {element.value ? <p>{element.value}</p> : <p>{GenericResponse}</p>}
        </div>
      );
    }
  };

  useEffect(() => {
    console.log("sett");
    fetchData(PROFILE_BY_ID_API + profileId + "/", "get")
      .then((data) => {
        if (data) {
          setProfile(data.myself.all_categories);
          setInfo(data.myself.basic_info);
          return data;
        }
      })
      .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    if (Object.keys(profile).length > 0) {
      setReady(true);
    }
  }, [profile]);

  return (
    <Layout checkingProfile="true" profile={ready ? basicInfo : genericProfile}>
      <div className=" profilepage col g2 ">
        <div className="profileContainer col">
          <h1>{"Account Details"}</h1>
          {ready &&
            Object.keys(profile).map((mainkey) => {
              console.log("mainkey", mainkey);
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

        <div className=" col  reviews profileContainer">
          <h1>{"Reviews :"}</h1>
                <Review review = {{content :"you are a bad user , bacause you don't want to do this and that , you don't clean , you fuckng do nothing you r peaicje fj j;fkad fj;klasdd f;jklaf j;ask dfj;l " , rating :"4"}}></Review>

        </div>
      </div>
    </Layout>
  );
}

export default Profilepage;
