import { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items, setItems] = useState([
    {
      title: "Access your files, anywhere",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum.",
      icon: "icon-access-anywhere.svg",
    },
    {
      title: "Real-time collaboration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum.",
      icon: "icon-collaboration.svg",
    },
    {
      title: "Security you can trust",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum.",
      icon: "icon-security.svg",
    },
    {
      title: "Store any type of file",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum tellus, ut consectetur ipsum.",
      icon: "icon-any-file.svg",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item, index) => {
            return (
              <FeatureBox
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
