import { Tab } from 'bootstrap';
import React from 'react';
import { Row, Tabs } from 'react-bootstrap';
import './stab.css'
const StudentTab = () => {
    return (
      <>
        <Tabs
          defaultActiveKey="books"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          variant="tabs"
        >
          <Tab
            eventKey="books"
            title="NCTB Text Books PDF"
            className="nav-link"

          >
            <Row xs={1} md={3} className="g-4">
              {/* {tabData.primary.map((data) => (
                <NavCard data={data}></NavCard>
              ))} */}
            </Row>
          </Tab>
          <Tab
            eventKey="video"
            title="Video Content"
            // className={styles.nav_link}
          >
            <Row xs={1} md={3} className="g-4">
              {/* {tabData.secondary.map((data) => (
                <NavCard data={data}></NavCard>
              ))} */}
            </Row>
          </Tab>
          <Tab
            eventKey="note"
            title="Best Students Notes"
            // className={styles.nav_link}
          >
            <Row xs={1} md={3} className="g-4">
             {/*  {tabData.higher.map((data) => (
                <NavCard data={data}></NavCard>
              ))} */}
            </Row>
          </Tab>
        </Tabs>
      </>
    );
};

export default StudentTab;