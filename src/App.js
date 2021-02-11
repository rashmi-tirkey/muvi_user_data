import React from 'react';
import addData from "./components/addData"
import Datalist from "./components/Datalist"
import EditUser from "./components/EditUser"
import { BrowserRouter as Router , Route  } from 'react-router-dom';
function App() {
  return(
    <div className="container">
    <Router>
      <div className="parent-wrapper">
        <Route path ="/" exact component={addData}/>
        <Route path ="/datalist" exact component={Datalist}/>
        <Route path ="/edituser" exact component={EditUser}/>                    
       </div>
    </Router>  
    </div>              
  );
}

export default App;

