import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import CardProduct from "../card/CardProduct";
import ShowCaseLoader from "../../utils/loader/ShowCaseLoader";
import { connect } from "react-redux";

const ProductShowCase = ({
    frontend: { wishlist, cart },
    query,
    title,
    exclude
}) => {
    const [product, setData] = useState([]);
    const [loading, setLoading] = useState([true]);
    const { category, subcategory } = query;
    useEffect(() => {
        const getsProducts = async () => {
            try {
                setLoading(true);
                const res = await axios.post("/api/product/list/", query, {
                    headers: { "Content-type": "application/json" }
                });
                setData(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data);
            }
        };
        getsProducts();
    }, [wishlist, cart]);

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
            {loading ? (
                <Fragment>Loading</Fragment>
            ) : (
                <OwlCarousel
                    className="owl-theme"
                    nav
                    navClass={[
                        "nav-carousel nav-left",
                        "nav-carousel nav-right"
                    ]}
                    items={4}
                    loop={true}
                    margin={20}
                >
                    {product &&
                        product
                            .splice(0, 15)
                            .map(item =>
                                exclude && exclude != item._id ? (
                                    <CardProduct key={item._id} data={item} />
                                ) : (
                                    <CardProduct key={item._id} data={item} />
                                )
                            )}
                </OwlCarousel>
            )}
        </section>
    );
};
const mapStateToProps = state => ({
    frontend: state.frontend
});
export default connect(mapStateToProps)(ProductShowCase);
