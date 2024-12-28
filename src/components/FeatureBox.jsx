const FeatureBox = ({ icon, description, title }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/src/assets/images/${icon}`}
        alt={title}
        className="w-[80px] h-[80px] object-contain"
      />
        <h3 className="text-xl font-semibold my-[15px]">{title}</h3>
        <p className="font-normal text-sm">{description}</p>
    </div>
  );
};

export default FeatureBox;
