import './App.css'

// Components
import Navbar from './components/Navbar';
import Features from './components/Features';
import Company from './components/Company';

// Data
import FeaturesData from "./data/Features.json";
import CompaniesData from "./data/Companies.json";

function App() {

    // Mapped Data
    const MappedFeatures = FeaturesData.map((item) => (
        <Features
            key={item.heading}
            image={item.image}
            heading={item.heading}
            content={item.content}
        ></Features>
    ));

    const MappedCompanies = CompaniesData.map((item) => (
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
                    <h3>High Quality products from leading brands.</h3>
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

                {/* <div className='company-list-container'>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                    <Company></Company>
                </div> */}

            </section>
            <section id='Contact'>

            </section>
        </>
    )
}

export default App
