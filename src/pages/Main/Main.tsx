import { FC } from "react";
import { Helmet } from "react-helmet";

import AdditionalInformation from "@components/Additionalnformation/AdditionalInformation";
import Banner from "@components/Banner/Banner";
import HowItWorks from "@components/HowItWorks/HowItWorks";
import MainLayout from "@common/Layouts/Main/Layout";
import MostPopular from "@components/MostPopular/MostPopular";

const MainPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Ceriga Studio</title>
      </Helmet>
      <MainLayout>
        <Banner />
        <HowItWorks />
        <MostPopular />
        <AdditionalInformation />
      </MainLayout>
    </>
  );
};

export default MainPage;
