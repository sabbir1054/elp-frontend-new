import { Tab } from 'bootstrap';
import React from 'react';
import { Card, Col, Row, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../TeacherDashboard.module.css'

const TeacherTab = () => {
      const tabData = {
        primary: [
          {
            level: "1",
            link: "primary/1",
          },
          {
            level: "2",
            link: "primary/2",
          },
          {
            level: "3",
            link: "primary/3",
          },
          {
            level: "4",
            link: "primary/4",
          },
          {
            level: "5",
            link: "primary/5",
          },
        ],
        secondary: [
          {
            level: "6",
            link: "primary/6",
          },
          {
            level: "7",
            link: "primary/7",
          },
          {
            level: "8",
            link: "primary/8",
          },
          {
            level: "9",
            link: "primary/9",
          },
          {
            level: "10",
            link: "primary/10",
          },
          {
            level: "SSC",
            link: "primary/ssc",
          },
        ],
        higher: [
          {
            level: "HSC 1st ",
            link: "primary/1",
          },
          {
            level: "HSC 2nd",
            link: "primary/12",
          },
          {
            level: "HSC ",
            link: "primary/hsc",
          },
        ],
      };
    
    return (
      <>
        <Tabs
          defaultActiveKey="class"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          variant="tabs"
        >
          <Tab
            eventKey="class"
            title="Choose Your Class"
            className="text-white"
          >
            <Row xs={1} md={3} className="g-4">
              {tabData.secondary.map((data) => (
                <Col>
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white"
                  >
                    <Card className={styles.background}>
                      <Card.Body>
                        <Card.Title>Class</Card.Title>
                        <Card.Text>
                          <h1 className="text-center">{data.level}</h1>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-center">
                        <div className="btn btn-primary py-1 mx-2">Admitted Student</div>
                        <div className="btn btn-primary py-1">Make Result</div>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </>
    );
};

export default TeacherTab;