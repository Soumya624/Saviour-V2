import React, { PureComponent } from 'react'
import SimpleReactFooter from "simple-react-footer";
import logo from './../../assets/images/eDOPT.png';
import FS from './partials/FooterSocial';
import './style.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { x } from '../sections/Hero';
console.log(`${x}`);



function Footer() {
    const { t } = useTranslation();
   return(

    <div className="row" style={{backgroundColor:"#f8d384"}}>
      <div className="columnx1" style={{textAlign:"left", color:"black", padding:"3%"}}>
        <img src={logo} alt="" style={{width:"60%"}}/>
        <br/>
        {t('key53')}:<br/>
        {t('key54')}: info@edopt.org<br/>
        {t('key55')}: +91 7700975559
      </div>
      <div className="columnx2" style={{textAlign:"left", color:"black", padding:"3%"}}>
        {t('key38')}<br/>
        {t('key39')}<br/>
        {t('key40')}<br/>
        {t('key41')}<br/>
        {t('key42')}<br/>
        {t('key43')}<br/>
        {t('key44')}
      </div>
      <div className="columnx3" style={{textAlign:"left", color:"black", padding:"3%"}}>
      {t('key45')}<br/>
      {t('key46')}<br/>
      {t('key47')}<br/>
      {t('key48')}<br/>
      {t('key49')}<br/>
      {t('key50')}<br/>
      {t('key51')}<br/>
      {t('key52')}
      </div>
    </div>
   )
}

export default Footer