import './App.css'

// Components
import Navbar from './components/Navbar';
import Features from './components/Features';

// Data
import FeaturesData from "./data/Features.json";

function App() {

    // Mapped Data
    const MappedFeatures = FeaturesData.map((item) => (
        <Features
            image={item.image}
            heading={item.heading}
            content={item.content}
        ></Features>
    ));

    return (
        <>
            <Navbar></Navbar>
            <section id="splash-page">
                <div className='splash-container'>
                    <h3>hHigh Quality products from leading brands.</h3>
                </div>
            </section>
            <section id="WhoWeAre">
                <div className='content-container'>
                    <div>
                        <h1>About Us</h1>
                        <h4>OUR PASSION TO PROVIDE CUSTOMERS WITH A WIDE RANGE OF GOODS.</h4>
                        <p>We Distribute a wide range of leading brands in the categories; DIY & Tools, Electronics, Health & Beauty, Home & Garden, Pet Supplies, Sports & Outdoors, Stationary and Toys & Games and More.
                            We as Visionim Wholesale aim to create a strong relationship with all our customers and provide the support they need to help them grow with our best pricing that out shines competitors.</p>
                    </div>
                    <div>
                        {/* <div>
                            <img src='src/assets/brands.png'></img>
                            <h4>INTERNATIONAL BRANDS</h4>
                            <p>We provide the most reputable and sought after brands.</p>
                        </div>
                        <div>
                            <img src='src/assets/services.png'></img>
                            <h4>FRIENDLY SERVICES</h4>
                            <p>We can ensure best level of service, with stock availability, nationwide distribution and immediate dispatch.</p>
                        </div>
                        <div>
                            <img src='src/assets/pricing.png'></img>
                            <h4>COMPETITIVE PRICE</h4>
                            <p>We can guarantee most competitive price of the products we sell.</p>
                        </div> */}
                        {MappedFeatures}
                    </div>
                </div>
            </section>
            <section id='WhatWeOffer'>

            </section>
            <section id='Contact'>

            </section>
        </>
    )
}

export default App
