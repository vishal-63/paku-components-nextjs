import styled from "styled-components";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const MapWrapper = styled.div`
  width: 50%;
  height: 450px;
  overflow: hidden;

  &.contact-page {
    width: auto;
    max-width: 99vw;
    overflow: hidden;
  }

  &.contact-page .map {
    position: relative;
    width: 100% !important;
    max-width: 99vw !important;
    height: 450px !important;
    overflow: hidden;
  }

  & .map {
    position: relative;
    width: 50% !important;
    height: 450px !important;
    overflow: hidden;
  }

  @media (max-width: 540px) {
    width: 100%;
    height: 300px;
    margin-top: 1rem;

    & .map,
    &.contact-page .map {
      width: 100% !important;
      height: 300px !important;
    }
  }
`;

const MapComponent = ({ page }) => {
  return (
    <LazyLoadComponent>
      <MapWrapper className={page === "contact" ? "contact-page" : ""}>
        <Map
          className="map"
          google={window.google}
          zoom={15}
          initialCenter={{ lat: 12.9396425, lng: 77.5572237 }}
        >
          <Marker />
        </Map>
      </MapWrapper>
    </LazyLoadComponent>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSEq_IJNSy4HV6g552uOmNf5g5B0F43lM",
})(MapComponent);
