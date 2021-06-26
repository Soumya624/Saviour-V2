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
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <p className="m-0" style={{alignItems:"center"}}>
                  <br/>
                    <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%"}}>
                        <div className="row"> 
                                <div className="column" style={{padding:"1% 1% 1% 0%"}}>
                                    <center>
                                    <img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="" style={{width:"2rem"}}/>
                                    </center>
                                    <p className="text-sm mb-0" style={{textAlign:"center", fontSize:"14px"}}>
                                      Pankaj Mishra
                                    </p>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                    Age: 17<br/>Gender: Male<br/>City: Faridabad<br/>Pin code: 121003<br/>Phone no.: 8745372736<br/>Standard: 10th

                                    </p>
                                </div>
                        </div>
                    </div>
                    <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%"}}>
                        <div className="row"> 
                                <div className="column" style={{padding:"1% 1% 1% 0%"}}>
                                    <center>
                                    <img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="" style={{width:"2rem"}}/>
                                    </center>
                                    <p className="text-sm mb-0" style={{textAlign:"center", fontSize:"14px"}}>
                                    Guardian Name: Ankita Mishra
                                    </p>
                                    <br/>
                                    <br/>
                                    <center>
                                    <Link to="#" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Call</Link>
                                    </center>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                    Guardian Age: 37<br/>Guardian gender: female<br/>Guardian phone: 8745372736<br/>Relation: Mother<br/>Address: neher par, faridabad

                                    </p>
                                </div>
                        </div>
                    </div>
                </p>
              </div>
              <div className=' center-content-mobile reveal-from-bottom' data-reveal-container=".split-item" style={{paddingLeft:"2%"}}>
                <p className="m-0">
                    <center>
                        <div style={{border:"1px solid #3d946e", padding:"7%", margin:"4% 0%", width:"80%"}}>
                          <center>
                          <Chart
                            width={'100%'}
                            height={'100%'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                            ['Task', '100'],
                            ['English', 20.52],
                            ['Hindi', 20.52],
                            ['Physics', 20.08],
                            ['Chemistry', 17.58],
                            ['Math', 21.3],
                            ]}
                            options={{
                              title: 'Cumulative: 100',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            />
                            </center>
                            <br/>
                            <p className="text-sm mb-0" style={{fontSize:"14px"}}>
                              Looking for someone who pay my school fees. (Monthly fees, stationary, test fees.)
                            </p>
                            <br/>
                            <br/>
                            <div style={{alignItems:"center"}}>
                              <img src="file.png" alt="" style={{width:"35%", textAlign:"center"}}/>
                              <br/>
                              <Input type="file" style={{borderRadius:"20px", borderColor:"grey", color:"grey"}}/>
                            </div>
                            <br/>
                            <br/>
                        </div>
                </center>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;