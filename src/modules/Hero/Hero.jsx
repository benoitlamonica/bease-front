import React from "react";
import { LogoS } from "../../assets/img/logo";
import ButtonLink from "../../components/ButtonLink";
import HeroSnippet from "./components/HeroSnippet";
import snippetContent from "./components/HeroSnippet/content";
import style from "./Hero.module.scss";

function Hero() {
  const snippetConstructor = () => {
    return snippetContent.map((snipCnt, key) => {
      return (
        <HeroSnippet
          key={key}
          content={{
            title: snipCnt.title,
            text: snipCnt.text,
          }}
        />
      );
    });
  };
  return (
    <div
      className={`${style.hero} flex-inline responsive gap-50 align-items-center flex-center`}
    >
      <div className={`${style.heroImg} flex-basis-40`}>
        <img src={LogoS} alt="Main icon" />
      </div>
      <div className={`${style.heroContent} flex-basis-60`}>
        <h2>Create your own Discord bot with ease !</h2>
        <p>
          Everything is already set up ! You just have to link your discord bot
          and then do some logic of your own ... 😋
        </p>

        <ButtonLink to="/getstarted" colorTheme="white">
          Get Started ! 😃
        </ButtonLink>
        <ButtonLink
          router={false}
          to="https://github.com/benoitlamonica/easydiscordbot"
          colorTheme="grey"
        >
          View on GitHub <i className="fab fa-github"></i>
        </ButtonLink>
      </div>
      <div
        className={`${style.heroSnippetContainer} flex-inline responsive gap-50 align-items-start flex-between`}
      >
        {snippetConstructor()}
      </div>
    </div>
  );
}

export default Hero;
