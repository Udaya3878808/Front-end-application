import React from 'react'
import Layout from "../components/Layout/Layout"
const About = () => {
  return (
    <Layout title={"about Us-ArtVista"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            An Artvista website is an online store where customers can find
            products, browse offerings, and place purchases online. It
            facilitates the transaction between a buyer and seller. A digital
            storefront can serve as the virtual equivalent of the product
            shelves, sales staff,The scope of the Artvista website project
            encompasses the development of a user-friendly online platform
            allowing customers to register, browse products, add items to their
            cart, securely process payments, and manage orders.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About



