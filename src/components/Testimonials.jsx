import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      name: "John Doe",
      title: "Founder & CEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum. Sed vel rutrum tellus, ut consectetur ipsum.",
      image: "profile-1.jpg",
    },
    {
      name: "Martin Doe",
      title: "Marketing Manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum. Sed vel rutrum tellus, ut consectetur ipsum.",
      image: "profile-2.jpg",
    },
    {
      name: "Alice Doe",
      title: "Customer Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum. Sed vel rutrum tellus, ut consectetur ipsum.",
      image: "profile-3.jpg",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((data, index) => {
            return (
              <TestimonialCard
                key={index}
                name={data.name}
                title={data.title}
                desc={data.desc}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
