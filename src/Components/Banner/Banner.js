import React, {useState} from "react";
import Button from '@mui/material/Button';
import './Banner.scss'

const Banner = () => {
  const [showDates, setShowDates] = useState(false)

  return (
    <div className="banner">
      <div className="banner-search">
        {showDates && <span>Hide</span>}
        <Button
          className="banner-search__button"
          onClick={() => setShowDates(!showDates)}
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner-info">
        <h1>Get out and strech yout imagination</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  )
}

export default Banner
