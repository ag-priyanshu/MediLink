import "./admindashboard.css";
import logo from "./assets/logo.png";
import PieChartIcon from "@mui/icons-material/PieChart";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Sidenavbar from "./components/sidenavbar";
import { useEffect, useState } from "react";
import AppointmentTables from "./components/appointments";
import Applydoctor from "./components/applydoctor";
import Clienthome from "./components/clienthome";
import { useNavigate } from "react-router-dom";

function Userdashboard() {
  const [activeComponent, setActiveComponent] = useState("home");

  const [appointments, setAppointments] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [catagary, setCatagary] = useState("");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const saveAppointment = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("Please login to book an appointment");
      return;
    }
    if (!name || !phone || !address || !date || !description || !catagary) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/appointments/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            phone,
            address,
            date,
            description,
            catagary,
          }),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointments = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("Please login to view appointments");
      return;
    }

    try {
      const response = await fetch( "http://localhost:3000/api/appointments/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);


  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div id="adminBlock">
        <div id="sidePannel">
          <div id="logo">
            <div>
              <img
                onClick={() => {
                  navigate("/");
                }}
                style={{ height: "40px" }}
                src={logo}
              ></img>
            </div>
          </div>
          <div id="sidePannelDashboardText">
            <div>
              <PieChartIcon sx={{ color: "white" }}></PieChartIcon>
            </div>
            <div style={{ color: "white" }} className="text">
              DASHBOARD
            </div>
          </div>
          <div id="pannelSection">
            <div className="pannelSubSection">
              <div>
                <HomeIcon sx={{ color: "grey" }}></HomeIcon>
              </div>
              <div
                onClick={() => {
                  handleButtonClick("home");
                }}
                className="pannelSectionText"
              >
                Home
              </div>
            </div>

            <div className="pannelSubSection">
              <div>
                <FormatListBulletedIcon
                  sx={{ color: "grey" }}
                ></FormatListBulletedIcon>
              </div>
              <div
                onClick={() => {
                  handleButtonClick("appointments");
                }}
                className="pannelSectionText"
              >
                Appointments
              </div>
            </div>

            <div className="pannelSubSection">
              <div>
                <FormatListBulletedIcon
                  sx={{ color: "grey" }}
                ></FormatListBulletedIcon>
              </div>
              <div
                onClick={() => {
                  handleButtonClick("applydoctor");
                }}
                className="pannelSectionText"
              >
                Apply Doctor
              </div>
            </div>

            <div className="pannelSubSection">
              <div>
                <ExitToAppIcon sx={{ color: "grey" }}></ExitToAppIcon>
              </div>
              <div onClick={logout} className="pannelSectionText">
                Sign out
              </div>
            </div>
          </div>
        </div>
        <div id="viewPannel">
          <div id="sideNavbar">
            <Sidenavbar></Sidenavbar>
          </div>
          <div id="mainPannel">
            {/* <Product></Product> */}

            <div className="mainTitle">
              {activeComponent === "home" && (
                <div className="">
                  <div className="">Book Appointment</div>
                  {/* // create a form to book an appointment */}
                  <br />
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      defaultValue={name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      defaultValue={phone}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      defaultValue={address}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter Date"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      defaultValue={date}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Description"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      defaultValue={description}
                    />
                  </div>
                  <div className="form-group">
                    <label>Catagary</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setCatagary(e.target.value);
                      }}
                    >
                      <option value="Consultation">Consultation</option>
                      <option value="Treatment">Treatment</option>
                      <option value="Checkup">Checkup</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    onClick={saveAppointment}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              )}
              {activeComponent === "appointments" && "Appointment requests"}
              {activeComponent === "profile" && (
                <div className="profileHeading">
                  <div className="profileHeadingText">Manage Profile</div>
                </div>
              )}
            </div>
            <div className="mainContainer">
              {activeComponent === "home" && (
                <div>
                  {" "}
                  <Clienthome></Clienthome>{" "}
                </div>
              )}
              {activeComponent === "appointments" && (
                <AppointmentTables></AppointmentTables>
              )}
              {activeComponent === "applydoctor" && <Applydoctor></Applydoctor>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userdashboard;
