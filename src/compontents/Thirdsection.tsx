import { easeIn, easeInOut, motion } from "framer-motion";
import charity from "../assets/IMG_7114.jpg"
import charity1 from "../assets/charity1.jpg"
import { Link } from "react-router-dom";

function ThirdSection(){




return(
    
    <div className="relative  w-full" style={{height:400}}>

        <img src={charity}  className="w-full h-full  object-cover" />
        <div className="absolute md:left-80 top-10 left-4 md:top-16 z-140  flex   flex-col ">


        <motion.div
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}
        transition={{
            ease:easeIn,
            delay:1.5
        }}
        className=" md:flex   ">
            <h2 className=" text-white md:text-2xl text-lg font-semibold"><span className="text-amber-400 ">Empowering women </span> <span className="md:text-white text-amber-400"> and girls to reach</span>
            <span  className="text-amber-400 ">their full potiential, </span><br></br> creating a just and equitable society where
                everyone thrives
            </h2>
            </motion.div>

            <motion.div className="mt-4 flex ml-14"
             initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                ease:easeIn,
                delay:1.5
            }}

            >
            <Link to="/contactus"><button className="ml-40 bg-amber-400 rounded-lg p-2  "><span className="text-white p-2 ">Get Involved</span></button>
            </Link>
          </motion.div>




        </div>
        <div className="absolute z-20 md:left-2 left-8 gap-4 flex flex-col  md:flex md:flex-row top-78">

            <motion.div 
                  initial={
                    {
                        opacity:0,
                        x:400
                    }
                    
                } 
                animate ={{
                    opacity:1,
                    x:0,
                    
                }}
                transition={{
                    ease:easeInOut,
                    type:'spring',
                    delay:2,
                }}
            
            
            className="text-white    h-auto width-auto bg-cyan-800 flex flex-col items-center p-1 " style={{width:300}}>
                <h3 className="text-lg font-bold ">Objective I</h3>
                <h4 className="text-md font-bold ">Education and Training</h4>
                <p className="leading-loose  font-medium text-xs">
                    Providing education and training programs<br></br> for women and girls to develop
                    <br></br>
                     skills and knowledge.
                </p>

            </motion.div>

            <motion.div 
              initial={
                {
                    opacity:0,
                    y:100,
                }
                
            } 
       
      
              animate={
                {
                    opacity:1,
                    y:0
                }
              }
              
              transition={{
                ease:easeInOut,
                type:'spring',
                delay:2,
            }}     
            className="text-white   h-auto width-auto bg-amber-400 flex flex-col items-center p-1 " style={{width:300}}>
                <h3 className="text-lg font-bold ">Objective II</h3>
                <h4 className="text-md font-bold ">Economic Empowerment</h4>
                <p className="leading-loose  font-medium text-xs">
                    Support women's economic<br></br> empowerment through entrepreneurship,
                    <br></br>
                     job creation, and financial inclusion
                </p>

            </motion.div>
            <motion.div 
                 initial={
                    {
                        opacity:0,
                        y:-400
                    }
                    
                } 
                animate ={{
                    opacity:1,
                    y:0,
                    
                }}
                transition={{
                    ease:easeInOut,
                    type:'spring',
                    delay:2,
                }}
                
            
            className="text-white   h-auto width-auto bg-cyan-800 flex flex-col items-center p-1 " style={{width:300}}>
                <h3 className="text-lg font-bold ">Objective III</h3>
                <h4 className="text-md font-bold">Community Development</h4>
                <p className="leading-loose font-medium text-xs text- ">
                    Work with communities to promote 
                    <br></br> gender equality ,challenge discrimatory 
                    <br></br>
                    practices,
                     and build supportive networks
                </p>

            </motion.div>
            <motion.div 
            initial={
                {
                    opacity:0,
                    x:400
                }
                
            } 
            animate ={{
                opacity:1,
                x:0,
                
            }}
            transition={{
                ease:easeInOut,
                type:'spring',
                delay:2,
            }}
            
            className="text-white  h-auto width-auto bg-amber-400 flex flex-col items-center p-1 " style={{width:300}}>
                <h3 className="text-lg font-bold  ">Objective IV</h3>
                <h4 className="text-md font-bold ">Education and Training</h4>
                <p className="leading-loose  font-medium text-xs">
                    Providing education and training programs<br></br> for women and girls to develop
                    <br></br>
                     skills and knowledge.
                </p>

            </motion.div>





        </div>

<motion.div  
 initial={{
    opacity:0
 }}
 animate={{
    opacity:1,

 }}
 transition={{
    delay:2.4,
    ease:'easeIn'
 }}

className="w-ful flex-col md:flex md:flex-row md:flex-grow md:mt-16 mt-[100vh]">

    <div className="md:flex-2 md:flex-col ml-8">
        <h1 className="text-4xl font-bold ">It's Easier To Take Than To Give</h1 >
        <p className="leading-relaxed text-sm">Hundreds of thousands of girls and women experincing or witnessing  gender-based violence.
            TCN is here to educate, empower and advocate for women and girls, prommoting gender equality, economic independence and community development through reserch, training and community engagemnt.
            
        </p>
        <button  className='bg-amber-400 p-1 mt-2 mb-4 text-white'><Link to="/contactus" className='p-1'>Donate Now</Link></button>   



    </div>
    <div className="flex-1 ml-2">
    <img src={charity1}  className="w-80 h-40 " />


    </div>





    
</motion.div>

    </div>

)
}
export default ThirdSection;