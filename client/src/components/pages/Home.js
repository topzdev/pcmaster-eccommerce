import React, { useEffect } from "react";
import Carousel from "../include/Carousel";
import NewArrival from "../section/NewArrival";
import ProductShowCase from "../layout/productView/ProductShowCase";
import { connect } from "react-redux";
import HeaderChanger from "../utils/HeaderChanger";
// import '../../resources/css/home.css';
const Home = () => {
    const toLoad = [
        { title: "Components", query: { category: "components" } },
        {
            title: "Motherboard",
            query: {
                subcategory: "motherboard"
            }
        },
        {
            title: "Processor",
            query: {
                subcategory: "processor"
            }
        },
        {
            title: "Graphics Card",
            query: {
                subcategory: "graphics card"
            }
        }
    ];
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
                {toLoad.map(item => (
                    <ProductShowCase
                        key={item.title}
                        query={item.query}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    frontend: state.frontend
});

export default connect(mapStateToProps)(Home);
