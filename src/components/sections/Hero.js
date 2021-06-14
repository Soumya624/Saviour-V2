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
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Landing Page For <span className="text-color-primary">Saviour</span>
                </h1>
                <div className="container-xs">
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="#">
                        Adopt Now
                        </Button>
                      <Button tag="a" color="dark" wideMobile href="#">
                        Student
                        </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className="column">
                <div>
                <img src="haiti.png" alt="" style={{width:"70%"}}/>
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