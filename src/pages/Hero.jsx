


import React from "react";
import Form from "../components/common/Form";
import Icons from "../components/common/Icons";
import Button from "../components/common/Button";

const Hero = () => {
    return (
        <div
            className="relative flex items-center justify-center w-full px-4 md:px-6 lg:px-8 py-16 mt-10 lg:py-0 min-h-[700px]"
            style={{
                backgroundImage: "url('/assets/images/bg1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
         
            <div className="absolute right-0 bottom-0 z-0 hidden lg:flex max-w-[900px] w-full justify-end">
                <Icons icon={"world"} />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] gap-12">
 
                <div className="w-full lg:max-w-[520px] text-center lg:text-left">

                    <div className="flex mx-auto lg:mx-0 max-w-fit items-center gap-2 bg-[#EF7D0014] px-4 py-2 rounded-full">
                        <Icons icon={"star"} />
                        <p className="font-semibold text-sm md:text-base text-[#EF7D00]">
                            Professional Translation Services
                        </p>
                    </div>

                    <h1 className="font-normal text-[34px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-[120%] text-[#010101] mt-5">
                        Breaking Language Barriers Across the Whole World
                    </h1>

                    <p className="text-sm md:text-base leading-[150%] text-[#4C4C4C] mt-4 max-w-[500px] mx-auto lg:mx-0">
                        Breaking language barriers with precision, expertise, and
                        cutting-edge technology. We deliver accurate translations across
                        100+ languages, tailored to your industry needs.
                    </p>

                    <Button
                        className="mt-8 py-[13px] px-6 bg-[#1D1F26] font-semibold text-base text-white hover:text-[#1D1F26] hover:bg-white border border-transparent hover:border-[#1d1f26] rounded-xl transition-all duration-300"
                        text="Get Started Free"
                    />
                </div>

           
                <div className="w-full max-w-[500px]">
                    <Form
                        formCss={"w-full"}
                        title={"Let’s talk! 👋"}
                        inputCss={"px-4 py-3 rounded-[12px] bg-[#f9f9f9] w-full"}
                        titleCss={"text-base font-semibold"}
                        textareaCss={
                            "h-[130px] px-4 py-3 bg-[#f9f9f9] rounded-[12px] w-full"
                        }
                        fields={[
                            { type: "text", placeholder: "Your Name", name: "username" },
                            { type: "email", placeholder: "Your Email", name: "useremail" },
                            {
                                type: "textarea",
                                placeholder: "I’m looking for...",
                                name: "usermassege",
                            },
                        ]}
                        buttonText={"Send message"}
                        btcss={
                            "bg-[#EF7D00] hover:bg-white hover:text-[#ef7d00] border font-semibold text-base border-transparent hover:border-[#ef7d00] py-[13px] w-full rounded-[12px] text-white transition-all duration-300"
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero
