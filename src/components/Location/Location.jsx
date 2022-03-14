import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./Location.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Location = ({ all }) => {
  return (
    <div className="o-location-container">
      <div className="o-location-left">
       
          <FormControl>
            <FormLabel id="dates">DATE</FormLabel>
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
            <FormLabel id="price">PRICE</FormLabel>
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
       
      </div>
      <div className="o-location-middle">
        <LocationCard all={all} />
      </div>
      <div className="o-location-right">
        {/*OJO VERSION SOLO PARA PRUEBA, INTEGRAR MAP CON LA API OFICIAL DE GOOGLE*/}
        <iframe
          className="imap"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
