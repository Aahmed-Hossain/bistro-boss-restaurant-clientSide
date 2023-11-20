
import img from '../../assets/home/featured.jpg'
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import './Featured.css'
const Featured = () => {
    return (
        <div  className='bgImg p-12 bg-fixed my-8 text-white' >
            <SectionTitle title={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='flex gap-20 p-20' >
            <div >
                <img src={img} alt="" />
            </div>
            <div > 
                <h3>March 20, 2023</h3>
                <h2  className='my-3'>WHERE CAN I GET SOME?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn border-b-4 border-yellow-600 outline-2 mt-8'>Read More</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;