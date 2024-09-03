import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { getWorkshopById } from "../../../services/workshops";
import SessionsList from './SessionsList/SessionsList';
import AddSession from "./AddSession/AddSession"
import Details from "./Details/Details"


// props -> { id: 2 }
const WorkshopDetails = ({ id }) => {
    const [workshop, setWorkshop] = useState(null);

    useEffect(
        () => {
            const helper = async () => {
                const data = await getWorkshopById(id);
                setWorkshop(data);
            };

            helper();
        },
        [] // fetch only after first load
    );

    const { name, description, imageUrl, location: { address, city, state } = {} } = workshop || {};

    return (
        <>

        
            <div>
                <div>id = {id}</div>
                {
                    workshop !== null && (
                        // <WorkshopAllDetails {...workshop} />
                        <>
                            <h1>{name}</h1>
                            <hr />
                            <Image src={imageUrl} alt={name} fluid />
                            <div dangerouslySetInnerHTML={{ __html: description }}></div>
                            <div>{address}, {city}, {state}</div>
                        </>
                    )}
            </div>

            <div>
            <Link to="">List of sessions</Link>
            <Link to="add">Add a session</Link>
        </div>

        <div>
            <Routes>
                <Route element={<SessionsList id={id} />} path=""></Route>
                <Route element={<AddSession id={id} />} path="add"></Route>
            </Routes>
            </div>
        </>
    );
}

export default WorkshopDetails;