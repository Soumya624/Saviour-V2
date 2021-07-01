import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import ImageMapper from "react-image-mapper";
import Carousel from "react-multi-carousel";
import SectionHeader from "./partials/SectionHeader";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./style.css";
import i18n from "i18next";
import photo from "./../../assets/images/ss2.png";
import { useTranslation, initReactI18next } from "react-i18next";
export const x = prompt(
  "Choose Language (English/Hindi). Press OK to Continue with English"
);

const URL = "./../../assets/images/ss2.png";

const MAP = {
  name: "my-map",
  areas: [{ name: "1", shape: "rect", coords: [59, 319, 371, 406] }],
};

console.log(x);
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      English: {
        translation: {},
      },
      Hindi: {
        translation: {},
      },
    },
    lng: x,
    fallbackLng: "English",

    interpolation: {
      escapeValue: false,
    },
  });

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const { t } = useTranslation();

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        {/* <img src={require('./../../assets/images/ss2.png')} alt="" usemap="#image-map"/>
        <map name="image-map">
            <area target="_self" alt="Signin Button" title="Signin Button" href="/Signup_Donor" coords="59,319,371,406" shape="rect"/>
        </map> */}
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="container-xs">
                  <div
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      marginLeft: "1%",
                      marginBottom: "5%",
                    }}
                  >
                    <img src="ss3.png" alt="" />
                  </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button
                        tag="a"
                        color="primary"
                        wideMobile
                        href="/Signup_Donor"
                        style={{
                          backgroundColor: "#f1b12a",
                          borderRadius: "5px",
                        }}
                      >
                        Change One Life
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <img src="ss1.png" alt="" style={{ width: "88%" }} />
              </div>
            </div>
            <img src="ss2.png" alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <img src={require("./../../assets/images/ss.png")} alt="" />
        <br />
        <br />
        <center>
          <ButtonGroup>
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="/Signup_Donor"
              style={{ backgroundColor: "#f1b12a", borderRadius: "5px" }}
            >
              Start a Fundraiser
            </Button>
          </ButtonGroup>
        </center>
        <br />
        <br />
        <br />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <img src="s2.png" alt="" style={{ width: "88%" }} />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="container-xs">
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      marginLeft: "1%",
                      marginBottom: "5%",
                    }}
                  >
                    <div
                      className="column"
                      style={{ fontSize: "14px", paddingRight: "3%" }}
                    >
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua!
                      </p>
                    </div>
                    <div
                      className="column"
                      style={{
                        fontSize: "14px",
                        paddingLeft: "3%",
                        borderLeft: "1px solid #adb9c5",
                        textAlign: "center",
                      }}
                    >
                      <center>
                        <h4 style={{ color: "black" }}>586+</h4>
                        <p className="m-0">
                          Children have registered themselves and cleared
                          adoptation interview to change their lives forever...
                        </p>
                      </center>
                    </div>
                  </div>
                  {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup >
                      <Button
                        tag="a"
                        color="primary"
                        wideMobile
                        href="/Signup_Donor"
                        style={{ backgroundColor: "#f1b12a", borderRadius:"5px"}}
                      >
                        Download App
                      </Button>
                    </ButtonGroup>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <img src={require("./../../assets/images/ss1.png")} alt="" />
        <br />
        <br />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <img src="s3.png" alt="" style={{ width: "88%" }} />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="container-xs">
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      marginLeft: "1%",
                      marginBottom: "5%",
                    }}
                  >
                    <div
                      className="column"
                      style={{ fontSize: "14px", paddingRight: "3%" }}
                    >
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua!
                      </p>
                    </div>
                    <div
                      className="column"
                      style={{
                        fontSize: "14px",
                        paddingLeft: "4%",
                        borderLeft: "1px solid #adb9c5",
                        textAlign: "center",
                      }}
                    >
                      <center>
                        <h4 style={{ color: "black" }}>99%</h4>
                        <p className="m-0">Successful edoptation rate</p>
                      </center>
                    </div>
                  </div>
                  {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup >
                      <Button
                        tag="a"
                        color="primary"
                        wideMobile
                        href="/Signup_Donor"
                        style={{ backgroundColor: "#f1b12a", borderRadius:"5px"}}
                      >
                        Download App
                      </Button>
                    </ButtonGroup>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <center>
          <ButtonGroup>
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="/Signup_Donor"
              style={{ backgroundColor: "#f1b12a", borderRadius: "5px" }}
            >
              Edopt a child
            </Button>
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="/Signup_Donor"
              style={{ backgroundColor: "#f1b12a", borderRadius: "5px" }}
            >
              Know the edoptation process
            </Button>
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="/Signup_Donor"
              style={{ backgroundColor: "#f1b12a", borderRadius: "5px" }}
            >
              Reach out to us for edoptation
            </Button>
          </ButtonGroup>
        </center>
        <br />
        <br />
        <br />
        <img src="s5.png" alt="" style={{ width: "40%" }} />
        <br />
        <br />
        <Carousel responsive={responsive} style={{ alignItems: "center" }}>
          <Card style={{marginRight:"0.4%", border:"none"}}>
            <CardHeader style={{ padding: "0px 0 5px 0", margin:"1%" }}>
              <img src="s6.png" alt="" />
            </CardHeader>
            <CardBody
              style={{
                textAlign: "left",
                fontSize: "15px",
                backgroundColor: "#fbe192",
                margin:"1%"
              }}
            >
              <b style={{ fontSize: "18px" }}>
                Rahul Lost His Father Due to Covid
              </b>
              <br />
              A bright student rahul from chattisgarg lost only earning member
              of his family to covid this march 2020
              <br />
              <br />
              <center>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="/Signup_Donor"
                  style={{ backgroundColor: "#4b5c6b", borderRadius: "5px" }}
                >
                  eDOPT RAHUL
                </Button>
              </center>
            </CardBody>
          </Card>
          <Card style={{marginLeft:"0.4%", marginRight:"0.4%", border:"none"}}>
            <CardHeader style={{ padding: "0px 0 5px 0", margin:"1%" }}>
              <img src="s6.png" alt="" />
            </CardHeader>
            <CardBody
              style={{
                textAlign: "left",
                fontSize: "15px",
                backgroundColor: "#fbe192",
                margin:"1%"
              }}
            >
              <b style={{ fontSize: "18px" }}>
                Rahul Lost His Father Due to Covid
              </b>
              <br />
              A bright student rahul from chattisgarg lost only earning member
              of his family to covid this march 2020
              <br />
              <br />
              <center>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="/Signup_Donor"
                  style={{ backgroundColor: "#4b5c6b", borderRadius: "5px" }}
                >
                  eDOPT RAHUL
                </Button>
              </center>
            </CardBody>
          </Card>
          <Card style={{marginLeft:"0.4%", border:"none"}}>
            <CardHeader style={{ padding: "0px 0 5px 0", margin:"1%" }}>
              <img src="s6.png" alt="" />
            </CardHeader>
            <CardBody
              style={{
                textAlign: "left",
                fontSize: "15px",
                backgroundColor: "#fbe192",
                margin:"1%"
              }}
            >
              <b style={{ fontSize: "18px" }}>
                Rahul Lost His Father Due to Covid
              </b>
              <br />
              A bright student rahul from chattisgarg lost only earning member
              of his family to covid this march 2020
              <br />
              <br />
              <center>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="/Signup_Donor"
                  style={{ backgroundColor: "#4b5c6b", borderRadius: "5px" }}
                >
                  eDOPT RAHUL
                </Button>
              </center>
            </CardBody>
          </Card>
        </Carousel>
        <br />
        <br />
        <br />
        <img src="s4.png" alt="" style={{ width: "50%" }} />
        <br />
        <br />
        <Carousel responsive={responsive} style={{ alignItems: "center" }}>
          <div className="row" style={{ textAlign: "left", color: "black" }}>
            <div className="columnr">
              <img
                src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"
                alt=""
                style={{ width: "2rem", textAlign: "left" }}
              />
            </div>
            <div className="columnq">
              Amit Kumar
              <br />
              Bhopal
            </div>
          </div>
          <div className="row" style={{ textAlign: "left", color: "black" }}>
            <div className="columnr">
              <img
                src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"
                alt=""
                style={{ width: "2rem", textAlign: "left" }}
              />
            </div>
            <div className="columnq">
              Amit Kumar
              <br />
              Bhopal
            </div>
          </div>
          <div className="row" style={{ textAlign: "left", color: "black" }}>
            <div className="columnr">
              <img
                src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"
                alt=""
                style={{ width: "2rem", textAlign: "left" }}
              />
            </div>
            <div className="columnq">
              Amit Kumar
              <br />
              Bhopal
            </div>
          </div>
        </Carousel>
        <br />
        <br />
        <br />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item" style={{ backgroundColor: "#f7f9fa" }}>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <img src="s1.png" alt="" style={{ width: "88%" }} />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="container-xs">
                  <div
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      marginLeft: "1%",
                      marginBottom: "5%",
                    }}
                  >
                    <p className="m-0" style={{ fontSize: "14px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua — Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button
                        tag="a"
                        color="primary"
                        wideMobile
                        href="/Signup_Donor"
                        style={{
                          backgroundColor: "#f1b12a",
                          borderRadius: "5px",
                        }}
                      >
                        Download App
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <center>
          <h4 style={{ color: "black" }}>Featured In</h4>
        </center>
        <Carousel responsive={responsive} style={{ alignItems: "center" }}>
          <div>
            <center>
              <Image
                src={require("./../../assets/images/c4.png")}
                alt="Features split 03"
              />
            </center>
          </div>
          <div>
            <center>
              <Image
                src={require("./../../assets/images/c1.jpg")}
                alt="Features split 03"
              />
            </center>
          </div>
          <div>
            <center>
              <Image
                src={require("./../../assets/images/c4.png")}
                alt="Features split 03"
              />
            </center>
          </div>
          <div>
            <center>
              <Image
                src={require("./../../assets/images/c6.jpg")}
                alt="Features split 03"
              />
            </center>
          </div>
        </Carousel>
        <br />
        <br />
        <b style={{ color: "black" }}>
          Have a question? Check out our FAQs page or chat with us on Whatsapp
        </b>
        <Button
          tag="a"
          color="primary"
          wideMobile
          href="/Signup_Donor"
          style={{
            backgroundColor: "#0c8645",
            borderRadius: "25px",
            marginLeft: "2%",
          }}
        >
          Chat With Us
        </Button>
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
