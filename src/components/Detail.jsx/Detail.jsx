import Banner from '../Banner/Banner';
import Card from '../Cards/Card';
import Slider from 'react-slick';
import { music } from '../../data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Detail = () => {
  
  const settings = {
    className: 'center',
    infinite: false,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 2,
    initialSlide: 0,
   
  };

  return (
    <div className="recent flex-[3] p-5 h-[79vh] overflow-y-scroll">
      <Banner />
      <h1 className="font-semibold my-6 text-[40px]">Popular Albums</h1>
      <Slider {...settings}>
        {music.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Detail;
