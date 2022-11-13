import React from "react";
import "../styles/Home.scss";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Home = () => {
  let icons = [
    {
      id: 1,
      title: "Google",
      element: AiFillGoogleCircle,
      delay: "0.3s",
    },
    {
      id: 2,
      title: "Instagram",
      element: AiFillInstagram,
      delay: "0.5s",
    },
    {
      id: 3,
      title: "Twitter",
      element: AiFillTwitterCircle,
      delay: "0.7s",
    },
    {
      id: 4,
      title: "Linkedin",
      element: AiFillLinkedin,
      delay: "0.9s",
    },
  ];
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>MYTech</h1>
          <p>Solution of your Problems</p>
        </main>
      </div>
      <div className="banner">
        <main>
          <img src={vg} alt="graphics" />
          <div>
            <p>
              We are your one and only solution to the tech problems you face
              every day. We are leading tech company whose aim is to increase
              the problem solving ability in children.
            </p>
          </div>
        </main>
      </div>
      <div className="about" id="about">
        <div>
          <h1>who we are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae enim
            delectus voluptatum velit et animi vero perferendis! Eum voluptas,
            ad nulla cumque, ducimus, quod voluptatum saepe velit laboriosam
            unde sed? Aspernatur consectetur quae sed at vitae dicta eum quidem
            doloremque in incidunt reiciendis mollitia molestias, tenetur iure
            dolore veritatis delectus. Porro ducimus exercitationem soluta culpa
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            {icons.map((item) => {
              return (
                <div key={item.id} style={{ animationDelay: item.delay }}>
                  {<item.element />}
                  <p>{item.title}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
