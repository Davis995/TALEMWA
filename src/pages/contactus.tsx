import FirstSection from "../compontents/FirstSection";
import SecondSection from "../compontents/SecondSection";

import imgperson from "../assets/person1.jpg"
import imgperson1 from "../assets/person2.jpg"
import imgperson2 from "../assets/person3.jpg"


function ContactUs() {
    return(
    <>
    <FirstSection/>
      <SecondSection/>
    
      <div className="w-full flex-col md:flex mt-6  items-center h-auto"  >
        
      
        

             <h1 className="text-2xl font-bold  ml-24">Contacts us</h1>


             <div className="flex  flex-col md:flex-row mt-10 w-full h-auto  gap-12  md:items-center md:gap-8 ml-20 mb-14 md:justify-center ">




              <div className="w-[14rem] h-[25rem] flex flex-col gap-2  bg-gray-200  shadow-2xl rounded-lg">

                <center><img src={imgperson} alt="" className="h-35 w-35 rounded-full mt-4 " /></center>
                <center><span className="font-semibold ">Talemwa Matthew</span></center>
                <center><span className="font-normal text-sm">Counsel</span></center>


                <h3 className="text-left font-bold text-sm ml-4  mt-3">CONTACT</h3>
                <div className="flex flex-col ml-4 mt-2  gap-4">
                  <div className="flex flex-row text-sm gap-4">
                    <span>Address</span><span>:</span><span>Kampala, kasanga</span>
                  </div>
                  <div className="flex flex-row text-sm gap-6">
                    <span>phone </span><span>:</span><span>+256 755 820688</span>
                  </div>
                  <div className="flex flex-row text-sm gap-2">
                    <span className="text-sm">whatsapp </span><span>:</span><span>+256 755 820688</span>
                  </div>
                </div>




              </div>
              


<div className="w-[14rem]  h-[25rem] flex flex-col gap-2  bg-gray-200  shadow-2xl rounded-lg">

   <center><img src={imgperson1} alt="" className="h-35 w-35 rounded-full mt-4 " /></center>
   <center><span className="font-semibold ">Nyangoma Mary</span></center>
   <center><span className="font-normal text-sm">Total Energies</span></center>


   <h3 className="text-left font-bold text-sm ml-4  mt-3">CONTACT</h3>
<div className="flex flex-col ml-4 mt-2  gap-4">
  <div className="flex flex-row text-sm gap-4">
    <span>Address</span><span>:</span><span>Buliisa</span>
  </div>
  <div className="flex flex-row text-sm gap-6">
    <span>phone </span><span>:</span><span>+256 781 663562</span>
  </div>
  <div className="flex flex-row text-sm gap-2">
    <span className="text-sm">whatsapp </span><span>:</span><span>+256 781 663562</span>
  </div>
</div>
</div>









<div className="w-[14rem]  h-[25rem] flex flex-col gap-2  bg-gray-200  shadow-2xl rounded-lg">

   <center><img src={imgperson2} alt="" className="h-35 w-35 rounded-full mt-4 " /></center>
   <center><span className="font-semibold  ">Allinitwe Lonah Stacy</span></center>
   <center><span className="font-normal text-sm">Counsel</span></center>


   <h3 className="text-left font-bold text-sm ml-4  mt-3">CONTACT</h3>
<div className="flex flex-col ml-4 mt-2  gap-4">
  <div className="flex flex-row text-sm gap-4">
    <span>Address</span><span>:</span><span>Masindi</span>
  </div>
  <div className="flex flex-row text-sm gap-6">
    <span>phone </span><span>:</span><span>+256 781 663562</span>
  </div>
  <div className="flex flex-row text-sm gap-2">
    <span className="text-sm">whatsapp </span><span>:</span><span>+256 781 663562</span>
  </div>
</div>
</div>






















             </div>
             </div>


     
      
          





     
       
     
      
      </>
    )
}
export default ContactUs;