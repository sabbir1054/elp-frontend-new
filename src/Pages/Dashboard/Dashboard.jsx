import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import style from "./Dashboard.module.css";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import TeacherDashboard from "./TeacherDashboard/TeacherDashboard";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [isStudent, setIsStudent] = useState(false);

  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => filterUser(data.role));
  }, []);

  const filterUser=(role) => {
    if (role === 'teacher') {
      setIsStudent(false);
    } else {
      setIsStudent(true);
    }
  }

  return (
    <div className={style.dashboard_wrapper}>
      {isStudent ? (
        <StudentDashboard></StudentDashboard>
      ) : (
        <TeacherDashboard></TeacherDashboard>
      )}

      {/* */}
    </div>
  );
};

export default Dashboard;
