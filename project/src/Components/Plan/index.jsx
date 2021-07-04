import {Link} from "react-router-dom";
import plan1 from "../../static/images/plan1.jpg";
import plan2 from "../../static/images/plan2.jpg";
import plan3 from "../../static/images/plan3.jpg";
export default function Plan(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
    <div id="services" className="cards-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2>Choose The PLAN<br/> That Suits Your Needs</h2>
            </div> 
        </div> 
        <div className="row">
            <div className="col-lg-12">
                
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={plan1} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">FUN SIDE OF LIFE</h3>
                        <p>The Maldives offers a host of facilities and opportunities to fuel your sense of excitement. Whether you are staying on a plush resort, a hotel in Male’, or in a simple guesthouse on an island</p>
                       
                        </div>
                    <div className="button-container">
                        <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                    </div> 
                </div>
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={plan2} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">COLORFUL SIDE OF LIFE</h3>
                        <p>The Maldives is blessed with about 5% of the global reef area, and 250 species of coral teeming with over 1000 species of fish.  Nearly half those who visit the Maldives snorkel</p>
                        </div>
                    <div className="button-container">
                        <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                    </div> 
                </div>
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src={plan3} alt="alternative"/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">ROMANTIC SIDE OF LIFE</h3>
                        <p>No matter where you stay in the Maldives, there’s a sense of romance that you cannot evade. Love is in the air, wherever you are.</p>
                        </div>
                    <div className="button-container">
                        <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                    </div> 
                </div>
                

            </div> 
        </div> 
    </div> 
</div>
      </>
   );
}