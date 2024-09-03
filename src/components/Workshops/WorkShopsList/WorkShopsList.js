import { useEffect, useState } from 'react';
import { Alert, Button, Col, Row, Spinner } from 'react-bootstrap';
import Item from './Item/Item';
import { getWorkshops } from '../../../services/workshops';

// uuid -> unique id generator library

const WorkshopsList = () => {
    // const arr = useState(123);
    // console.log(arr[0]); // 123
    // console.log(arr[1]); // setter function

    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState([]);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1);

    useEffect(
        // side-effect -> we want to fetch workshops data from the backend
        () => {
            const helper = async () => {
                try {
                    const data = await getWorkshops(page);
                    // console.log(data);
                    setWorkshops(data);
                    setLoading(false);
                } catch (error) {
                    // console.log(error);
                    setError(error);
                    setLoading(false);
                }
            }

            helper();
        },
        // [ ] // empty array -> causes the effect to execute only AFTER first render
        [page] // execute AFTER first render + whenever page change
    );

    const previous = (event, x, y) => {
        console.log(x, y); // dummy arguments (just for seeing how to pass arguments to event handler)

        // alert('previous');

        if (page <= 1) {
            return;
        }

        // setPage(page - 1);
        setPage(p => p - 1); // when the new state depends on the current state, we use the function form of the setter
    };

    const next = (event) => {
        // alert('next');
        setPage(p => p + 1);
    };

    return (
        <div>
            <h1>List of workshops</h1>
            <hr />
            <div>
                <Button
                    variant="primary"
                    size="sm"
                    disabled={!(loading === false && error === null) || page === 1}
                    onClick={(event) => previous(event, 1, 2)}
                >
                    Previous
                </Button>
                <Button
                    variant="primary"
                    size="sm"
                    disabled={!(loading === false && error === null)}
                    onClick={next}
                >
                    Next
                </Button>
                <div>You are viewing page {page}</div>
            </div>
            {
                loading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )
            }
            {
                loading === false && error !== null && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                loading === false && error === null && (
                    <Row xs={1} md={3} lg={4}>
                        {
                            workshops.map(
                                (workshop, idx) => (
                                    <Col
                                        className="my-3 d-flex"
                                        key={workshop.id}
                                    >
                                        <Item {...workshop} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
            {
                /*
                {
                    [
                        <div key={workshops[0].id}>{workshops[0].name}</div>,
                        <div key={workshops[1].id}>{workshops[1].name}</div>,
                        <div>{workshops[2].name}</div>,
                        <div>{workshops[3].name}</div>,
                        ....
                    ]
                */
            }
        </div>
    );
}

export default WorkshopsList;