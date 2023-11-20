/* eslint-disable react/prop-types */


const SectionTitle = ({title, heading}) => {
    return (
        <div className="w-4/12 text-center mx-auto my-8 ">
            <p className=" text-yellow-600 my-4">---{title}---</p>
            <p className="text-4xl uppercase border-y-2 py-4">{heading}</p>

        </div>
    );
};

export default SectionTitle;