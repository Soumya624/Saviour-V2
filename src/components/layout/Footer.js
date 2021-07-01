import React, { PureComponent } from 'react'
import SimpleReactFooter from "simple-react-footer";
import logo from './../../assets/images/eDOPT.png';
import FS from './partials/FooterSocial';
import './style.css';

export default class Home extends PureComponent {
  render() {
    const description = "We provide a one to one give and take method so you can know everything about your impact. We trust your motive that makes us help you impact lives. Checkout our news section to know more about it!";
    const title = "Cats";
    const columns = [
      {
          title: "",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "/admin"
              }
          ]
      },
      {
          title: "",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];
   return(
  //  <SimpleReactFooter 
  //     description={description}
  //     // title={title}
  //     columns={columns}
  //     // linkedin="fluffy_cat_on_linkedin"
  //     facebook="fluffy_cat_on_fb"
  //     twitter="fluffy_cat_on_twitter"
  //     instagram="fluffy_cat_live"
  //     // youtube="UCFt6TSF464J8K82xeA?"
  //     // pinterest="fluffy_cats_collections"
  //     copyright="eDOPT"
  //     iconColor="black"
  //     backgroundColor="#f8d384"
  //     fontColor="black"
  //     copyrightColor="darkgrey"
  //  />

    <div className="row" style={{backgroundColor:"#f8d384"}}>
      <div className="columnx1" style={{textAlign:"left", color:"black", padding:"3%"}}>
        <img src={logo} alt="" style={{width:"60%"}}/>
        <br/>
        For Any Queries:<br/>
        Email: info@edopt.org<br/>
        Contact No: +91 7700975559
      </div>
      <div className="columnx2" style={{textAlign:"left", color:"black", padding:"3%"}}>
        About Us<br/>
        Team eDOPT<br/>
        In The News<br/>
        Our Partners<br/>
        Careers<br/>
        eDOPT Blog<br/>
        Success Stories
      </div>
      <div className="columnx3" style={{textAlign:"left", color:"black", padding:"3%"}}>
        Support<br/>
        Medical Finance<br/>
        FAQs & Help Center<br/>
        Fundraising Tips<br/>
        Fundraiser Video<br/>
        Trust & Safety<br/>
        Plans & Pricing<br/>
        Contact Us
      </div>
    </div>
   )
  };
}