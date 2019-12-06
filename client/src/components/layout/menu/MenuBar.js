import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Dropdowns
import SearchBar from "../search/SearchBar";
import MenuList from "./MenuList";
import BackDrop from "../../utils/Backdrop";
import { Scrollbars } from "react-custom-scrollbars";
import { toggleNav } from "../../../controller/frontendController/frontendActions";

//images
import image_1 from "../../../resources/images/1.jpg";
import image_2 from "../../../resources/images/2.jpg";
import image_3 from "../../../resources/images/3.jpg";
import image_4 from "../../../resources/images/4.jpg";
import image_5 from "../../../resources/images/5.jpg";
import image_6 from "../../../resources/images/6.jpg";

const MenuBar = ({ frontend: { sidebar }, toggleNav }) => {
    const menu = [
        {
            title: "Computer",
            img: image_1,
            item: [
                "Desktop PC",
                "Notebooks",
                "Mini PC",
                "Diskless PC",
                "Software"
            ]
        },
        {
            title: "Components",
            img: image_2,
            item: [
                "Processor",
                "Motherboard",
                "Graphics Card",
                "Memory",
                "Power Supply",
                "Hard Drive",
                "Casing",
                "Sound Card",
                "Lan Card",
                "Optical Drive"
            ]
        },
        {
            title: "Peripherals",
            img: image_3,
            item: [
                "Displays",
                "Audio",
                "Keyboard/Mouse",
                "Office Furniture",
                "Printer/Scanner/Inks",
                "Surveillance/CCTV",
                "UPS/AVR",
                "Webcam"
            ]
        },
        {
            title: "Net Devices",
            img: image_4,
            item: [
                "Access Point/Range Extender",
                "Adaptor",
                "Router",
                "Switch",
                "UTP Cable",
                "Network Attached Storage"
            ]
        },
        {
            title: "Accessories",
            img: image_5,
            item: [
                "Batteries and Chargers",
                "Cables",
                "Cooling Solutions",
                "Cleaning Solutions",
                "HDD Dock / Enclosure / Caddy",
                "Lightings",
                "Memory Devices",
                "Sleeves / Bags",
                "USB Hub / Card Reader"
            ]
        },
        {
            title: "Gadgets",
            img: image_6,
            item: [
                "Digital Camera",
                "Media Player",
                "Mobile",
                "Mobile Accessories",
                "Mining",
                "Wellness"
            ]
        }
    ];

    const closeNav = () => {
        toggleNav();
    };

    return (
        <Fragment>
            <div className={`menu ${sidebar ? "menu-show" : ""}`}>
                <div className="menu__search">
                    <SearchBar />
                </div>
                <ul className="menu__list">
                    {menu.map(item => (
                        <MenuList key={item.title} list={item} />
                    ))}
                </ul>
            </div>
            <BackDrop
                zIndex={10}
                show={sidebar}
                className={"menu-backdrop"}
                onHide={closeNav}
            />
        </Fragment>
    );
};

const mapStateToProps = state => ({
    frontend: state.frontend
});

export default connect(mapStateToProps, { toggleNav })(MenuBar);
