import React from 'react';
import { Alert } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import TeacherNav from '../../../Components/DashboardNav/TeacherNav';
import Header from '../../../Components/Header/Header';
import auth from '../../../Firebase/Firebase.init';
import TeacherTab from './TeacherTab/TeacherTab';

const TeacherDashboard = () => {
      const [user, loading, error] = useAuthState(auth);
    return (
      <div>
        <TeacherNav></TeacherNav>
        <section>
          <h4 className="text-center text-white py-4">
            Hi <span className="text-warning"> {user ? user.email : ""}</span>,
            Welcome to ELP Teacher dashboard
          </h4>
          <div className="d-flex justify-content-center">
            {user ? (
              user.emailVerified ? (
                ""
              ) : (
                <Alert variant="danger" className="w-50 text-center">
                  {" "}
                  "Please Verify Your account . Check your email address"
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