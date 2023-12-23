import { useEffect } from "react";
const changeTitle = async (props: any) => {
  document.title = props.title;
};

function About(props: any) {
  useEffect(() => {
    changeTitle(props);
  });

  return (
    <div className="container">
      <div className="mt-8">
        <h1 className="text-black dark:text-white text-xl font-semibold mb-4">About</h1>
        <p className="mb-4 text-black  dark:text-white">
          Hi, I'm Tiago, a software engineer from Portugal — 🇵🇹.
        </p>
        <p className="mb-4 text-black dark:text-white">
          In the dynamic realm of technology, I find myself immersed in a
          journey of growth, fueled by a passion for learning. Currently, my
          focus is on mastering React, where I'm building different projects to
          learn the quirks of the framework.
        </p>
        <p className="mb-4 text-black dark:text-white">
          Yet, my aspirations extend beyond the world of React. Looking toward
          the horizon, I am eager to venture into the expansive field of cloud
          technology.
        </p>
        <h1 className="text-black dark:text-white text-xl font-semibold mb-4">
          Professional Experience
        </h1>
        <ul className="text-black dark:text-white list-inside list-disc mb-4">
          <li>
            Software Engineer @{" "}
            <a
              href="https://www.mobileum.com/"
              className="underline hover:underline-anchor"
            >
              Mobileum
            </a>{" "}
            | October 2021 - present
          </li>
        </ul>
        <h1 className="text-black dark:text-white text-xl font-semibold mb-4">Education</h1>
        <ul className="text-black dark:text-white list-inside list-disc mb-4">
          <li>
            Bachelor degree @{" "}
            <a
              href="https://www.ufp.pt/inicio/estudar-e-investigar/licenciaturas/engenharia-informatica/"
              className="underline hover:underline-anchor"
            >
              UFP
            </a>{" "}
            | September 2018 - July 2021
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
