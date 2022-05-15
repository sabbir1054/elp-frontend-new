import React from 'react';
import { Alert } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import StudentNav from '../../../Components/DashboardNav/StudentNav';
import auth from '../../../Firebase/Firebase.init';
import StudentTab from './StudentTab/StudentTab';

const StudentDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
    return (
      <div>
        <StudentNav></StudentNav>
        <section>
          <h4 className="text-center text-white py-4">
            Hi <span className="text-warning"> {user ? user.email : ""}</span>,
            Welcome to ELP student dashboard
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
              <StudentTab></StudentTab>
            </div>
          </div>
        </section>
      </div>
    );
};

export default StudentDashboard;