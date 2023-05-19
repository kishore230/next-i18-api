import { useTranslation, } from "next-i18next";
import React, {useEffect, useState} from "react";

export const Header = function (props) {
    const {t} = props;


   /* useEffect(() => {
        const abc =  setTimeout(()=>{handleLanguageChange()},100);
         clearTimeout(abc)
    },[])*/




  console.log('props',props);
 // console.log('useTranslation("translation")',useTranslation("translation"));
  return (
    <>

      <div>{t("title") }</div>
      <div>{t("footer") }</div>
      <div>testing</div>
    </>
  );
};
