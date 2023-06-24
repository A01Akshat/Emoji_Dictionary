import React, { useState } from 'react'
import { emojis } from '@/public/emojis';



const Dictionary = () => {

  
  return (
    <>
    <div>{emojis.map((item,index)=>{
        return(<>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
            <h2>{emojis[index].emoji}:</h2>
            <h2 style={{fontFamily:"cursive",fontSize:"18px",paddingTop:"0.6rem",paddingLeft:"6px"}}>{emojis[index].name}</h2>
            </div>
        </>)
    })}</div>
    </>
  )
}
export default Dictionary;


///<input type="text" onChange={handler()}></input>