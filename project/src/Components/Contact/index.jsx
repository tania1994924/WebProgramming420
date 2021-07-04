import {Link} from "react-router-dom";
import experience from '../../static/images/experience.jpg';
export default function Contact(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
      <div id="callMe" className="form-1 ">
    <div className="container">
        <div className="row"> 
            <div className="col-lg-6 offset-lg-3">
                <form id="callMeForm" data-toggle="validator" data-focus="false">
                    <div className="form-group">
                        <input type="text" className="form-control-input" id="lname" name="lname" required/>
                        <label className="label-control" for="lname">Name</label>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control-input" id="lphone" name="lphone" required/>
                        <label className="label-control" for="lphone">Phone</label>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control-input" id="lemail" name="lemail" required/>
                        <label className="label-control" for="lemail">Email</label>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <select className="form-control-select" id="lselect" required>
                            <option className="select-option" value="" disabled selected>Interested in...</option>
                            <option className="select-option" value="places">Maldives Places</option>
                            <option className="select-option" value="plan">Maldives Plans</option>
                            <option className="select-option" value="experience">Maldives Experiences</option>
                        </select>
                        <div className="help-block with-errors"></div>
                    </div>
            
                    <div className="form-group">
                        <button type="submit" className="form-control-submit-button">CALL ME</button>
                    </div>
                    <div className="form-message">
                        <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                    </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                
      </>
   );
}