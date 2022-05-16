import React from 'react';
import { Alert } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import TeacherNav from '../../../Components/DashboardNav/TeacherNav';
import Header from '../../../Components/Header/Header';
import auth from '../../../Firebase/Firebase.init';
import TeacherTab from './TeacherTab/TeacherTab';

const TeacherDashboard = ({name}) => {
  const [user, loading, error] = useAuthState(auth);
   const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    return (
      <div>
        <TeacherNav></TeacherNav>
        <section>
          <h4 className="text-center text-white py-4">
            Hi <span className="text-warning"> {name}</span>, Welcome to ELP
            Teacher dashboard
          </h4>
          <div className="d-flex justify-content-center">
            {user ? (
              user.emailVerified ? (
                ""
              ) : (
                <Alert variant="danger" className="w-50 text-center">
                  {" "}
                  "Please Verify Your account .{" "}
                  <span onClick={sendEmailVerification} className='text-decoration-underline'>
                    If you not get email click here
                  </span>
                </Alert>
              )
            ) : (
              ""
            )}
          </div>
          <div className="container">
            <div>
              <TeacherTab></TeacherTab>
            </div>
          </div>
        </section>
      </div>
    );
};

export default TeacherDashboard;