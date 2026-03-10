import React from "react";
import SubjectCard from "../components/common/SubjectCards";
import { Industries } from "../utils/Helper";
import Icons from "../components/common/Icons";

const SubjectAreas = () => {
    return (
        <div className="bg-[#1D1F26] flex justify-center w-full px-4 md:px-6">
            <div className="w-full max-w-[1140px] mx-auto mt-16 md:mt-20 lg:mt-24 mb-20 lg:mb-28">

                <div className="flex flex-col items-center text-center">
                    <p className="text-[#EF7D00] text-sm md:text-base font-semibold flex items-center gap-2">
                        <Icons icon={"dot"} />
                        Subject Areas
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 text-white max-w-[720px]">
                        Industry Expertise That Sets Us Apart
                    </h2>

                    <p className="text-[#CCCCCC] text-sm md:text-base mt-4 max-w-[720px]">
                        Our translators are specialists in their fields, ensuring
                        terminological accuracy and industry-appropriate language for every project.
                    </p>
                </div>
                <div className="mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                    {Industries.map((item, index) => (
                        <SubjectCard
                            key={index}
                            subjecticons={item.icon}
                            text={item.title}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SubjectAreas;
