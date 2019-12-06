import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import CardProduct from "../card/CardProduct";
import ShowCaseLoader from "../../utils/loader/ShowCaseLoader";
import { connect } from "react-redux";
import CardLoading from "../../utils/loader/CardLoader";
import _ from "lodash";
import { addShowcase } from "../../../controller/frontendController/frontendActions";

const ProductShowCase = ({
    frontend: { wishlist, cart, showcase },
    query,
    title,
    exclude,
    addShowcase
}) => {
    const [product, setData] = useState(null);
    const [loading, setLoading] = useState([true]);
    const { category, subcategory } = query;

    const getsProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/product/list/", query, {
                headers: { "Content-type": "application/json" }
            });
            setData(res.data);
            console.log(title + "" + res.data);
            if (product) addShowcase(title, res.data);

            setLoading(false);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        getsProducts();
    }, []);

    useEffect(() => {
        if (!_.isEmpty(showcase)) {
            console.log("hellloo");
            setLoading(true);
            showcase.map(item =>
                item.name === title ? setData(item.data) : null
            );
            setLoading(false);
            console.log(showcase);
        }
    }, [cart, wishlist]);

    const renderCarousel = data => (
        <OwlCarousel
            className="owl-theme"
            nav
            navClass={["nav-carousel nav-left", "nav-carousel nav-right"]}
            items={4}
            loop={true}
            margin={20}
            responsive={{
                0: {
                    items: 1,
                    loop: false,
                    stagePadding: 30,
                    dots: false,
                    center: true
                },
                600: {
                    items: 2,
                    dots: false,
                    margin: 25
                },
                1024: {
                    items: 3
                },

                1140: {
                    items: 4
                }
            }}
        >
            {/* <CardLoading /> */}
            {data &&
                data
                    .splice(0, 15)
                    .map(item =>
                        exclude && exclude != item._id ? (
                            <CardProduct key={item._id} data={item} />
                        ) : (
                            <CardProduct key={item._id} data={item} />
                        )
                    )}
        </OwlCarousel>
    );

    if (loading) return <ShowCaseLoader />;

    return (
        <section className="showcase">
            <Link
                to={`/products/${category ? "?category=" + category : ""}${
                    subcategory ? "?subcategory=" + subcategory : ""
                }`.toLowerCase()}
            >
                <h1 className="heading--primary mb-2">{title}</h1>
            </Link>
            {renderCarousel(product)}
        </section>
    );
};
const mapStateToProps = state => ({
    frontend: state.frontend
});
export default connect(mapStateToProps, { addShowcase })(ProductShowCase);
