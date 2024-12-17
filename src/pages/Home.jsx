import React from "react";
import { PageTitle } from "../components";
import { Description, Header, Introduction } from "../containers";

const Home = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <Description />
      <div id="about" className="flex justify-center w-full bg-primary">
        <PageTitle title="A-propos" />
      </div>
      <Introduction setShowMenu={setShowMenu} showMenu={showMenu} />
      <footer className="w-full bg-black h-[200px] flex justify-center items-center">
        <h4 className="text-white uppercase ">
          designed & Developed by{" "}
          <a className="font-bold text-basic" href="https://williamhortone.com">
            William Hortone
          </a>
        </h4>
      </footer>
    </>
  );
};

export default Home;
