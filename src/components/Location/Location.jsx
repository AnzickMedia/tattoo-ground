import React, { useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./Location.scss";
import { IoIosArrowDown } from "react-icons/io";


const Location = ({ all }) => {

  const [desplegar, setDesplegar] = useState(false)

  console.log(desplegar);
  return (
    <div className="o-location-container">
      <div className="o-location-left">
        <h3>LOCATION</h3>
        <input type="text" placeholder="Location" />
        <IoIosArrowDown className={desplegar ? `arrow-dissapear`:`arrow`} size='2rem' onClick={()=>setDesplegar(!desplegar)}/>

        <div className={desplegar ? `o-form-container-activo`: `o-form-container`}>
          <h3>DATE</h3>
          <form>
            <label>
              <input type="radio" name="radio" checked />
              <span>Any day</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Today</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>This week</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>This month</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>This year</span>
            </label>
          </form>
          
        </div>

        <div className={desplegar ? `o-form-container-activo`: `o-form-container`}>
          <h3>PRICE</h3>
          <form>
            <label>
              <input type="radio" name="radio" checked />
              <span>Any price</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Free</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Paid</span>
            </label>
            
          </form>
          
        </div>

        <div className={desplegar ? `o-form-container-activo`: `o-form-container`}>
          <h3>FORMAT</h3>
          <form>
            <label>
              <input type="radio" name="radio" checked />
              <span>Any format</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Festival</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Convention</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Expo</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Conference</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Seminar</span>
            </label>
            
          </form>
          
        </div>
        <IoIosArrowDown className={desplegar ? `arrow-active`:`arrow-dissapear`} size='2rem' onClick={()=>setDesplegar(!desplegar)}/>
      </div>
      <div className="o-location-middle">
        <LocationCard all={all} />
      </div>
      <div className="o-location-right">
        {/*OJO VERSION SOLO PARA PRUEBA, INTEGRAR MAP CON LA API OFICIAL DE GOOGLE*/}
        <iframe
          title="iframe map"
          className="imap"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
