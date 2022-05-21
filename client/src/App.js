import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
//import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
//import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import StudentDashboard from "./components/screens/StudentDashboard";
import HODDashboard from "./components/Dashboards/HODDashboard";
import TeacherDashboard from "./components/Dashboards/TeacherDashboard";
import AdvisorDashboard from "./components/Dashboards/AdvisorDashboard";
import CoordinatorDashboard from "./components/Dashboards/CoordinatorDashboard";
import VCDashboard from "./components/Dashboards/VCDashboard";
import DeenDashboard from "./components/Dashboards/DeenDashboard";

import HomeScreen from "./components/screens/HomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import Application from "./DPages/Application";
import Attendence1 from "./DPages/Attendence1";
import Attendence2 from "./DPages/Attendence2";
import PendingRequests from "./RequestsPages/PendingRequests";
import AcceptedRequests from "./RequestsPages/AcceptedRequests";
import RejectedRequests from "./RequestsPages/RejectedRequests";



const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" render={() => <LoginScreen reqRoute="/api/auth/login" redirectRoute='/student_dashboard' registerRoute='/register' />} />
          <Route exact path="/register" render={() => <RegisterScreen reqRoute="/api/auth/register" redirectRoute='/student_dashboard' user_type='student' loginRoute='/login' />} />
          <Route exact path="/forgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} />

          <Route exact path="/HODlogin" render={() => <LoginScreen reqRoute="/api/auth/hod/login" redirectRoute='/hod_dashboard' registerRoute='/HODregister' />} />
          <Route exact path="/HODregister" render={() => <RegisterScreen reqRoute="/api/auth//hod/register" redirectRoute='/hod_dashboard' user_type='hod' loginRoute='/HODlogin' />} /> 
          <Route exact path="/HODforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} />

          <Route exact path="/Coordinatorlogin" render={() => <LoginScreen reqRoute="/api/auth/coordinator/login" redirectRoute='/coordinator_dashboard' registerRoute='/Coordinatorregister'/>} />
          <Route exact path="/Coordinatorregister" render={() => <RegisterScreen reqRoute="/api/auth/coordinator/register" redirectRoute='/coordinator_dashboard' user_type='coordinator' loginRoute='/Coordinatorlogin'/>} /> 
          <Route exact path="/Coordinatorforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} />

          <Route exact path="/Advisorlogin" render={() => <LoginScreen reqRoute="/api/auth/advisor/login" redirectRoute='/advisor_dashboard' registerRoute='/Advisorregister' />} />
          <Route exact path="/Advisorregister" render={() => <RegisterScreen reqRoute="/api/auth/advisor/register" redirectRoute='/advisor_dashboard' user_type='advisor' loginRoute='/Advisorlogin'/>} />
          <Route exact path="/Advisorforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} />

          <Route exact path="/Teacherlogin" render={() => <LoginScreen reqRoute="/api/auth/teacher/login" redirectRoute='/teacher_dashboard' registerRoute='/Teacherregister' />} />
          <Route exact path="/Teacherregister" render={() => <RegisterScreen reqRoute="/api/auth/teacher/register" redirectRoute='/teacher_dashboard' user_type='teacher' loginRoute='/Teacherlogin'/>} />
          <Route exact path="/Teacherforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} /> 
          
          <Route exact path="/VClogin" render={() => <LoginScreen reqRoute="/api/auth/vc/login" redirectRoute='/VC_dashboard' registerRoute='/VCregister' />} />
          <Route exact path="/VCregister" render={() => <RegisterScreen reqRoute="/api/auth/vc/register" redirectRoute='/VC_dashboard' user_type='VC' loginRoute='/VClogin'/>} />
          <Route exact path="/VCforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} /> 

          <Route exact path="/Deenlogin" render={() => <LoginScreen reqRoute="/api/auth/deen/login" redirectRoute='/Deen_dashboard' registerRoute='/Deenregister' />} />
          <Route exact path="/Deenregister" render={() => <RegisterScreen reqRoute="/api/auth/deen/register" redirectRoute='/Deen_dashboard' user_type='Deen' loginRoute='/Deenlogin'/>} />
          <Route exact path="/Deenforgotpassword" render={() => <ForgotPasswordScreen reqRoute="/api/auth/forgotpassword" />} /> 

          <Route path="/application" component={Application} request_type='Application_Form' />
          <Route path="/attendance1" component={Attendence1} request_type='Attendence1_Form'/>
          <Route path="/attendance2" component={Attendence2} request_type='Attendence2_Form'/>

          <Route exact path="/pendingrequest" render={() => <PendingRequests/>} />
          <Route exact path="/acceptedrequest" render={() => <AcceptedRequests/>} />
          <Route exact path="/rejectedrequest" render={() => <RejectedRequests/>} />


          {/* <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          /> */}

          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
           <Route
            exact
            path="/student_dashboard"
            component={StudentDashboard}
          />

           <Route
            exact
            path="/hod_dashboard"
            component={HODDashboard}
          />

          <Route
            exact
            path="/teacher_dashboard"
            component={TeacherDashboard}
          />

          <Route
            exact
            path="/advisor_dashboard"
            component={AdvisorDashboard}
          />

          <Route
            exact
            path="/coordinator_dashboard"
            component={CoordinatorDashboard}
          />

          <Route
            exact
            path="/VC_dashboard"
            component={VCDashboard}
          />

          <Route
            exact
            path="/Deen_dashboard"
            component={DeenDashboard}
          />
        
        </Switch>
      </div>
    </Router>
  );
};

export default App;
