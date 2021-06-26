import React from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Pagination from 'rc-pagination';
import Carousel from "react-multi-carousel";
import Input from '../elements/Input';
import "react-multi-carousel/lib/styles.css";
<<<<<<< HEAD
import {useEffect, useState} from 'react'
import axios from '../../api/axios'
=======
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { x } from './Hero';
console.log(`${x}`);
>>>>>>> b339ca3574be725c52af38b89932a40dddc15699

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}


const FeaturesSplit = ({
<<<<<<< HEAD
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
=======
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
    

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const { t } = useTranslation();

  const sectionHeader = {
    title: '',
    paragraph: '-'
  };
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Search Location" name="news" style={{margin:"4% 0%", borderRadius:"20px", borderColor:"grey"}}>   
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <p>{t('key17')}</p>
          </SectionHeader>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                <h3 className="mt-0 mb-12">
                  Lorem Ipsum
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/c3.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
>>>>>>> b339ca3574be725c52af38b89932a40dddc15699

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        axios.get('getNews/')
            .then((response) => {
                setNewsList(response.data)
            })
    }, [])

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: '',
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
    };


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content">
                        <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right"
                               placeholder="Search Location" name="news"
                               style={{margin: "4% 0%", borderRadius: "20px", borderColor: "grey"}}>
                            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9"/>
                            </svg>
                        </Input>
                    </SectionHeader>
                    <div className={splitClasses}>

                        {
                            newsList.map((news, index) => {
                                console.log(news)
                                return (
                                    <div className="split-item" key={index}>
                                        <div className="split-item-content center-content-mobile reveal-from-left"
                                             data-reveal-container=".split-item">
                                            <h3 className="mt-0 mb-12">
                                                {news.heading}
                                            </h3>
                                            <p className="m-0">
                                                {news.content}
                                            </p>
                                        </div>
                                        <div className={
                                            classNames(
                                                'split-item-image center-content-mobile reveal-from-bottom',
                                                imageFill && 'split-item-image-fill'
                                            )}
                                             data-reveal-container=".split-item">
                                            <Image
                                                src={require('./../../assets/images/c3.png')}
                                                alt="Features split 01"
                                                width={528}
                                                height={396}/>
                                        </div>
                                    </div>
                                );
                            })
                        }

                        <br/>

                        <Carousel responsive={responsive} style={{alignItems: "center"}}>
                            <div>
                                <center>
                                    <Image
                                        src={require('./../../assets/images/c4.png')}
                                        alt="Features split 03"
                                    />
                                </center>
                            </div>
                            <div>
                                <center>
                                    <Image
                                        src={require('./../../assets/images/c1.jpg')}
                                        alt="Features split 03"
                                    />
                                </center>
                            </div>
                            <div>
                                <center>
                                    <Image
                                        src={require('./../../assets/images/c4.png')}
                                        alt="Features split 03"
                                    />
                                </center>
                            </div>
                            <div>
                                <center>
                                    <Image
                                        src={require('./../../assets/images/c6.jpg')}
                                        alt="Features split 03"
                                    />
                                </center>
                            </div>
                        </Carousel>;
                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;