import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProductReview from "./Tabs/ProductReview";
import ProductDescription from "./Tabs/ProductDescription";
import ProductFAQs from "./Tabs/ProductFAQs";
const ProductTab = () => {
  return (
    <Tabs selectedIndex={2}>
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
