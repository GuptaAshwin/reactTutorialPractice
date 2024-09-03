
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { addSession as addSessionSvc } from '../../../../services/sessions';

const AddSession = ({ id }) => {

    const [sequenceId, setSequenceId] = useState('111');
    const [name, setName] = useState('Ashwin');
    const [speaker, setSpeaker] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('Basic');
    const [abstract, setAbstract] = useState('');

    async function addSession(event) {
        event.preventDefault();

        const session = {
            workshopId: +id,
            sequenceId: +sequenceId,
            // name: name
            name,
            speaker,
            duration: +duration,
            level,
            abstract,
            upvoteCount: 0
        };

        console.log(session);

        const addedSession = await addSessionSvc(session);
        alert('Added a new session with id = ' + addedSession.id);
    }

  return (
      <div>
          <h1>Add a session</h1>
          <hr />
          <div>
          <Form onSubmit={addSession}>
          <Form.Group className="mb-3" controlId="sequenceId">
                <Form.Label>Sequence ID</Form.Label>
                <Form.Control type="number" placeholder="Sequence ID" value={sequenceId}
                    onChange={(event) => setSequenceId(event.target.value)}
                />
            </Form.Group>

          <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Using JSX"  value={name}
              onChange={(event) => setName(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="speaker">
              <Form.Label>Speaker</Form.Label>
              <Form.Control type="text" placeholder="John Doe"  value={speaker}
              onChange={(event) => setSpeaker(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" placeholder="0.5"  value={duration}
              onChange={(event) => setDuration(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="level">
              <Form.Label>Level</Form.Label>
              <Form.Select aria-label="Level of the session"  value={level}
              onChange={(event) => setLevel(event.target.value)}>
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="abstract">
              <Form.Label>Abstract</Form.Label>
              <Form.Control as="textarea"  value={abstract}
              onChange={(event) => setAbstract(event.target.value)}/>
          </Form.Group>

          <Button variant="primary" size="sm" type='submit'>Add session</Button>
      </Form>
          </div>
      </div>
  );
}

export default AddSession;