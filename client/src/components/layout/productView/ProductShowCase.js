import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import CardProduct from "../card/CardProduct";
import ShowCaseLoader from "../../utils/loader/ShowCaseLoader";
import { connect } from "react-redux";
import _ from "lodash";
import { addShowcase } from "../../../controller/frontendController/frontendActions";

const ProductShowCase = ({
    frontend,
    frontend: { wishlist, cart, sidebar },
    query,
    title,
    exclude,
    addShowcase
}) => {
    const [product, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category, subcategory } = query;

    const getsProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/product/list/", query, {
                headers: { "Content-type": "application/json" }
            });
            // console.log(title + "" + res.data);
            // addShowcase(title, res.data);
            setData(res.data);

            setLoading(false);
        } catch (error) {
            console.log(error.response.data);
        }
    };


    useEffect(() => {
        getsProducts();
    }, []);



    if (loading) return <ShowCaseLoader />;

    return (
        <section className="showcase">
            <Link
                to={`/products/${category ? "?category=" + category : ""}${subcategory ? "?subcategory=" + subcategory : ""
                    }`.toLowerCase()}
            >
                <h1 className="heading--primary mb-2">{title}</h1>
            </Link>
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
                {product &&
                    product
                        .slice(0, 10)
                        .map(item => <CardProduct key={item._id} data={item} />
                        )}
            </OwlCarousel>
        </section>
    );
};
const mapStateToProps = state => ({
    frontend: state.frontend
});
export default connect(mapStateToProps, { addShowcase })(ProductShowCase);
