import { Link } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
const  NavBar =() => {

    const navElement = [
        {"id":1,"label":"Home",link:"/"},
        {"id":2,"label":"About us",link:"/aboutus"},
        {"id":3,"label":"Gallery",link:"/gallery"},
        {"id":4,"label":"Cause",link:"/event"},
       
        {"id":6,"label":"Contact us",link:"/contactus"},
    ]




    return(

       <motion.nav
       initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    transition={{
        ease:easeIn,
        delay:1
    }}
       
       className="flex gap-4  md:gap-8">
        {
            navElement.map(data =>(
                <Link to={data.link} className="cursor-pointer hover:text-amber-400"
             key={data.id}>{data.label}</Link>
            ))
        }
       </motion.nav>

 
    )
    
}
export default NavBar;