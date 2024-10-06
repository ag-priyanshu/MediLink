import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';
import Card from './components/cards';
import Schemes from './components/schemes';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import tagSideImage from './assets/docOne.png';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <div id="header">
        <Navbar />
        <hr style={{ margin: '0 5%' }}></hr>

        <div id="tagContainer">
          <div>
            <div id="tagline">
              A Wealth Of Experience To <span id="typinganimation"> Heal And Help you .</span>
            </div>
            <div id="subTagline">
              Welcome to Myhealth, your go-to platform for hassle-free healthcare appointments. Instantly book
              appointments with trusted professionals, choose flexible scheduling options, and prioritize your health
              with ease. Experience seamless healthcare at your fingertips. Join us today!
            </div>
            <div id="launchButton">
              <Link to="Features" smooth={true} duration={800}>
                <Button
                  onClick={() => {
                    navigate('/userdashboard');
                  }}
                  className="lbutton"
                  sx={{ backgroundColor: '#03045e', width: '300px' }}
                  variant="contained"
                >
                  Make an appointment
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <img id="tagimage" className="rightAnimation" src={tagSideImage} alt="tagSideImage" />
          </div>
        </div>
      </div>

      <div>
        <Card />
      </div>

      <div>
        <Schemes />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;