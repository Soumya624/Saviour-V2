import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import './style.css'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
        <div className={innerClasses}>
          <div className="hero-content" >
            <div className="row">
              <div className="column">
                {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color:"black", marginBottom:"0"}}>
                  Be a <span className="text-color-primary" style={{color:"#8DD9CC"}}>Hero!</span>
                </h1> */}
                <div className="container-xs">
                    <div style={{textAlign:"left", marginTop:"2%", marginLeft:"1%"}}>
                    <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color:"black", marginBottom:"0"}}>
                      Be a <span className="text-color-primary" style={{color:"#3d946e"}}>Hero!</span>
                    </h1>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{marginTop:"0px", paddingTop:"0px"}}>
                        Virtually Adopt a Child For His Education
                      </p>
                    </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="/Signup_Donor" style={{backgroundColor:"#3d946e"}}>
                        Adopt Now
                        </Button>
                      <Button tag="a" color="dark" wideMobile href="/Signup_Student" style={{backgroundColor:"#3d946e"}}>
                        Student
                      </Button>
                    </ButtonGroup>
                    <div style={{textAlign:"right", marginTop:"2%"}}>
                      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color:"black", marginBottom:"0"}}>
                        Student?
                      </h1>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{marginTop:"0px", paddingTop:"0px"}}>
                        Join Here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div>
                <img src="childrenRun.png" alt="" style={{width:"90%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;