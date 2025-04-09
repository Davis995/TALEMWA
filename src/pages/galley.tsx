import FirstSection from "../compontents/FirstSection";
import SecondSection from "../compontents/SecondSection";
import img1 from "../assets/IMG_7114.jpg"
import img3 from "../assets/charity2.jpg"
import img4 from "../assets/charity3.jpg"
import img5 from "../assets/charity4.jpg"
import img6 from "../assets/charity5.jpg"
import img7 from "../assets/charity6.jpg"
import img8 from "../assets/charity7.jpg"
import img9 from "../assets/charity8.jpg"

import {  motion, } from "framer-motion";


function Gallery() {
  const imgdata =[
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9

    

  ]
    return(
    <>
    <FirstSection/>
      <SecondSection/>

      <div className="h-full w-full flex flex-col items-center ">
      <motion.h1 initial={{
        opacity:0,
        y:-100
      }} 
      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        ease:"easeIn",
        duration:1
      }}
      className="md:text-3xl text-xl font-bold md:font-bold">Take A Look At The Moment We captured</motion.h1>
      <div className=" ml-4 mr-4 md:columns-4 columns-2 mt-8 space-y-3 mb-6">
        {
          imgdata.map(i =>(
          <motion.img
          className="rounded-lg w-[20rem] shadow-lg"
          whileHover={{
            scale:0.2
          }}
          whileInView={{
            opacity:1,
            y:0

          }}
          initial ={{
            opacity:0,
            y:100,
          }}
        
       
          transition={{
            ease:"easeInOut",
            duration:2.5,

          }}
      
          
          src={i} alt="" />
          ))
        }

      </div>

      </div>
      
      
      </>
    )
}
export default Gallery;