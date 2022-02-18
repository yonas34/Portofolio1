import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./Components/TopNav";
import { Parallax } from "react-parallax";
import pages from "./Imps";
const Par = () => {
  console.log(pages);
  const images = {
    width: "100%"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  const image1 =
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=1000";
  const image2 =
    "https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&h=1000";
  const image3 =
    "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&h=1000";
  const image4 =
    "https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=1000";
  const pg = [
    ,
    { img: image4, page: pages.Gallery },
    { img: image2, page: pages.Services },
    { img: image4, page: pages.Qualification },
    { img: image3, page: pages.Testimony },
    { img: image2, page: pages.About }
  ];
  return (
    <div>
      <Parallax bgImage={image1} style={images} strength={500}>
        <div style={{ height: "70vh" }}>
          <div style={insideStyles}>{pages.Home}</div>
        </div>
      </Parallax>
      {pg.map((page) => (
        <Parallax key={page.page} bgImage={page.img} blur={{ min: -1, max: 3 }}>
          <div style={{ height: "500px" }}>
            <div style={insideStyles}>{page.page}</div>
          </div>
        </Parallax>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <TopNav />
      <Par />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
