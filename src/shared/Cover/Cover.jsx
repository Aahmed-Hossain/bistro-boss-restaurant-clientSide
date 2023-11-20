/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax'
const Cover = ({ img, title }) => {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt=""
        strength={-300}
    >
       <div className="hero h-[25rem]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl relative p-4 px-16">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="mb-5 text-5xl font-bold text-white z-10 relative">
            {title}
          </h1>
          <p className="mb-5 text-white z-10 relative">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
    </Parallax>
  );
};
export default Cover;
