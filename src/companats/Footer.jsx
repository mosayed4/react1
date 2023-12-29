import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import img1 from "./../img/Courselimg3/1.png"
import img2 from "./../img/Courselimg3/2r.png"
import img3 from "./../img/Courselimg3/3.png"
import img4 from "./../img/Courselimg3/4.png"
import img5 from "./../img/Courselimg3/5.png"



import "./../style/Footer.css";

function Footer() {
  return (
    <div className="Footer">

      <div className="Footer-data">


        <div className="Footer-data-1">
          <h4>Contact Info</h4>

          <p>
            <CiLocationOn />
            123 Street, Old Trafford, NewYork, USA
          </p>

          <p>
            <CiMail />
            info@sitename.com
          </p>

          <p>
            <IoIosPhonePortrait />
            + 457 789 789 65
          </p>

          <div className="social-media">
                <div className="social1">
                <LuFacebook />

                </div>
                <div className="social2">
                <FaTwitter />


                </div>
                <div className="social3">
                <BsTwitterX />


                </div>
                <div className="social4">
                <CgMail />


                </div>
                <div className="social5">
                <FaInstagram />

                </div>

          </div>
        </div>


        <div className="Footer-data-2">
            <h4>Useful Links</h4>
                <p>About Us</p>
                <p>FAQ</p>
                <p>Location</p>
                <p>Affiliates</p>
                <p>Contact</p>

        </div>


        <div className="Footer-data-3">
            <h4>My Account</h4>

           <p>My Account</p> 
            <p>Discount</p>
           <p>Returns</p> 
           <p>Orders History</p> 
           <p>Order Tracking</p> 

        </div>



        <div className="Footer-data-4">
        <h4>Subscribe Our Newsletter</h4>
        <p>
        If you want to get an email from us every time we have a new special offer, then sign up here!
        </p>

        <div className="input-data">
        <input type="email" placeholder="Enter Email Address"/>
            <div className="input-icon">
            <GoMail />


            </div>
        </div>    

        </div>


      </div>
      <hr></hr>
      <div className="copyRight">
        <h6>© 2023 All Rights for  Mohamed Sayed </h6>
        <div className="payment">
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
          <img src={img4} alt=""/>
          <img src={img5} alt=""/>
        </div>
      </div>


    </div>
  );
}

export default Footer;
