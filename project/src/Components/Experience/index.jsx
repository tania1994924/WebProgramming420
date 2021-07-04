import {Link} from "react-router-dom";
import experience from '../../static/images/experience.jpg';
export default function Experience(props) {
  const preventDefault = (event) => event.preventDefault();
   return (
      <>
      <div id="intro" class="basic-1">
        <div class="container">
        <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="content-header">
                        <h1 class="page-title">The Story of Bodu Mas and Koadi Kendun</h1>
                     </div>
                </div>
            </div>
            <div class="row">
            <div class="col-lg-8 offset-lg-2">
    
            <figure class="figure mb-0 ">
             <img src={experience} class="figure-img img-fluid mb-0 "/>
                </figure>

            </div>
            </div> 
            <div class="row">
    
            <div class="col-lg-8 offset-lg-2 text-justify">
            <p>There are many folklores which offer keen insights into the history, culture and beliefs of Maldivians. These folk tales are bursting with magic, spirits, demons, monsters and sorcerers often depicted in books, movies and cultural activities.&nbsp;
            </p>
            <p>With Eid al-Adha falling tomorrow, the story of Bodu Mas (or big fish) is quite an interesting tale to have a look at. Bodu Mas is the most anticipated celebration of the day; it sees islanders gather and fishermen catch a big fish made out of woven coconut palm leaves. “Bodu'' means big whereas “Mas” means fish. This celebration is followed by “Maali Neshun'', a traditional form of dance performed by a group of people painted and dressed up as evil spirits and ghosts. This tradition is based on an ancient folklore in which a Bodu Mas (a big fish) along with Maali (ghosts) had come out from the sea and a struggle to catch this fish ensued. After a long struggle, the villagers are said to have succeeded with the help of a holy man.</p>
            <p>Koadi Kendun (cutting down of a wooden stick) is celebrated together with Bodu Mas. Men from the island join together to adorn the “Koadi”, a wooden stick crafted from a coconut palm, decorated with coconut palm leaves. When it is evening, the koadi is brought out and a dance is performed around it. The dancers wear African inspired costumes, made from coconut palm leaves and paint; the costumes change every year as pop culture has a heavy influence on inspiration and creativity. The koadi is then tied to the top of a coconut palm and a playful game begins where the women are to protect the koadi from the men as they try to cut the koadi down. The man who succeeds is rewarded by a bathe in the sea, followed by a glorious feast.</p>
            </div>

            </div>
        </div> 
    </div> 
      
      </>
   );
}