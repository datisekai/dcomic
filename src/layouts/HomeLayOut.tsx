import React, { FC } from "react";
import Header from "../components/Header";
import { IsBrowser } from "../components/IsBrower";
import Children from "../models/Children";

const HomeLayOut: FC<Children> = ({ children }) => {
  return (
    <IsBrowser>
      <div className='max-w-[1200px] bg-slate-400 w-[calc(100%-16px)]'>
        <Header />
        <div>{children}</div>
      </div>
    </IsBrowser>
  );
};

export default HomeLayOut;
