import Age from "./Age";
import Name from "./Name";
import DOB from "./DOB";


const Page = () => {
    return (
        <div className="page">
            <Name/>
            <Age/>
            <DOB/>
        </div>
    );
};

export default Page;