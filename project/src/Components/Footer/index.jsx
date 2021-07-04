import {Link} from "react-router-dom";
export default function Footer(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <><div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2020</p>
                </div> 
            </div> 
        </div> 
    </div> 
    </>
   );
}