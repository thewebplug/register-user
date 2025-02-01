import logo from "./logo.svg";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import IDCardGenerator from "./pages/Home";
import IDCardDisplay from "./pages/User";
import AdminLogin from "./pages/admin/Login";
import AdminUsersList from "./pages/admin/Users";
// import FingerprintScanner from "./pages/Finger";
import NameRegistrationForm from "./pages/NameRegistration";
import PhotoUploadForm from "./pages/PhotoUpload";
import SearchAndUpdateNameRegistration from "./pages/SearchAndUpdateNameRegistration";
import UpdateNameRegistration from "./pages/admin/UpdateNameRegistration";
import PhotoUpdate from "./pages/admin/PhotoUpdate";
import User from "./pages/admin/User";
import Finger from "./pages/Finger";
import FingerPrintUpdate from "./pages/admin/FingerPrintUpdate";
import AdminOutlet from "./pages/admin/Outlet";



function App() {

  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref}>
      <Routes>
{/*       
        <Route path="/" 
        element={<IDCardGenerator />}
         /> */}
        <Route path="/update-user" 
        element={<SearchAndUpdateNameRegistration />}
         />
        <Route path="/create-user" 
        element={<NameRegistrationForm />}
         />
        <Route path="/user/:id" 
        element={<IDCardDisplay />}
         />
        <Route path="/admin/login" 
        element={<AdminLogin />}
         />
        <Route path="/" 
        element={<AdminUsersList />}
         />
        <Route path="/admin/users/image/:id" 
        element={<PhotoUpdate />}
         />
       <Route path="/admin" element={<AdminOutlet />}>
        <Route path="users/fingerprint/:id" element={<FingerPrintUpdate />} />
      </Route>

      <Route path="/admin/users/:id" 
        element={<UpdateNameRegistration />}
         />
      
        <Route path="/admin/view-user/:id" 
        element={<User />}
         />
        <Route path="/finger" 
        element={<Finger />}
         />
        <Route path="/update-image" 
        element={<PhotoUploadForm />}
         />
        <Route path="/update-finger-print" 
        element={<Finger />}
         />
       
      </Routes>
     
  );
}

export default App;
