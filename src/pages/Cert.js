import React from 'react'
import styles from "./mycss.module.css"
import { Button } from 'react-bootstrap'


function Cert() {

function handleDelete (){
    alert("trash cleared")
}

  return (
    <div className={styles.global}>
        
        
       
    
        {/* starts here */}
        <div className={styles.leftSide2}>

          <div className={styles.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles.image} />
            </div>
            <b> {"toefl degree of messi "}</b>
            <img src="/trash.svg" className={styles.trash} onClick={handleDelete}></img>
          </div>
          {/* ends here */}
        {/* starts here */}
        <div className={styles.leftSide2}>

          <div className={styles.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles.image} />
            </div>
            <b> {"toefl degree of messi "}</b>
            <img src="/trash.svg" className={styles.trash} onClick={handleDelete}></img>
          </div>
          {/* ends here */}
      
       

          <Button>add</Button>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    </div>
  )
}

export default Cert