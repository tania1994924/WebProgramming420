import {Link} from "react-router-dom";
import hotel from "../../static/images/intro-hotels.jpg"

export default function Home(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
	<header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <h1><span>World's Leading Destination</span></h1>
                            <p className="p-heading p-large">A Dozen Must Do Experiences in the Maldives</p>
                            <a className="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
                        </div>
                    </div> 
                </div> 
            </div>
        </div> 
    </header> 
   
    <div id="intro" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="text-container">
                        <div className="section-title"></div>
                        <h2>THE GUEST HOUSE CULTURE IN MALDIVES</h2>
                        <p>Crystal clear seas, powdery white sand and indulgence beyond measure are three things that come to mind whenever the Maldives is mentioned. Whilst the country is famous for its unique beauty and extravagant resorts, it is not solely dedicated to the wealthy tourist – it offers various accommodation options catering to a diverse range of preferences. These facilities are broadly categorized into four types: resorts, hotels, guesthouses and liveaboards.</p>
                        <p className="testimonial-text">For the year 2021, marketing activities and campaigns carried out by Visit Maldives will have a significant focus on promotion of local tourism and guesthouses</p>
                      
                    </div> 
                </div> 
                <div className="col-lg-7">
                    <div className="image-container">
                        <img className="img-fluid" src={hotel} alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
     </>
    );
}