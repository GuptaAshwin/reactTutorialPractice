import WorkshopDetails from "../../../components/Workshops/WorkshopDetails/WorkshopDetails";

import { useParams } from 'react-router-dom';




const WorkshopDetailsPage = () => {

    // console.log(useParams()); // { id: "2" }

    const { id } = useParams();




    // +"2" -> 2 (string to number conversion)

    return (

        <WorkshopDetails id={+id} />

    );

}




export default WorkshopDetailsPage;