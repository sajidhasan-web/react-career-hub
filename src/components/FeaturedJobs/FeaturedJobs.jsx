import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeaturedJob from "../FeaturedJob/FeaturedJob";



const FeaturedJobs = () => {


    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data=>setJobs(data));
    },[])

    const title = 'Featured Jobs'
    const description = 'Looking to take your career to new heights in the dynamic world of technology?'

    return (
        <div>          
             <SectionTitle title={title} description={description}></SectionTitle>
             
             <div className="grid md:grid-cols-2 gap-4">
                {
                    jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
             </div>
        </div>
    );
};

export default FeaturedJobs;