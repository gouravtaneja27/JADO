// import React from "react";
// import Icons from "./common/Icons";

// const Footer = () => {
//     return (
//         <div className="m-auto flex flex-col justify-center items-center bg-[#F9F9F9] px-4 md:px-6">
//             <div className="max-w-285 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-16 lg:mt-25 gap-10 lg:gap-0">

//                 <div>
//                     <a href="/">
//                         <Icons icon={"pageLogo"} />
//                     </a>

//                     <div className="w-60.5 border border-[#1D1F26]/12 mt-4"></div>

//                     <p className="text-[#4C4C4C] text-base font-normal leading-[150%] mt-6">
//                         Follow on
//                     </p>

//                     <div className="flex items-center gap-3.5 mt-3.5">

//                         <a
//                             href="https://www.instagram.com/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Icons icon={"insta"} />
//                         </a>

//                         <a
//                             href="https://www.facebook.com/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Icons icon={"faceBook"} />
//                         </a>

//                         <a
//                             href="https://www.linkedin.com/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Icons icon={"linkedIn"} />
//                         </a>

//                         <a
//                             href="https://twitter.com/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Icons icon={"twitter"} />
//                         </a>

//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:flex lg:gap-20">

//                     <div className="flex flex-col gap-4">
//                         <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
//                             Quick Links
//                         </h4>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             About us
//                         </a>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             Services
//                         </a>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             Subject Areas
//                         </a>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             Contact us
//                         </a>
//                     </div>

//                     <div className="flex flex-col gap-4">
//                         <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
//                             Legal
//                         </h4>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             Terms & Conditions
//                         </a>

//                         <a
//                             href="#"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%]"
//                         >
//                             Privacy Policy
//                         </a>
//                     </div>

//                     <div className="flex flex-col gap-4">
//                         <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
//                             Contact
//                         </h4>

//                         <a
//                             href="mailto:info@jado.com"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%] flex items-center gap-1"
//                         >
//                             <span>
//                                 <Icons icon={"email"} />
//                             </span>
//                             info@jado.com
//                         </a>

//                         <a
//                             href="tel:+15551234567"
//                             className="text-[#4C4C4C] hover:underline text-base font-normal cursor-pointer leading-[150%] flex items-center gap-1"
//                         >
//                             <span>
//                                 <Icons icon={"phone"} />
//                             </span>
//                             +1 (555) 123-4567
//                         </a>
//                     </div>

//                 </div>
//             </div>

//             <div className="border-t border-t-[#1D1F261F] mt-16 lg:mt-25 text-center w-full">
//                 <p className="text-[#4C4C4C] font-normal text-sm md:text-base leading-[150%] my-4">
//                     © JADO2025. All Rights Reserved.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Footer;





import React from "react";
import Icons from "./common/Icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#F9F9F9] px-4 md:px-6 flex justify-center">
      <div className="w-full max-w-[1140px] py-14">

       
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">


          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <a href="/">
              <Icons icon={"pageLogo"} />
            </a>

            <div className="w-52 border border-[#1D1F26]/12 mt-4"></div>

            <p className="text-[#4C4C4C] text-sm mt-5">
              Follow on
            </p>

            <div className="flex items-center gap-3 mt-3">

              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <span className="scale-90">
                  <Icons icon={"insta"} />
                </span>
              </a>

              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <span className="scale-90">
                  <Icons icon={"faceBook"} />
                </span>
              </a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <span className="scale-90">
                  <Icons icon={"linkedIn"} />
                </span>
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <span className="scale-90">
                  <Icons icon={"twitter"} />
                </span>
              </a>

            </div>
          </div>

        
          <div className="flex flex-col gap-3">
            <h4 className="text-[#1D1F26] font-semibold">
              Quick Links
            </h4>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              About us
            </a>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              Services
            </a>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              Subject Areas
            </a>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              Contact us
            </a>
          </div>

      
          <div className="flex flex-col gap-3">
            <h4 className="text-[#1D1F26] font-semibold">
              Legal
            </h4>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              Terms & Conditions
            </a>

            <a href="#" className="text-[#4C4C4C] hover:underline text-sm">
              Privacy Policy
            </a>
          </div>

          
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
            <h4 className="text-[#1D1F26] font-semibold">
              Contact
            </h4>

            <a href="mailto:info@jado.com" className="flex items-center gap-2 text-[#4C4C4C] text-sm hover:underline">
              <Icons icon={"email"} />
              info@jado.com
            </a>

            <a href="tel:+15551234567" className="flex items-center gap-2 text-[#4C4C4C] text-sm hover:underline">
              <Icons icon={"phone"} />
              +1 (555) 123-4567
            </a>
          </div>

        </div>

     
        <div className="border-t border-[#1D1F261F] mt-12 pt-5 text-center text-[#4C4C4C] text-sm">
          © JADO2025. All Rights Reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;



