import './App.css'

// Components
import Navbar from './components/Navbar';
import Features from './components/Features';
import Company from './components/Company';
import Form from './components/Form';
import MapComponent from './components/MapComponent';

// Animation
import Animate from './components/Animate';

// Data
import FeaturesData from "./data/Features.json";
import CompaniesData from "./data/Companies.json";

function App() {

    // Mapped Data
    const MappedFeatures = FeaturesData.map((item, index) => (
        <Animate
            key={index}
            delay={0.25 * index}
        >
            <Features
                image={item.image}
                heading={item.heading}
                content={item.content}
            ></Features>
        </Animate>
    ));

    const MappedCompanies = CompaniesData
        .slice() // Create a shallow copy to avoid mutating the original array
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => (
            <Company
                key={item.name}
                name={item.name}
                image={item.image}
            ></Company>
        ));




    return (
        <>
            <Navbar></Navbar>
            <section id="splash-page">
                <div className='splash-container'>
                    <Animate
                        x={-75}
                        y={0}
                        delay={0.5}
                    >
                        <h3>High Quality products from leading brands.</h3>
                    </Animate>
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
                        {MappedFeatures}
                    </div>
                </div>
            </section>
            <section id='WhatWeOffer'>
                <div className='offer-container'>
                    <div className='offer-left-container'>
                        <h1>Featured Brands</h1>
                        <p>We Supply the some of the leading brands in every category shown below with competitive pricing and fast delivery in UK Mainland. Contact Us to get your account setup and enquire about your required goods.</p>
                    </div>
                    <div className='company-list-container'>
                        {MappedCompanies}
                    </div>
                </div>

            </section>
            <section id='Contact'>
                <div className='form-container'>

                    <Form></Form>
                </div>
                <div className='map-container'>
                    <Animate delay={0.4}>
                        <MapComponent></MapComponent>
                    </Animate>
                    <div className='address-container'>
                        <div className='address'>
                            <h3>FIND US</h3>
                            <p>B2 Unit 110-111, <br></br>
                                Oxgate House, <br></br>
                                Oxgate Lane, London, <br></br>
                                NW2 7FS</p>
                        </div>
                        <div className='contact-details'>
                            <h3>CONTACT</h3>
                            <p>Info@visionimwholesale.co.uk</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>Registered Office: <br></br> B2 Unit 110-111, Oxgate House, Oxgate Lane, London, NW2 7FS</p>
                <p>Registered in UK. Company Reg. GB13824476. VAT 4267 89844 © 2023 Visionim Wholesale. All rights reserved </p>
            </footer>
        </>
    )
}

export default App
