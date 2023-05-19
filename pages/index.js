import Head from "next/head";
import React, {useEffect, useState} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
 import nextI18NextConfig from '../next-i18next.config.js';
import { Header } from "../components/Header.js";
import {useTranslation} from "next-i18next";

const Home = (props) => {
    const [t, i18n, ready] = useTranslation("translation", { useSuspense: false,wait: true, });
   /* const [language, setLanguage] = useState(i18n.language)
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('language',language);
        //   i18n.changeLanguage(language);
        i18n.changeLanguage(language).then(() => {
            i18n.reloadResources(language).then(()=>{
                //   setCount(count+1);
            })
        })
    }, [language])*/

    function handleLanguageChange() {
        console.log('es');
        i18n.changeLanguage('es').then(() => {
            i18n.reloadResources('es').then(()=>{
                //   setCount(count+1);
            })
        })
      /*  // const newLanguage = language ===  'es'
        if(language === 'en'){
            setLanguage('es')
        }else{
            setLanguage('en')
        }*/

    }
  return (
    <>
      <Head>
        <title>Main page</title>
      </Head>
        <button onClick={handleLanguageChange}>change to es</button>
      <Header {...props} t = {t}/>
      <div>ffdff</div>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"],nextI18NextConfig))
    }
  };
};

export default Home;
