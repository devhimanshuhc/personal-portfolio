import React, { useState } from "react";
import Title from "../components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import portfolios from "../data/portfolios";
import Menu from "../components/Menu";


export default function PortfoliosPage() {


  return (
    <div>
      <MainLayout>
        <Title title={"Portfolios"} span={"Portfolios"} />
        <InnerLayout>
          <Menu />
        </InnerLayout>
      </MainLayout>
    </div>
  );
}
