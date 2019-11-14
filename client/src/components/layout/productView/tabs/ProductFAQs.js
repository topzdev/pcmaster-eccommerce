import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const ProductFAQs = () => {
  return (
    <div>
      <h2 className="mb-2">FAQ & Disclamers</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How to Order?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Before submitting your order, kindly read and understand our Terms
              and Conditions. You will have to agree with it before you could
              place an order on our website.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do i pay for my orders?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Accepts: credit, debit, and prepaid cards</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How do i track my Orders?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              When logged in, go to My Account to access your dashboard. Click
              on the orders and click on the "VIEW" button for the order number
              that you need to check. You may see the status of your shipment
              under the ORDER UPDATES sections
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Did not find what you were looking for?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If the item is not posted on the website but you are aware that
              the items are available in the Philippine market, you may contact
              us directly so we can assist you in purchasing that specific
              product.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              I need support for my purchased product/s
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Before contacting us, kindly read and understand our Warranty
              Policy You may bring your item together with its original
              accessories to the nearest PC Express store or to the nearest
              Authorized Service Center of the brand/product. Don’t forget to
              bring your proof of purchase (Warranty Slip and Sales Invoice),
              and all of the original accessories.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFAQs;
