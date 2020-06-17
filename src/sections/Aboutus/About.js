import React, { Component } from "react";
import "../../app/styles.css";
export default class About extends Component {
  render() {
    return <div className="row">
      <div className="col-md-12 text-center">
        <h1 className="h1">OUR BUSINESS</h1>
        <h2 className="h2">Henna Powder Suppliers & Exporters in India</h2>
        <div className="line"></div>
        <p className="p" style={{padding:"5px 7px"}}>Mr. Suraj Mal Parihar started our business in 1980 as a Mehandi Powder Udyog at Sojat City, the only wholesale market of henna in India.</p>
        <p className="p">The CEO of the company joined him with the foundation of Natural Mahendi Powder Udyog in 2012. He is highly qualified and expert in manufacturing best quality henna products. He has invented some new henna colors and herbal mixers with his expertise.</p>
        <p className="p" style={{padding:"5px 7px"}}>He has been handling Manufacturing Department and Management of our organization very effectively. Mr. Kishore Parihar (Six Sigma Black Belt Certified) is assisting him as Deputy Manager and handling Marketing Department successfully. Natural Mahendi Powder Udyog is known for its teamwork and transparency in the organization.</p>
      </div>
      <div className="col-md-6 col-sm-12">
        <h1 className="h1">WHY CHOOSE US</h1>
        <div className="line"></div>
        <p className="p" style={{padding:"5px 10px"}}>
          We are the Best Organic Henna Powder Suppliers in India which has 100% natural henna, mixed only with the finest and freshest henna power. Natural henna is a beautiful, painless form of body art full of rich tradition in various cultures all over the world. Henna (also known as mehndi) is produced from the leaves of the “henna plant”. The leaves contain a red dye called ‘Lawsone’, which essentially leaves the radiant red stain on the skin.</p>
        <p className="p">Once the leaves are obtained they are crushed into fine powder, the powder is sifted and then mixed with a variety of ingredients such as essential oils. What is the best part of the henna, you ask? Natural henna is 100 % safe and temporary! As your skin exfoliates, the henna stain wears off, allowing you to get something new and different each time you get adorned.We also provide the BAQ Henna, Henna for Eyebrow, Organic Henna Powder, Spice, Herbal Products and many more are there...</p>
      </div>
      <div className="col-md-6 col-sm-12">
        <img src="../../../images/bg.jpg" alt="" />
      </div>
    </div>
  }
}