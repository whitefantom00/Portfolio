import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-start justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Analytics Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Gamota
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2025 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Another end-to-end data solution role. This time I acted as an ML Engineer someways too. Basically, I built dashboards using Retools, do some data transformations and modelling via Databricks and dbt. Sometimes I helped with some ML tasks using Python and PySpark.
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Business Intelligence Analyst
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Elmich Joinstock Company
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2024 - May 2025
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                I provided end-to-end data solutions. From requirements gathering to actions. Python and Cloud Run for ACID pipelines.
                BigQuery and Power BI for actionable insights.
                And Capcut for some sorts of user guides! Yes, video editing too.
                </p>
              </div>

              {/* new experience block */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Business Intelligence Analyst
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  KPIM Joinstock Company
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sep 2023 - Mar 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Just a part-time job but I learnt a lot. I worked as a
                  Business Intelligence Analyst focusing on BI Tools, 
                  I was responsible for gathering requirements and data analysis along with generating reports.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
  <div className="right flex-1 flex items-start justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Business Analytics
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Hanoi University of Science and Technology
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021 - 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                HUST gave me a solid foundation in every aspect of data analysis. I appreciate every Mathematic courses that I have taken here. Yes, they're nightmareous even for an Ex - Math major like me but it help me anyway.
                </p>
              </div>

              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Mathematics Major
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Nguyen Hue High School for Gifted Students
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2018 - 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Three intensive years of mathematics specialization. This background provided me with strong analytical and problem-solving skills that I continue to use in data analytics.
                </p>
              </div>
              
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
