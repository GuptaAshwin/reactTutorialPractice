import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { getSessions, vote as voteSvc } from "../../../../services/sessions";

const SessionsList = ({ id }) => {
    const [sessions, setSessions] = useState([]);

    // const { id } = useParams(); // { id: '2' };

    useEffect(
        () => {
            const helper = async () => {
                const data = await getSessions(id);
                setSessions(data);
            }

            helper();
        },
        []
    );

    const vote = async (sessionId, voteType) => {
        // alert(sessionId + ' ' + voteType);
        const updatedSession = await voteSvc(sessionId, voteType);
        // alert(updatedSession.name + ' ' + updatedSession.upvoteCount)

        // update an item in the array using map()
        const updatedSessions = sessions.map(s => s.id === sessionId ? updatedSession : s);
        setSessions(updatedSessions); // rest React takes care - state has been updated -> UI will be updated by React
    };

    return (
        <>
            <h1>List of Sessions</h1>
            <hr />
            {
                sessions.map(
                    session => (
                        <div key={session.id} className="my-3">
                            <Button size="sm" variant="danger" className="mx-2" onClick={(event) => vote(session.id, 'downvote')}>Vote down</Button>
                            <Badge className="bg-dark" style={{ width: 40 }}>{session.upvoteCount}</Badge>
                            <Button size="sm" variant="success" className="mx-2" onClick={(event) => vote(session.id, 'upvote')}>Vote up</Button>
                            {session.name}
                        </div>
                    )
                )
            }
        </>
    );
}

export default SessionsList;