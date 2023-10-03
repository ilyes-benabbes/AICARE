import React, { useState } from 'react'
import { useCustomNavigate } from '../../pages/reducers/common';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSharedData } from '../../context/context';


function Card({ contract }) {
  const [navigateToProfile , navigateToChat] = useCustomNavigate() ;
  const {convos , getRole} = useSharedData()
  const role = getRole() ;

  function handleContract(e , id){
    e.preventDefault()
    setOpen(true)
  }
  
  function handleChat(e , id){
    e.preventDefault()
    // console.log('convos', convos)
    // const foundConvo = convos.find((convo) => convo.theseller == "55");
    navigateToChat(id)
    
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid purple',
    borderRadius : 5 ,
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   
          <div className={"clientcard col-center"}>
            <div className="imgcontainer">
              <img src="girl.jpg  " alt="girl" />
              {/* <img src={imgUrl} alt="girl" /> */}
            </div>
            <p className="cardFont cursor"
            onClick={e => navigateToProfile(contract.partner.id)}
            >{contract.partner.id}</p>
            <button className="secondarybtn g1"
            onClick={e => handleContract( e, contract.id)}>
              <p>{"check contract"}</p>
              <img src="checkcontract.svg" alt="linkk"></img>
            </button>
            <button className="primarybtn g1"
            onClick={  e=> handleChat(e , contract.conversation_id)}
            >
              <p>{"open chat"}</p>
              <img src="rightarrow.svg" alt="linkk"></img>
            </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  component="h2" textAlign={"center"}
          fontWeight={400}>
            { "Contract : " + contract.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className=' col g1'>
                <p className='sectionfontthin'>Price/hour</p>
                <p>{contract.price_per_hour}</p>
                <p className='sectionfontthin'>Total hours</p>
                <p>{contract.total_hour}</p>
                <p className='sectionfontthin'>Missed Hours</p>
                <p>{contract.missed_hour}</p>
                
              </div>
          </Typography>
        </Box>
      </Modal>
          </div>
        
    
     
  )
}

export default Card