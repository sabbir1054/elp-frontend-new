import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import style from "./Dashboard.module.css";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import TeacherDashboard from "./TeacherDashboard/TeacherDashboard";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [isStudent, setIsStudent] = useState(false);
  const [userName, setUserName] = useState('');
 

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => filterUser(data));
  }, []);

  const filterUser = (data) => {
     setUserName(data.username)  
    
    if (data.role === 'teacher') {
      setIsStudent(false);
    } else if(data.role==='student'){
      setIsStudent(true);
    }
  }

  return (
    <div className={style.dashboard_wrapper}>
      {isStudent ? (
        <StudentDashboard name={userName}></StudentDashboard>
      ) : (
        <TeacherDashboard name={userName}></TeacherDashboard>
      )}

      {/* */}
    </div>
  );
};

export default Dashboard;
