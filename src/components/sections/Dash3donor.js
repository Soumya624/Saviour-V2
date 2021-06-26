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
                                <div className="column3" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"center"}}>
                                                English
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                98
                                            </div>
                                            <div className="column2" style={{textAlign:"center"}}>
                                                91
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
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
                                            <div className="column2" style={{textAlign:"center"}}>
                                                Hindi
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                90
                                            </div>
                                            <div className="column2" style={{textAlign:"center"}}>
                                                99
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
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
                                            <div className="column2" style={{textAlign:"center"}}>
                                                Physics
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                92
                                            </div>
                                            <div className="column2" style={{textAlign:"center"}}>
                                                93
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
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
                                            <div className="column2" style={{textAlign:"center"}}>
                                                Chemistry
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                91
                                            </div>
                                            <div className="column2" style={{textAlign:"center"}}>
                                                -
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                81
                                            </div>
                                            {/* <div className="column2" style={{textAlign:"center"}}>
                                                XX
                                            </div> */}
                                        </div>
                                    </p>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        <div className="row">
                                            <div className="column2" style={{textAlign:"center"}}>
                                                Maths
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                98
                                            </div>
                                            <div className="column2" style={{textAlign:"center"}}>
                                                -
                                            </div>
                                            <div className="column2" style={{textAlign:"right"}}>
                                                98
                                            </div>
                                            {/* <div className="column2" style={{textAlign:"center"}}>
                                                XX
                                            </div> */}
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
                                    <img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="" style={{width:"30%"}}/>
                                    </center>
                                    <br/>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                    I am a bright student in my class. I have keen interest towards astronomy. Now my father is passed due to covid and my family is facing extreme financial difficulties.I come from lower middle class.
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