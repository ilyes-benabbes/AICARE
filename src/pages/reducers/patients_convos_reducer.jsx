import { useNavigate } from "react-router-dom";



// function handleSetState(newState){
//     dispatch({
//         type: 'alerted',
//       });
// }


// function handleNavigateState(){
//     dispatch({
//         type: 'gotten',      
//       });
// }


export default function convos_Reducer(convos, action) {
    alert("haha")
    // const navigate = useNavigate()
    // return next state for React to set
    if (action.type === "navigated"){

        // console.log('gooriii')
        // navigate("/profilepage", { state: action.profile });

    }
    else if (action.type === "alerted"){
        console.log("alleeerrrttt")
        return alert(convos)}
    }
  