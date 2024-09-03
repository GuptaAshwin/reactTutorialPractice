import { Button, Form } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { addSession as addSessionSvc } from '../../../../services/sessions';

const AddSession = ({id}) => {

  const sequenceIdRef = useRef(null); // { current: null } -> { current: domNodeReference }
  const nameRef = useRef(null);
  const speakerRef = useRef(null);
  const durationRef = useRef(null);
  const levelRef = useRef(null);
  const abstractRef = useRef(null);

  const [sequenceIdError, setSequenceIdError] = useState('');

  function validateSequenceId() {
      const sequenceId = sequenceIdRef.current.value;

      if (sequenceId.trim() === '') {
          setSequenceIdError('Sequence ID is required')
      } else {
          setSequenceIdError('');
      }
  }

  const addSession = async(event) => {
    event.preventDefault();

    const session = {
        workshopId: +id,
        sequenceId: +sequenceIdRef.current.value,
        name: nameRef.current.value,
        speaker: speakerRef.current.value,
        duration: +durationRef.current.value,
        level: levelRef.current.value,
        abstract: abstractRef.current.value,
        upvoteCount: 0
    };

    validateSequenceId();

    console.log(session);

    await addSessionSvc(session);
};

  return (
      <div>
          <h1>Add a session</h1>
          <hr />
          <div>
          <Form onSubmit={addSession}>
          <Form.Group className="mb-3" controlId="sequenceId">
              <Form.Label>Sequence ID</Form.Label>
              <Form.Control type="number" placeholder="Sequence ID" ref={sequenceIdRef}/>
              <div className="text-danger" style={{ fontSize: '12px' }}>{sequenceIdError}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Using JSX"  ref={nameRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="speaker">
              <Form.Label>Speaker</Form.Label>
              <Form.Control type="text" placeholder="John Doe" ref={speakerRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" placeholder="0.5" ref={durationRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="level">
              <Form.Label>Level</Form.Label>
              <Form.Select aria-label="Level of the session" ref={levelRef} >
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="abstract">
              <Form.Label>Abstract</Form.Label>
              <Form.Control as="textarea"  ref={abstractRef}/>
          </Form.Group>

          <Button type="submit" variant="primary" size="sm" >Add session</Button>
      </Form>
          </div>
      </div>
  );
}

export default AddSession;