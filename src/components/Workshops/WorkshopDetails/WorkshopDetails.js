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
        <Details {...workshop} />

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