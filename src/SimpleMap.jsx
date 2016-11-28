import React, {PropTypes} from "react"
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

import iconMarker from "./assets/iconMarker.svg"
// import iconMarkerHover from "./assets/iconMarkerHover.svg"

import styles from './styles/SimpleMap.css';



const MY_API_KEY = "AIzaSyC1uIL-QClid7Q8WLgIVgVtznIJX4sbCkQ"

const Map = ({googleMaps}) => (
  // GoogleMap component has a 100% height style.
  // You have to set the DOM parent height.
  // So you can perfectly handle responsive with differents heights.
  <div className={styles.map}>
    <GoogleMap
      googleMaps={googleMaps}

      coordinates={[
        {
          title: "NSA Orlando",
          icon: iconMarker,
          position: {
            lat: 28.589852,
            lng: -81.199738,
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>Toulouse<h3>
                  <div>
                    Toulouse is the capital city of the southwestern
                    French department of Haute-Garonne,
                    as well as of the Occitanie region.
                  </div>
                </div>
              `,
            })

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            })

            // Change icon when Marker will be hovered
            // googleMaps.event.addListener(marker, "mouseover", () => {
            //   marker.setIcon(iconMarkerHover)
            // })

            googleMaps.event.addListener(marker, "mouseout", () => {
              marker.setIcon(iconMarker)
            })

            // Open InfoWindow directly
            infoWindow.open(map, marker)
          },
        }
      ]}
      center={{lat: 28.589852, lng: -81.199738}}
      zoom={8}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />
  </div>
)

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})
