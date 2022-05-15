import React from "react";
import { Col, Row } from "react-bootstrap";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import './HomeTabs.css'
import NavCard from "./NavCard";

const HomeTabs = () => {
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
    
    // tabData.primary.map((data) => {
    //     console.log(data.level);
    // });

  return (
    <>
      <Tabs
        defaultActiveKey="primary"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
        variant="pills"
      >
        <Tab eventKey="primary" title="Primary Level" className="text-white">
          <Row xs={1} md={3} className="g-4">
            {tabData.primary.map((data) => (
              <NavCard data={data}></NavCard>
            ))}
          </Row>
        </Tab>
        <Tab
          eventKey="secondary"
          title="Secondary Level "
          className="text-white"
        >
          <Row xs={1} md={3} className="g-4">
            {tabData.secondary.map((data) => (
              <NavCard data={data}></NavCard>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="contact" title="Higher Level" className="text-white">
          <Row xs={1} md={3} className="g-4">
            {tabData.higher.map((data) => (
              <NavCard data={data}></NavCard>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </>
  );
};

export default HomeTabs;
