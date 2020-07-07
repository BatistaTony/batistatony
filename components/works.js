import Work from "./work";
import AOS from "aos";
import { useEffect } from "react";


export default function Works() {
  const works_ = [
    {
      name: "Pizza Delivery App",
      img: "/images/pizzApp.png",
      github: "https://github.com/BatistaTony/PizzaDeliveryApp",
      link: "",
      desc: `An application for pizza ordering and home delivery, made with STACK MERN. Which can be used for any store that orders any product, the App is customizable.`,
    },

    {
      name: "DocesApp",
      img: "/images/doces.png",
      github: "https://github.com/BatistaTony/DocesApp",
      link: "",
      desc: `Simple App to order cake and others sweet stuffs, the customer just need the phone number and allow take his location to complete the orderiing of product. The App was supposed to got a story to show what's new and make some publicity.`,
    },
    {
      name: "Agricultura Activa-AO",
      img: "/images/agric.png",
      github: "https://github.com/BatistaTony/agricultura_activaAO",
      link: "https://agricultura-activa-ao.vercel.app/",
      desc: `Active Agriculture is an App that brings together stores that work or need agricultural products, such as restaurants, supermarkets and farms so that they can be connected and facilitate the provision of services for each one.

The App registers the stores in the system, takes the locations of them, when they are low on food, they can alert from the App and the App alerts the nearest farm that has the products requested by the store and so that the farm can harvest with a trajectory and destination already set.`,
    },
    {
      name: "Hotel Glenn",
      img: "/images/hotel.png",
      github: "https://github.com/BatistaTony/Hotel",
      link: "",
      desc: `Website to show how the place is in Hotel and Who they are.`,
    },
    {
      name: "Bitz Price",
      img: "/images/bitz.png",
      github: "https://github.com/BatistaTony/BitzPrice",
      link: "https://bitz-price-nine.vercel.app/",
      desc: `Ap to check the bitcoin price`,
    },
  ];

   useEffect(() => {
     AOS.init();
   }, [1]);


  return (
    <div className="works" id="work">
      <div className="apresentation_works">
        <h1 className="wor_til" data-aos="fade-right">
          - All Selected works
        </h1>
        <p className="text_wor_" data-aos="fade-right">
          These are the Selected projects that I've been build since I start
          know what real and function App is and how to work, some are deployed
          to test.
        </p>
        <a
          target="_black"
          href="https://github.com/BatistaTony?tab=repositories"
          className="lnk_work"
          data-aos="fade-right"
        >
          see more on my github
          <img src="/images/icons8_left_50px.png" alt="" />
        </a>
      </div>

      {works_.map((w, key) => (
        <Work work={w} key={key} />
      ))}
    </div>
  );
}
