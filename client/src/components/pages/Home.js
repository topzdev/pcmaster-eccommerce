import React, { useEffect } from "react";
import Carousel from "../include/Carousel";
import NewArrival from "../section/NewArrival";
import ProductShowCase from "../layout/productView/ProductShowCase";
import { connect } from "react-redux";
import HeaderChanger from "../utils/HeaderChanger";
// import '../../resources/css/home.css';
const Home = () => {
    return (
        <div>
            <HeaderChanger
                name={"PC Master | Home of the Glorious PC Builder and Gamers"}
                description={
                    "Glorious Computer Components store in the Philippines selling computer products including hardware, software, upgrades, accessories and more."
                }
            />
            <Carousel />
            {/* <ProductShowCase title={"Popular"} /> */}
            <div className="container pt-2 pb-3">
                <ProductShowCase
                    query={{ category: "components" }}
                    title={"Components"}
                />
                <ProductShowCase
                    query={{
                        subcategory: "motherboard"
                    }}
                    title={"Motherboard"}
                />
                <ProductShowCase
                    query={{
                        subcategory: "processor"
                    }}
                    title={"Processor"}
                />
                <ProductShowCase
                    query={{
                        subcategory: "graphics card"
                    }}
                    title={"Graphics Card"}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    frontend: state.frontend
});

export default connect(mapStateToProps)(Home);
