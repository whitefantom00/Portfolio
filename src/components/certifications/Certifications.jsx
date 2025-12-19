import React from "react";
import {
  SiCoursera,
  SiGoogle,
  SiHackerrank,
  SiLinkedin,
  SiDatabricks,
  SiDatacamp,
} from "react-icons/si";

const certs = [
  { id: 1, title: "Introduction to Data Engineering on Google Cloud", issuer: "Google", link: "https://www.skills.google/public_profiles/1418d45d-b914-497a-81fb-fbedd9cc1dd5/badges/14340458?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", Icon: SiGoogle },
  { id: 2, title: "Foundations of Data Science", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/verify/UEHEYYSKJEH5", Icon: SiGoogle },
  { id: 3, title: "Business Analysis Foundations", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/dbcb58618b41f703eba51832cce09dd390700a32d5796db058cb375f368a1817?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLEYWqMETS6a2iFNMJisy5A%3D%3D", Icon: SiLinkedin },
  { id: 4, title: "Databricks Fundamentals Accreditation", issuer: "Databricks", link: "https://www.linkedin.com/in/vu-kim-a660b2280/details/certifications/1745908204576/single-media-viewer/?profileId=ACoAAERbjm4BPENf5c8ymn9pU3PZEBMvgddxI-0", Icon: SiDatabricks },
  { id: 5, title: "SQL (Advanced) Certificate", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/2a9e13ad970c", Icon: SiHackerrank },
  { id: 6, title: "Intermediate dbt", issuer: "HackerRank", link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/acd1792d6cb2a984bdaf787d7283f48b98250faa?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink", Icon: SiDatacamp }
];

const Certifications = () => {
  return (
    <div id="certifications" className="container m-auto mt-16">
      {/* heading - reuse Resume heading styles */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">Certifications</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div className="card-wrapper w-[90%] sm:w-full mt-5 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          {certs.map((c) => (
            <div key={c.id} data-aos="zoom-in" className="flex items-center gap-4 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-yellow-500 border border-yellow-200">
                <c.Icon size={24} />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-700">{c.title}</h5>
                <p className="text-sm text-gray-500">{c.issuer}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-medium underline text-sm mt-1 inline-block">View credential</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
