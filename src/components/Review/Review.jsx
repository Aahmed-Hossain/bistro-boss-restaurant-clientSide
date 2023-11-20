import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import img from '../../assets/others/quote-left 1.jpg'
const Review = () => {
  const [reviews, setReview] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        title={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col space-y-4 justify-center items-center mx-24 my-16">
              <img className="w-[5%]" src={img} alt="" />
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p>{review.details}</p>
              <h3 className="text-xl font-semibold text-yellow-500 ">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
