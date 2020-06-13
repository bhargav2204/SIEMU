import React from "react";
import "../../../app/styles.css";
import { Card, Pagination } from "react-rainbow-components";
import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faPencilAlt,
  faStore,
  faPlus,
  faBell,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const carouselContainerStyles = {
  maxWidth: 1200,
  height: 560,
  padding: 20,
};
export default function ProductDetails() {
  return <div className="bg-image ">

    <CarouselCard className="rainbow-m_auto" style={carouselContainerStyles}>

    
       
          <CarouselImage
            src="../../assets/ConsumerProduct/c2.jpg"
            href="/#/Components/CarouselCard"
            header="Second Card"
            description="Second card description. dafe vs vs"
            description="Second card accessible description. dcdc dfsefef sfserfref vrf"
          />
<div>
  sdsdj sdcnsf
</div>






          <CarouselImage
            src="../../assets/ConsumerProduct/c5.jpg"
            header="Second Card"
            description="Second card description."
            alternativeText="Second card accessible description."
            href="/#/Components/CarouselCard"
          />




          <CarouselImage
            src="../../assets/ConsumerProduct/c6.jpg"
            header="Third Card"
            description="Third card description."
            alternativeText="Third card accessible description."
            href="/#/Components/CarouselCard"
          />


       
    </CarouselCard>
  </div>
}
