import SectionTitle from "../SectionTitle/SectionTitle";


const CategoryList = () => {
    const title = 'Job Category List'
    const description ='Explore thousands of job opportunities with all the information you need. Its your future'
    return (
        <div>
            <SectionTitle title={title} description={description}></SectionTitle>
        </div>
    );
};

export default CategoryList;