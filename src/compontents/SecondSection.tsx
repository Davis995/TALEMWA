import { Link } from "react-router-dom";
import NavBar from "./navbar"
import {  motion,easeIn } from "framer-motion";
const SecondSection = () =>{
    return(
        <motion.div 
        initial={{
          opacity:0
      }}
      animate={{
          opacity:1
      }}
      transition={{
          ease:easeIn,
          delay:1,
    
      }}
      
        className='md:flex md:flex-row gap-2 flex flex-col items-center justify-between p-2' >

        <div 
              
        style={{marginLeft:64}} className='text-2xl font-bold space-x-1 '>
          <span className='text-amber-400'>T</span><span className='text-green-800'>C</span><span className='text-amber-400'>O</span>
        </div>
  
         <NavBar/>
  
  <Link to="/contactus"><button style={{marginRight:200}} className='bg-amber-400 ml-40 w-27 md:ml-0  p-1 text-white'><span className='p-1'>Donate Now</span></button>   
  </Link>
      </motion.div>
    )

}
export default SecondSection