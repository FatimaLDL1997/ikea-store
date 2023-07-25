import React from 'react'
import { useAppContext } from "../context/appContext";
import { useEffect } from 'react';

const Overlay = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
    useEffect(()=>{
        const body = document.querySelector('body')
        if(showSidebar){
            console.log(body)
            body.classList.add('hide-overflow-y')
        }
        else{
            body.classList.remove('hide-overflow-y')
        }
    },[showSidebar])
  return (
    <div className='overlay' style={{display: showSidebar? 'block': 'none'}}>
      
    </div>
  )
}

export default Overlay
