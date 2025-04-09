import FirstSection from "../compontents/FirstSection";
import SecondSection from "../compontents/SecondSection";
import img1 from "../assets/IMG_7114.jpg"
import img2 from "../assets/charity3.jpg"
import img3 from "../assets/charity5.jpg"
import {  motion } from "framer-motion";
import { Link } from "react-router-dom";

function Events() {

  const data =[
    {id:1,title:"BOREHOLE CONSTRUCTION",subtitle:"Borehole construction in buliisa district and Gulu city aims at helping in the suppling of water in these communities  ",imagepart:img1},
    {id:2,title:"LIQUID SOAP MAKING",subtitle:"This is to help the needy earn money through selling the liqiud soap",imagepart:img2},
    {id:3,title:"BAKING CLASSES",subtitle:" This is to help the needy earn some money",imagepart:img3},
   ]




    return(
    <>
    <FirstSection/>
      <SecondSection/>

      <div className="w-full h-full flex flex-col mt-6 ">

        <center>
          <h1 className="md:text-3xl text-xl font-bold md:font-bold">Donate To Changing The World</h1>
        </center>
      <motion.div
    
      className="md:grid grid grid-cols-2 gap-6 md:gap-2 ml-8 mt-8 md:grid-cols-4 mb-8">
        {
          data.map(data =>(
            <motion.div 
            initial ={{
              opacity:0,
              y:100,
            }}
            animate ={{
              opacity:1,
              y:0,
              
            }}
            transition={{
              ease:'easeIn',
              duration:1.5
            }}
       
      key={data.id}  className="w-[12rem] h-[22rem] md:w-[16rem] md:h-[20rem] bg-gray-700 flex flex-col items-center">

        <img src={data.imagepart} alt="" className="h-35 w-full" />
        <h2 className="text-white text-xs font-bold ml-4 md:mt-2 ">{data.title}</h2>

       <center className="mt-2"> <span className="text-white text-md font-light leading-5.5 ">
          {data.subtitle}
        </span></center>

        <Link to="/contactus"> <button  className='bg-amber-400 fix w-27 mt-2   p-1 text-white'>
          <span className='p-1'>Donate Now</span>
          
        </button>   </Link>


       </motion.div>
   
          ))


        }
       


      </motion.div>
      </div>









      
      
      </>
    )
}
export default Events;