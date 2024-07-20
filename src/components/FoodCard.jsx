const FoodCard = ({ title, description, imageUrl, price }) => {
  return (
    <div className="card bg-primary bg-opacity-40 w-72 shadow-xl p-3 mx-2">
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <p className=" text-black  btn-circle btn-ghost py-3 px-2  bg-secondary bg-opacity-50">
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
