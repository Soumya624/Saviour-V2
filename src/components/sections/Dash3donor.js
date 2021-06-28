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
          <center>
           <a href="#" style={{color:"#3d946e", fontSize:"14px", margin:"0rem"}}>Academics</a>
           </center>
           <div className="abc">
                        <div className="split-item" style={{alignItems:"center"}}> 
                                <div className="split-item-content center-content-mobile" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{fontSize:"14px"}}>
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
                                    </p>
                                </div>
                                <div className="split-item-image center-content-mobile" style={{padding:"1%"}}>
                                <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Subjects
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Number
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Test 1
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Test 2
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Cumulative
                                            </div>
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                English
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                02
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                98
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                91
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                94.5
                                            </div>
                                            {/* <div className="column2" style={{textAlign:"center"}}>
                                                XX
                                            </div> */}
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Hindi
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                02
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                90
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                99
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                94.5
                                            </div>
                                            {/* <div className="column2" style={{textAlign:"center"}}>
                                                XX
                                            </div> */}
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Physics
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                02
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                92
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                93
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                92.5
                                            </div>
                                            {/* <div className="column2" style={{textAlign:"center"}}>
                                                XX
                                            </div> */}
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Chemistry
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                01
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                91
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                -
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                81
                                            </div>
                                            
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"left"}}>
                                                Maths
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                01
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                98
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                -
                                            </div>
                                            <div className="column2" style={{textAlign:"left"}}>
                                                98
                                            </div>
                                            
                                        </div>
                                    </p>
                                    <br/>
                                    <Link to="/Dashboard4_Donor" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Show More</Link>
                                </div>
                        </div>
            </div>


           <center>
           <a href="#" style={{color:"#3d946e", fontSize:"14px", margin:"0rem"}}>Journal</a>
           </center>
           <div style={{padding:"3%", margin:"1% 0% 4% 0", border:"1px solid #3d946e"}}>
                        <div className="row" style={{alignItems:"center"}}> 
                                <div className="column2" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        02/08/2021
                                    </p>
                                </div>
                                <div className="column1" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                    </p>
                                </div>
                        </div>
                        <div className="row" style={{alignItems:"center"}}> 
                                <div className="column2" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        02/08/2021
                                    </p>
                                </div>
                                <div className="column1" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                    </p>
                                </div>
                        </div>
                        <br/>
                        <div className="row" style={{alignItems:"center"}}> 
                                <div className="column1" style={{padding:"1%"}}>
                                    <Input id="newsletter" type="name" hasIcon="right" name="pin" style={{borderRadius:"20px", borderColor:"grey"}}>  
                                    </Input>
                                </div>
                                <div className="column2" style={{padding:"1%"}}>
                                    <Link to="#" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Send</Link>
                                </div>
                        </div>
            </div>


            <div style={{padding:"3%", margin:"4% 0%"}}>
                        <div className="row" style={{alignItems:"center"}}> 
                                <div className="column" style={{padding:"1%"}}>
                                    <center>
                                    <img src={require('./../../assets/images/i3.jpg')} alt="" style={{width:"50%"}}/>
                                    </center>
                                    <br/>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                    I need financial assistance to complete my school. I am a topper of my class. Everyone loves me because of my polite nature. Now things have changed, we have no resource to complete my schooling. I am looking for my virtual parent here who will take care of my studies. I will prove myself and will forever be grateful to person who will help me.<br/>
                                    Guardian Age: 37<br/>Guardian gender: female<br/>Guardian phone: 8745372736<br/>Relation: Mother<br/>Address: neher par, faridabad
                                    </p><br/>
                                </div>
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