import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import './style.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
export const x= prompt('Choose Language (English/Hindi)');
console.log(x);
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      English: {
        translation: {
        }
      },
      Hindi: {
        translation: {
        }
      }
    },
    lng: x,
    fallbackLng: 'English',

    interpolation: {
      escapeValue: false
    }
  });


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

  const { t } = useTranslation();

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
                      {t('key1')} <span className="text-color-primary" style={{color:"#3d946e"}}>{t('key')}!</span>
                    </h1>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{marginTop:"0px", paddingTop:"0px"}}>
                        {t('key2')}
                      </p>
                    </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="/Signup_Donor" style={{backgroundColor:"#3d946e"}}>
                        {t('key7')}
                        </Button>
                      <Button tag="a" color="dark" wideMobile href="/Signup_Student" style={{backgroundColor:"#3d946e"}}>
                        {t('key8')}
                      </Button>
                    </ButtonGroup>
                    <div style={{textAlign:"right", marginTop:"2%"}}>
                      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color:"black", marginBottom:"0"}}>
                        {t('key8')}?
                      </h1>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{marginTop:"0px", paddingTop:"0px"}}>
                        {t('key9')}
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