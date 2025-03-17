import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Ownerlogin from "./components/Ownerlogin.component";
import Register from "./components/Ownerregister.component";
import Profile from "./components/profile.component";
import OwnerDashboard from "./Dashboard/OwnerDashboard"
import Buttons from "./StartingPage/Buttons";
import Navbar from "./Navbar";
import Managerlogin from "./components/Managerlogin";
import ManagerRegister from "./components/Managerregister";
import ManagerDashboard from "./Dashboard/ManagerDashboard";
import Receptionistlogin from "./components/Receptionistlogin";
import Receptionistregister from "./components/Receptionistregister";
import ReceptionistDashboard from "./Dashboard/ReceptionistDashboard";
import ListEmployeeComponent from "./BackendComponents/OwnerComponents/ListEmployeeComponent";
import CreateEmployeeComponent from "./BackendComponents/OwnerComponents/CreateEmployeeComponent";
import ViewEmployeeComponent from "./BackendComponents/OwnerComponents/ViewEmployeeComponent";
import ListInventoryReportsComponent from "./BackendComponents/OwnerComponents/ListInventoryReportsComponents";
import AddInventoryReportsComponents from "./BackendComponents/OwnerComponents/AddInventoryReportsComponents";
import ListRoomComponents from "./BackendComponents/OwnerComponents/ListRoomComponents";
import AddRoomComponents from "./BackendComponents/OwnerComponents/AddRoomComponent";
import ListReservationComponent from "./BackendComponents/OwnerComponents/ListReservationComponent";
import AddReservationComponents from "./BackendComponents/OwnerComponents/AddReservationComponents";
import ListSetRatesComponent from "./BackendComponents/OwnerComponents/ListSetRatesComponents";
import AddSetRateComponents from "./BackendComponents/OwnerComponents/AddSetRateComponents";
import ListGuestComponent from "./BackendComponents/OwnerComponents/ListGuestComponents";
import AddGuestComponents from "./BackendComponents/OwnerComponents/AddGuestComponents";
import MListEmployeeComponent from "./BackendComponents/ManagerComponents/MListEmployeeComponent";
import MCreateEmployeeComponent from "./BackendComponents/ManagerComponents/MCreateEmployeeComponent";
import MViewEmployeeComponent from "./BackendComponents/ManagerComponents/ViewEmployeeComponent";
import MListInventoryReportsComponent from "./BackendComponents/ManagerComponents/ListInventoryReportsComponents";
import MAddInventoryReportsComponents from "./BackendComponents/ManagerComponents/MAddInventoryReportsComponents";
import MListRoomComponents from "./BackendComponents/ManagerComponents/MListRoomComponents";
import MAddRoomComponents from "./BackendComponents/ManagerComponents/MAddRoomComponent";
 import MListReservationComponent from "./BackendComponents/ManagerComponents/MListReservationComponent";
 import MAddReservationComponents from "./BackendComponents/ManagerComponents/MAddReservationComponents";
import RListRoomComponents from "./BackendComponents/ReceptionistComponents/ListRoomComponents";
import RAddRoomComponents from "./BackendComponents/ReceptionistComponents/AddRoomComponent";
import RListReservationComponent from "./BackendComponents/ReceptionistComponents/ListReservationComponent";
import { RAddReservationComponents } from "./BackendComponents/ReceptionistComponents/AddReservationComponents";
import RListGuestComponent from "./BackendComponents/ReceptionistComponents/ListGuestComponents";
import RAddGuestComponents from "./BackendComponents/ReceptionistComponents/AddGuestComponents";
import Contact from "./FrontPages/Contact";
import Home from "./FrontPages/Home";
import RListPaymentComponents from "./BackendComponents/ReceptionistComponents/ListPayemntComponent";
import RAddPaymentComponents from "./BackendComponents/ReceptionistComponents/AddPaymentComponent";
import RListBillComponents from "./BackendComponents/ReceptionistComponents/RListBillComponents";
import CreateBillComponent from "./BackendComponents/ReceptionistComponents/CreateBillComponents";
import ViewBillComponent from "./BackendComponents/ReceptionistComponents/ViewBillComponents";
import Payment from "./OnlinePayment/Payment";




class App extends Component {
  render(){
    return(
      
          <Switch>
            <Route exact path="/navbar" component={Navbar} />
            <Route exact path='/' component={Home} />
            <Route exact path="/Button" component={Buttons} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/OwnerDashboard" component={OwnerDashboard} />
            <Route exact path="/ManagerDashboard" component={ManagerDashboard} />
            <Route exact path="/ReceptionistDashboard" component={ReceptionistDashboard} />
            <Route exact path={ "/ownerlogin"} component={Ownerlogin} />
            <Route exact path={ "/Managerlogin"} component={Managerlogin} />
            <Route exact path={ "/Receptionistlogin"} component={Receptionistlogin} />
            <Route exact path="/ownerregister" component={Register} />
            <Route exact path="/ManagerRegister" component={ManagerRegister} />
            <Route exact path="/Receptionistregister" component={Receptionistregister} />

           
            <Route exact path="/ListEmployeeComponent" component={ListEmployeeComponent} />
            <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
            <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
            <Route path = "/ListInventoryReportsComponent" component = {ListInventoryReportsComponent}/>
            <Route path = "/ListRoomComponent" component = {ListRoomComponents}/>
            <Route path = "/add-inventory" component = {AddInventoryReportsComponents}/>
            <Route path = "/updateinventory/:id" component = {AddInventoryReportsComponents}/>
            <Route path = "/updateroom/:id" component = {AddRoomComponents}/>
            <Route path = "/add-room" component = {AddRoomComponents}/>
            <Route path = "/ListReservationComponent" component = {ListReservationComponent}/>
            <Route path = "/add-reservation" component = {AddReservationComponents}/>
            <Route path = "/updatereservation/:id" component = {AddReservationComponents}/>
            <Route path = "/ListSetRatesComponent" component = {ListSetRatesComponent}/>
            <Route path = "/add-setrate" component = {AddSetRateComponents}/>
            <Route path = "/updatesetrate/:id" component = {AddSetRateComponents}/>
            <Route path = "/ListGuestComponent" component = {ListGuestComponent}/>
            <Route path = "/add-guest" component = {AddGuestComponents}/>
            <Route path = "/updateguest/:id" component = {AddGuestComponents}/>


            <Route exact path="/MListEmployeeComponent" component={MListEmployeeComponent} />
            <Route path = "/add-Memployee/:id" component = {MCreateEmployeeComponent}/>
            <Route path = "/view-Memployee/:id" component = {MViewEmployeeComponent}/>
            <Route exact path="/MListInventoryReportsComponent" component={MListInventoryReportsComponent} />
            <Route path = "/Madd-inventory" component = {MAddInventoryReportsComponents}/>
            <Route path = "/Mupdateinventory/:id" component = {MAddInventoryReportsComponents}/>
            <Route path = "/MListRoomComponents" component = {MListRoomComponents}/>
            <Route path = "/Madd-room" component = {MAddRoomComponents}/>
            <Route path = "/Mupdateroom/:id" component = {MAddRoomComponents}/>
             <Route path = "/MListReservationComponent" component = {MListReservationComponent}/> 
             <Route path = "/Madd-reservation" component = {MAddReservationComponents}/>
            <Route path = "/Mupdatereservation/:id" component = {MAddReservationComponents}/> 


            <Route path = "/RListRoomComponent" component = {RListRoomComponents}/>
            <Route path = "/Rupdateroom/:id" component = {RAddRoomComponents}/>
            <Route path = "/Radd-room" component = {RAddRoomComponents}/>
            <Route path = "/RListReservationComponent" component = {RListReservationComponent}/>
            <Route path = "/Radd-reservation" component = {RAddReservationComponents}/> 
             <Route path = "/Rupdatereservation/:id" component = {RAddReservationComponents}/>
             <Route path = "/RListGuestComponent" component = {RListGuestComponent}/>
             <Route path = "/Radd-guest" component = {RAddGuestComponents}/>
            <Route path = "/Rupdateguest/:id" component = {RAddGuestComponents}/>
        <Route path="/RListPaymentComponents" component={RListPaymentComponents} />
        <Route path="/Rupdatepayment/:id" component={RAddPaymentComponents} />
        <Route path="/Radd-payment" component={RAddPaymentComponents} />
        <Route exact path={["/RListBillComponents"]} component={RListBillComponents} />
        <Route path="/add-bill/:billNo" component={CreateBillComponent} />
        <Route path="/view-bill/:billNo" component={ViewBillComponent} />
        <Route exact path={["/pay"]} component={Payment} />
      
           
          </Switch>
    )
  }
}

export default App;
