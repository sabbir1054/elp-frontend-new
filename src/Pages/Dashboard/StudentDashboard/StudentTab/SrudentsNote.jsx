import React from 'react';
import { Accordion } from 'react-bootstrap';

const SrudentsNote = ({text}) => {
    return (
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5>{text}</h5> </Accordion.Header>
            <Accordion.Body>
                        <div className="btn btn-primary m-2 ">Chapter 01</div>
                        <div className="btn btn-primary m-2">Chapter 02</div>
                        <div className="btn btn-primary m-2">Chapter 03</div>
                        <div className="btn btn-primary m-2">Chapter 04</div>
                        <br />
                        <hr />
                        <span className='text-success fw-bold'>*Click for Download</span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default SrudentsNote;