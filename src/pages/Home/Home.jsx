import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import Review from "../../components/Review/Review";
import PopularMenu from './../../components/PopularMenu/PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;