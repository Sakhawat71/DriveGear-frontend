import { useLoaderData,  } from "react-router-dom";

const Details = () => {

    // const params = useParams();
    // const id = params.id;
    const data = useLoaderData();
    // console.log(id)
    console.log(data)



    return (
        <div className="min-h-screen">
            <h2>{data?.name}</h2>
        </div>
    );
};

export default Details;