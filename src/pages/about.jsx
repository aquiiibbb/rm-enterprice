import './about.css'

export default function About(){
    return(
        <>
            {/* Hero Section */}
            <div className="about-hero-wrapper">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>About Calgon</h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="breadcrumb-wrapper">
                <div className="breadcrumb-container">
                    <span className="breadcrumb-text">You are here:</span>
                    <a href="/" className="breadcrumb-link">Home</a>
                    <span className="breadcrumb-separator"> > </span>
                    <span className="current-page">About Calgon</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content-wrapper">
                <div className="content-container">
                    <div className="content-layout">
                        <div className="text-section">
                            <h2>We are Calgon Scientific Co.</h2>
                            
                            <p>
                                Calgon Scientific Co. established in the year 1999, now one of the leading suppliers of Laboratory Chemicals, Glasswares, Instruments, Equipment's, Filter Papers and Other Filtration Products etc. in Kerala. We have proved our lead in this sector by supplying quality products, prompt delivery and after sales service. The reputed brand of products helped us to reach the customers with high quality products to match the specification and needs of our esteemed customers. Through professional management, promptness in delivery, after sales support, commitment to quality and customer satisfaction, Calgon Scientific Co. is fully capable of meeting the demands and requirements of customers all over South India.
                            </p>

                            <p>
                                Calgon Scientific Co. is engaged in supplying wide range of laboratory products to Research Laboratories, Institutions, Industries and Pharmaceutical companies. Our range of products include Electronic Analytical / Top Loading / Moisture Balances, pH / Ion / Conductivity Brix Meter, Rotary Evaporator, Laboratory Water Purification System, Precision Magnetic/ Over Head Stirrers, Homogenizers, Shakers, Mills, Vacuum Pumps, Cryo / Ultra / Deep Freezers, Laboratory / Blood Bank Refrigerators, Biological Safety Cabinets, Laminar Air Flow Cabinets, Micro Pipettes, Compound / Inverted / Stereo / Digital Microscopes, Rare and Research Chemicals, LC/MS Grade Solvents, Trace Metal Grade Acids, Dehydrated Culture Medias, Membrane Filters, Syringe Filters, Ultra Filtration Devices, Transfer Membranes, TFF Systems, Molecular Biology Plastic Wares, Electrophoresis Units & Power Packs, Reagents and Laboratory Safety Products such as "Kimberly" range Gloves, Face Masks and Tissues
                            </p>

                            <p>
                                Our priority and commitment is to offer a world class service which enable our customers to succeed in their research. We are focused to achieve the ideas of our customers.
                            </p>
                        </div>

                        <div className="image-section">
                            <img src="https://www.calgonscientific.com/images/lab/calgon5.jpg" alt="Calgon Scientific Laboratory" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}