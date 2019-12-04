import React from "react";
import OwlCarousel from "react-owl-carousel";
import CardLoader from "./CardLoader";
import ContentLoader from "react-content-loader";
const ShowCaseLoader = () => {
    return (
        <div className="container">
            <section className="showcase">
                <div
                    className="mb-3"
                    style={{ height: "38px", width: "200px" }}
                >
                    <ContentLoader
                        height={160}
                        width={200}
                        speed={2}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                    >
                        <rect
                            x="9"
                            y="15"
                            rx="0"
                            ry="0"
                            width="247"
                            height="38"
                        />
                    </ContentLoader>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    nav
                    navClass={[
                        "nav-carousel nav-loading nav-left",
                        "nav-carousel nav-loading nav-right"
                    ]}
                    items={4}
                    loop={true}
                    margin={20}
                >
                    <CardLoader />
                    <CardLoader />
                    <CardLoader />
                    <CardLoader />
                    <CardLoader />
                </OwlCarousel>
            </section>
        </div>
    );
};

export default ShowCaseLoader;
