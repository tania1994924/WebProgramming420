import {Link} from "react-router-dom";
import dive from "../../static/images/diving.jpg";
import places2 from "../../static/images/places2.jpg";
export default function Place(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
      <div id="intro" class="basic-1">
        <div class="container">
        
            <div class="row">
                <div class="col-lg-7">
                    <div class="text-container">
                        <div class="section-title"></div>
                        <h2>Choose the Plan that Suits you</h2>
                        <p>Crystal clear seas, powdery white sand and indulgence beyond measure are three things that come to mind whenever the Maldives is mentioned. Whilst the country is famous for its unique beauty and extravagant resorts, it is not solely dedicated to the wealthy tourist – it offers various accommodation options catering to a diverse range of preferences. These facilities are broadly categorized into four types: resorts, hotels, guesthouses and liveaboards.</p>
                        <p class="testimonial-text">For the year 2021, marketing activities and campaigns carried out by Visit Maldives will have a significant focus on promotion of local tourism and guesthouses</p>
                      
                    </div> 
                </div> 
                <div class="col-lg-5">
                    <div class="image-container">
                        <img class="img-fluid" src={dive} alt="alternative"/>
                    </div> 
                </div> 
            </div> 
            <div className="row">
            <div class="col-lg-6">
                    <div class="image-container">
                        <img class="img-fluid" src={places2} alt="alternative"/>
                    </div> 
                </div>
            </div>
        </div> 
    </div> 
      
      </>
   );
}