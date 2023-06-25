import React, { useState,useEffect } from 'react'
import { emojis } from '@/public/emojis';
import idx from '../styles/index.module.css';


const Dictionary = () => {
  const [data,setdata]=useState([]);
  const [search,setsearch]=useState('');


  useEffect(()=>{
    const newData = emojis.filter(emojis => emojis.name.toLowerCase().includes(search.toLowerCase()));
    setdata(newData);
},[search])



  return (
    <>
    <input className={idx.first} style={{marginLeft:"34rem",marginTop:"1rem",height:"2rem",borderRadius:"20px"}} size={20} placeholder="Search Emoji" value={search} onChange={(e)=>setsearch(e.target.value)} />
    <div>{data.map(emojis=>{
        return(<>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
        
            <h2>{emojis.emoji}:</h2>
            <h2 style={{fontFamily:"cursive",fontSize:"18px",paddingTop:"0.6rem",paddingLeft:"6px"}}>{emojis.name}</h2>
            </div>
        </>)
    })}</div>
    </>
  )
}
export default Dictionary;


///<input type="text" onChange={handler()}></input>
