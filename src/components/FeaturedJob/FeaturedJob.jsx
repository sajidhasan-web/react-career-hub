import { GrLocation } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const FeaturedJob = ({job}) => {
     console.log(job);
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} =job
    return (
        <div className="space-y-3 border-2 p-10 rounded-2xl">
            <div >
                <img src={logo} alt="" />
            </div>
            <h4 className="text-2xl">{job_title}</h4>
            <p>{company_name}</p>
            <div className="flex gap-5">
               <p className="border-2 p-1 border-blue-600 rounded-lg">{remote_or_onsite}</p>
               <p className="border-2 p-1 border-blue-600 rounded-lg">{job_type}</p>
            </div>
            <div className="flex gap-5">
                <p className="flex items-center gap-2"><GrLocation /> {location}</p>
                <p className="flex items-center gap-2"><RiMoneyDollarCircleLine /> {salary}</p>
            </div>
            <button className="btn btn-primary text-white font-bold">View Details</button>
        </div>
    );
};

export default FeaturedJob;