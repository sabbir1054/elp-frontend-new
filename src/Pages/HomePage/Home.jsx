import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../../Components/Header/Header';
import HomeTabs from '../../Components/HomeTabs/HomeTabs';
import auth from '../../Firebase/Firebase.init';
import style from './Home.module.css'

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(`${user.emailVerified}`);
    console.log(user?user.emailVerified:'');
    return (
      <div className={style.home_wrapper}>
        <Header></Header>
       
        <div className="tabs pt-5">
          <Container>
            <Row>
              <Col sm={7}>
                <HomeTabs></HomeTabs>
              </Col>
              <Col sm={5}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Home;