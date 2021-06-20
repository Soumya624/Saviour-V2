import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';
import './style.css'
import FooterSocial from '../layout/partials/FooterSocial';
import { Chart } from "react-google-charts";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
            <div style={{padding:"3%", margin:"1% 0% 4% 0%"}}>
                        <div className="row" style={{alignItems:"center"}}> 
                                <div className="column4" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{fontSize:"14px"}}>
                                        <center>
                                        <Chart
                                            width={'100%'}
                                            height={'100%'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Task', '100'],
                                                ['Received Marks', 83],
                                                ['Deducted Marks', 17],
                                            ]}
                                            options={{
                                                title: '',
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                        </center>
                                    </p>
                                </div>
                                <div className="column3" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                    </p>
                                </div>
                        </div>
            </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <p className="m-0" style={{alignItems:"center"}}>
                  <br/>
                    <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%"}}>
                        <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                            <div className="row">
                                <div className="column2" style={{textAlign:"center"}}>
                                    English
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="column2" style={{textAlign:"center"}}>
                                    English
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                            </div>
                        </p>
                    </div>
                    <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%"}}>
                        <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                            <div className="row">
                                <div className="column2" style={{textAlign:"center"}}>
                                    English
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="column2" style={{textAlign:"center"}}>
                                    English
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="column2" style={{textAlign:"center"}}>
                                    English
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"right"}}>
                                    XX
                                </div>
                                <div className="column2" style={{textAlign:"center"}}>
                                    XX
                                </div>
                            </div>
                        </p>
                    </div>
                </p>
              </div>
              <div className='split-item-image center-content-mobile reveal-from-bottom' data-reveal-container=".split-item" style={{paddingLeft:"2%"}}>
                <p className="m-0">
                    <center>
                    <a href="#" style={{color:"grey", fontSize:"14px", margin:"0.5rem"}}>EAA</a>
                        <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%", width:"80%"}}>
                            <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                            </p>
                            <br/>
                            <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                            </p>
                        </div>
                    </center>
                </p>
              </div>
            </div>
            
          </div>
          <center>
            <br/><br/>
            <Link to="#" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Open</Link>
          </center>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;