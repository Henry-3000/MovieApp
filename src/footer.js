import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import './foot.css'

export default function Footer() {
  return (
  <>
    <div class="container mt-4">
        <footer className="d-flex flex-wrap justify-content-between align-items-center  border-top">
        <ul className="nav col-md-12 justify-content-center list-unstyled d-flex mt-4">
            <li className="ms-3"><span class="btn text-black" href=""><FaFacebookF/></span></li>
            <li className="ms-3"><span class="btn text-black" href=""><FaInstagram/></span></li>
            <li className="ms-3"><span class="btn text-black" href=""><FaTwitter/></span></li>
            <li className="ms-3"><span class="btn text-black" href=""><FaYoutube/></span></li>
          </ul>
        </footer>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="nav col-md-12 justify-content-center d-flex align-items-center">
              <span className="ms-4 btn text-black">Conditions Of Use</span>
              <span className="ms-4 btn text-black">Privacy & Use</span>
              <span className="ms-4 btn text-black">Press Room</span>
          </div>
        </div>
        <div className='justify-content-center d-flex align-items-center mt-4'>
          <span className="mb-3 mb-md-0 text-black">&copy; 2023 MovieApp by Henry3000</span>
        </div>
    </div>
  </>
  );
}