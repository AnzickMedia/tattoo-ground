import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./Location.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
/*import FormLabel from "@mui/material/FormLabel";*/

const Location = ({ all }) => {
  return (
    <div className="o-location-container">
      <div className="o-location-left">
       <h3>LOCATION</h3>
       <input type="text" placeholder="Location"/>

          <FormControl>
            <h3>DATE</h3>
            <RadioGroup
              aria-labelledby="dates"
              defaultValue="Any day"
              name="radio-dates"

            >
              <FormControlLabel
                value="Any day"
                control={<Radio size="small" />}
                label="Any day"
              />
              <FormControlLabel
                value="Today"
                control={<Radio size="small"/>}
                label="Today"
              />

              <FormControlLabel
                value="This week"
                control={<Radio size="small"/>}
                label="This week"
              />
              <FormControlLabel
                value="This month"
                control={<Radio size="small"/>}
                label="This month"
              />
              <FormControlLabel
                value="This year"
                control={<Radio size="small"/>}
                label="This year"
              />
            </RadioGroup>
          </FormControl>
         
          <FormControl>
          <h3>PRICE</h3>
            <RadioGroup
              aria-labelledby="price"
              defaultValue="Any price"
              name="radio-price"
            >
              <FormControlLabel
                value="Any price"
                control={<Radio size="small" />}
                label="Any price"
              />
              <FormControlLabel
                value="Free"
                control={<Radio size="small" />}
                label="Free"
              />
              <FormControlLabel
                value="Paid"
                control={<Radio size="small" />}
                label="Paid"
              />
              
            </RadioGroup>
          </FormControl>

          <FormControl>
          <h3>FORMAT</h3>
            <RadioGroup
              aria-labelledby="format"
              defaultValue="Any-format"
              name="radio-format"
            >
              <FormControlLabel
                value="Any-format"
                control={<Radio size="small" />}
                label="Any format"
              />
              <FormControlLabel
                value="Festival"
                control={<Radio size="small" />}
                label="Festival"
              />
              <FormControlLabel
                value="Convention"
                control={<Radio size="small" />}
                label="Convention"
              />
              <FormControlLabel
                value="Expo"
                control={<Radio size="small" />}
                label="Expo"
              />
              <FormControlLabel
                value="Conference"
                control={<Radio size="small" />}
                label="Conference"
              />
              <FormControlLabel
                value="Seminar"
                control={<Radio size="small" />}
                label="Seminar"
              />
              
            </RadioGroup>
          </FormControl>
       
      </div>
      <div className="o-location-middle">
        <LocationCard all={all} />
      </div>
      <div className="o-location-right">
        {/*OJO VERSION SOLO PARA PRUEBA, INTEGRAR MAP CON LA API OFICIAL DE GOOGLE*/}
        <iframe title="iframe map"
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
