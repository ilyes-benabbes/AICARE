

function handleSetState(newState){
    dispatch({
        type: 'alerted',
      });
}


function handleGetState(){
    dispatch({
        type: 'gotten',      
      });
}


export default function convos_Reducer(convos, action) {
    // return next state for React to set
    if (action.type === "gotten"){
        console.log('gooriii')
                return (convos)
    }
    else if (action.type === "alerted"){
        console.log("alleeerrrttt")
        return alert(convos)}
    }
  