/* eslint-disable react/prop-types */

const Menus = ({item}) => {
    const {image, name,recipe, price} = item;
    return (
        <div className="flex space-x-3 space-y-4 ">
            <img style={{borderRadius: '0 150px 150px 150px'}} className="w-[6rem]" src={image} alt="" />
            <div>
                <h2 className="uppercase text-xl font-semibold ">{name}</h2>
                <p >{recipe}</p>
            </div>
            <p className="text-yellow-500 font-semibold  "> ${price}</p>
        </div>
    );
};

export default Menus;