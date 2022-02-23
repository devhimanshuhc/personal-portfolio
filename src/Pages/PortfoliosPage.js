import React, { useState } from "react";
import Title from "../components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import portfolios from "../data/portfolios";
import Menu from "../components/Menu";

export default function PortfoliosPage() {
  const [menuItem] = useState(portfolios);

  return (
    <div>
      <MainLayout>
        <Title title={"Portfolios"} span={"Portfolios"} />
        <InnerLayout>
          <Menu menuItem={menuItem} />
        </InnerLayout>
      </MainLayout>
    </div>
  );
}
