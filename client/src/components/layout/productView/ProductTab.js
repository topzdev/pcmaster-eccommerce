import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProductReview from "./tabs/ProductReview";
import ProductDescription from "./tabs/ProductDescription";
import ProductFAQs from "./tabs/ProductFAQs";
const ProductTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>FAQ & Disclamers</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      <TabPanel>
        <ProductDescription />
      </TabPanel>
      <TabPanel>
        <ProductFAQs />
      </TabPanel>
      <TabPanel>
        <ProductReview />
      </TabPanel>
    </Tabs>
  );
};

export default ProductTab;
