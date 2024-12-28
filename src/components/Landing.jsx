const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="landing-img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-4 md:w-[600px] max-w-full mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra facilisis velit, in aliquet nunc consectetur in.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium"
          >
            Discover Now
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
