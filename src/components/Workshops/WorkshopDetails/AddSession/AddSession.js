import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addSession as addSessionSvc } from '../../../../services/sessions';

const AddSession = ({ id }) => {
    const [sequenceId, setSequenceId] = useState('123');
    const [name, setName] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('Basic');
    const [abstract, setAbstract] = useState('');

    // useForm() -> { register: function() {}, formState: { errors: { ... } }, ...}
    const { register, formState: { errors }, getValues } = useForm({
        mode: 'all', // validates on onChange, onSubmit, onBlur
        defaultValues: {
            sequenceId: '125'
        }
    });

    // Use useFormState() for form validation status

    console.log('errors = ', errors);

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

    // cusorm validator
    function validateLevelWithDuration() {
        const level = getValues('level');
        const duration = getValues('duration');

        if (level === 'Basic' && duration < 1) {
            return 'Duration should be at least 1 hour for Basic session'
        }

        if (level === 'Intermediate' && duration < 2) {
            return 'Duration should be at least 2 hours for Intermediate session'
        }

        if (level === 'Advanced' && duration < 3) {
            return 'Duration should be at least 3 hours for Advanced session'
        }

        return null;
    }

    return (
        <div>
            <h1>Add a session</h1>
            <hr />
            <div>
                <Form onSubmit={addSession}>
                    <Form.Group className="mb-3" controlId="sequenceId">
                        <Form.Label>Sequence ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Sequence ID"
                            {...register('sequenceId', { required: 'This field is required', min: 1 })} // register() gives an object with ref and other props
                        />
                        {
                            errors.sequenceId?.type === 'required' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>{errors.sequenceId?.message}</div>
                            )
                        }
                        {
                            errors.sequenceId?.type === 'min' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>Minimum value should be 1</div>
                            )
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Using JSX"
                            {...register('name', { required: 'This field is required', pattern: /^[A-Za-z ]+$/ })} // register() gives an object with ref and other props
                        />
                        {
                            errors.name?.type === 'required' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>{errors.name?.message}</div>
                            )
                        }
                        {
                            errors.name?.type === 'pattern' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>Does not seem to be a valid name (use only letters)</div>
                            )
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="speaker">
                        <Form.Label>Speaker</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John Doe"
                            {...register('speaker')}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="1.5"
                            {...register('duration', { validate: validateLevelWithDuration })}
                        />
                        {
                            errors.duration?.type === 'validate' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>{errors.duration?.message}</div>
                            )
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="level">
                        <Form.Label>Level</Form.Label>
                        <Form.Select
                            aria-label="Level of the session"
                            {...register('level', { validate: validateLevelWithDuration })}
                        >
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </Form.Select>
                        {
                            errors.level?.type === 'validate' && (
                                <div className="text-danger" style={{ fontSize: '0.85em' }}>{errors.level?.message}</div>
                            )
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="abstract">
                        <Form.Label>Abstract</Form.Label>
                        <Form.Control
                            as="textarea"
                            {...register('abstract')}
                        />
                    </Form.Group>

                    <Button variant="primary" size="sm" type="submit">Add session</Button>
                </Form>
            </div>
        </div>git add .
    );
}

export default AddSession;