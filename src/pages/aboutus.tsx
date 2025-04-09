import FirstSection from "../compontents/FirstSection";
import SecondSection from "../compontents/SecondSection";
import logo from "../assets/logoi.jpg"
import {  motion } from "framer-motion";

function AboutUs() {
  const coreValue =[
    {"id":1,"title":"Compassion","point1":"Showing empathy and kindness towards beneficiaries, stakeholders,and the commity." ,"point2":"providing supportive and caring services to those in need"}
    ,{"id":1,"title":"Compassion","point1":"Showing empathy and kindness towards beneficiaries, stakeholders,and the commity." ,"point2":"providing supportive and caring services to those in need"}
    ,{"id":1,"title":"Compassion","point1":"Showing empathy and kindness towards beneficiaries, stakeholders,and the commity." ,"point2":"providing supportive and caring services to those in need"}

  ]
    return(
    <>
    <FirstSection/>
      <SecondSection/>
      <div className="md:flex md:flex-col flex flex-col">

        <div className="md:flex md:flex-row gap-6 ml-8 mr-6 flex flex-col ">
          <motion.img src={logo} className="w-60 h-60" alt="" 
          initial ={{
            x:300,
            scale:2.5,
            opacity:0
            
          }}
          animate ={
            {
              opacity:1,
              x:0,
              scale:1
            }
          }
          transition={{
            duration:2
          }}
          />
          <div className="flex flex-col">


            <motion.div
              initial ={
                {
                  opacity:0,
                  
                }
              }
              animate ={{
                opacity:1,
                y:0
              }}
              transition={{
                delay:1.5,
                duration:2,
                ease :"easeIn"
              }}


            className=" p-4 border-b-3 border-b-gray-950 ">
                <h1 className="font-bold text-lg">Who are we ?</h1>
            </motion.div>

            <motion.div 
            initial ={
              {
                opacity:0,
                
              }
            }
            animate ={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:1.5,
              duration:2,
              ease :"easeIn"
            }}
            
            
            className="mt-2">

              <p className="leading-loose text-md font-light">
                Talemwa charity organisation is a christian based charity organistion and our main objectrive is to change the life of need.
                It was founded on 31/12/2024 from a vision from God (TALEMWA CHARITY ORGANIZATION) early before I had seen the increasing number of children suffering on the 
                streets of kampala and that really was the turning point of my life I decided to take a step and pray about it then God showed
                me (TALEMWA CHARITY ORGANIZATION) I told friends and family that helped financially, emotionally, physically on the stupendous path had taken
              - <span className="text-md font-bold">Talemwa Matthew[Founder]</span>
              </p>
            </motion.div>


          </div>
        </div>


<motion.div 
 initial ={
  {
    opacity:0,
    
  }
}
animate ={{
  opacity:1,
  y:0
}}
transition={{
  delay:1.5,
  duration:2,
  ease :"easeIn"
}}

className="flex flex-col bg-gray-950/90 items-center mt-8 ">
  <h2 className="text-gray-50" > Our Core values </h2>
  <div className="md:flex md:flex-row gap-12 flex-col ">

    
      {
        coreValue.map(item =>(
          <div key={item.id} className="bg-amber-400 w-80 mb-6 mt-4 text-white font-bold h-auto text-sm leading-loose  ">
           <center><h3>{item.title}</h3></center>
          <ul className="flex flex-col gap-2 items-center ml-4" >
            
            <li className="">-{item.point1}</li>
            <li>-{item.point2}</li>
          </ul>
          </div>
        ))
      }

   

  </div>



  

</motion.div>






        
      </div>
      
      
      </>
    )
}
export default AboutUs;