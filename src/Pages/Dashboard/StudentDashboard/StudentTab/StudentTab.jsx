import { Tab } from 'bootstrap';
import React from 'react';
import { Row, Tabs } from 'react-bootstrap';
import SrudentsNote from './SrudentsNote';
import './stab.css'
import StudentTabCard from './StudentTabCard';
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
            <Row xs={1} md={4} className="g-4">
              {/* {tabData.primary.map((data) => (
                <NavCard data={data}></NavCard>
              ))} */}
              <StudentTabCard></StudentTabCard>
              <StudentTabCard></StudentTabCard>
              <StudentTabCard></StudentTabCard>
              <StudentTabCard></StudentTabCard>
              <StudentTabCard></StudentTabCard>
            </Row>
          </Tab>
          <Tab
            eventKey="video"
            title="Video Content"
            // className={styles.nav_link}
          >
            <Row xs={1} md={2} className="g-4">
              {/* {tabData.secondary.map((data) => (
                <NavCard data={data}></NavCard>
              ))} */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/kWcS24iHeq8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/kWcS24iHeq8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/kWcS24iHeq8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
              <SrudentsNote text={'Bangla'}></SrudentsNote>
              <SrudentsNote text={'English'}></SrudentsNote>
              <SrudentsNote text={'Math'}></SrudentsNote>
              <SrudentsNote text={'ICT'}></SrudentsNote>
              <SrudentsNote text={'Islam'}></SrudentsNote>
              <SrudentsNote text={'Science'}></SrudentsNote>
              <SrudentsNote text={'Physics'}></SrudentsNote>
            </Row>
          </Tab>
        </Tabs>
      </>
    );
};

export default StudentTab;