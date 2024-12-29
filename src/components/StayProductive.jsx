const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive-img"
          />
        </div>
        <div className="text-white">
          <h3 className="text-[35px] font-medium leading-[50px] ">
            Stay Productive, <br /> wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              omnis. Quaerat consectetur, quasi nostrum quibusdam. Eius,
              expedita!
            </p>
            <br />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              omnis. Quaerat consectetur, quasi nostrum quibusdam. Eius,
              expedita!
            </p>
          </div>
          <a
            href="/"
            className="text-primary flex items-center gap-[15px] pb-[5px] w-fit  hover:text-[#42b0d1] border-b-2 border-primary border-solid transition-colors duration-200"
          >
            See How Fylo Works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
