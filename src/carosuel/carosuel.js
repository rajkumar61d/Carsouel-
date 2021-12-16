import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../carosuel/carsosuelStyle.scss';
import { tns } from "tiny-slider"
import Telepone from '../assets/image/logo.jpg'
import Telepone2 from '../assets/image/logo2.jpg'
import Telepone3 from '../assets/image/logo3.jpg'

const Carousels = () => {

  const [active, setActive] = useState('')

  let sliders='';

  useEffect(()=>{
   sliders =  tns({
      container: '.my-slider',
      "items": 2,
      "axis": "vertical",
      "swipeAngle": false,
      "speed": 400,
    });
  })
  
   

  const handleOne = (e,value=0) =>{
    sliders.goTo(value)
  }
    return (
        <div className="carosuel-conatiner">
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <div className="my-slider">
                <div> <img width={200} src ={Telepone} /></div>
                <div><img width={200}src ={Telepone2} /></div>
                <div><img width={200}src ={Telepone3} /></div>
                <div><img width={200}src ={Telepone} /></div>
                <div><img width={200}src ={Telepone2} /></div>
                {/* <div><img width={200}src ={Telepone3} /><p>Lorem Ipsum</p>  </div>
                <div><img width={200}src ={Telepone} /> <p>Lorem Ipsum</p> </div>
                <div><img width={200}src ={Telepone} /> <p>Lorem Ipsum</p> </div>
                <div><img width={200}src ={Telepone3} /> <p>Lorem Ipsum</p> </div> */}
            </div>
            </Grid>
            <Grid item xs={2}>
            <div id="customize-controls">
              <p onMouseOver={(e)=>handleOne(e,1)} className="one">one</p>
              <p onMouseOver={(e)=>handleOne(e,2)} className="Two"> Two</p>
              <p onMouseOver={(e)=>handleOne(e,3)} className="Three">Three</p>
              <p onMouseOver={(e)=>handleOne(e,4)} className="Four">Four</p>
              <p onMouseOver={(e)=>handleOne(e,5)} className="Five">Five</p>
            </div>
            </Grid>
            <Grid item xs={2}>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
            </Grid>
          </Grid>
            

            
        </div>

    )
}

export default Carousels
