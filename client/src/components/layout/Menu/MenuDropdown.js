import React from "react";
import { Link } from "react-router-dom";
const MenuDropdown = () => {
  const list = {
    title: "Components",
    items: [
      {
        title: "Processor",
        sub: [
          {
            title: "Intel",
            link: "/",
            color: "0, 114, 198",
            img:
              "https://images.sellbrite.com/production/28275/Q6600_SR/56e3a287-fdcc-582c-946a-3928eb27b713.jpg"
          },
          {
            title: "AMD",
            link: "/",
            color: "236, 98, 36",
            img:
              "https://www.maketecheasier.com/assets/uploads/2019/07/choose-amd-cpu-featured-800x400.jpg"
          }
        ]
      },
      {
        title: "Motherboard"
      },
      {
        title: "Graphics Card"
      },
      {
        title: "Memory"
      },
      {
        title: "Hard Drive"
      },
      {
        title: "Sound Card"
      },
      {
        title: "Chasis"
      },
      {
        title: "Optical Drive"
      }
    ]
  };

  const { title, items } = list;

  return (
    <div className='menu__dropdown'>
      <ul>
        {items.map(item => (
          <li key={item.title}>
            <Link to={`/${item.title.toLowerCase()}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDropdown;
