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
                    <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3FM1waTeTDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    </div> 
                </div>
                <div class="col-lg-6">
                    <div class="text-container">
                        <div class="section-title"></div>
                        <h2>THRILLING SIDE OF LIFE</h2>
                        <p>If you are serious about the thrill, choose one of the resorts or a guesthouse on an island that offer them all. Bouncy banana rides with friends and family, a solo ride trimming the waves on a jet ski or skimming the lagoon at high speeds on a wakeboard, all of which would offer you that adrenaline rush that you seek to feel rejuvenated and at one with the elements.</p>
                        <p>There’s more of course. Dedicate your holiday to test the surf breaks that dot the atolls. Or if you take diving seriously you can plan your dive holiday with a range of dives with night dives and wreck dives that will sate your thirst for the underwater.</p>
                    </div> 
                </div> 
            </div>
        </div> 
    </div> 
      
      </>
   );
}