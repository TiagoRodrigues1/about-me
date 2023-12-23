import { useEffect } from "react";

const changeTitle = async (props: any) => {
  document.title = props.title;
};

function Home(props: any) {
  useEffect(() => {
    changeTitle(props);
  });

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="md:mt-8">
            <h1 className="text-black dark:text-white text-xl font-semibold mb-4">
              Hello 👋
            </h1>
            <p className="mb-4 text-black dark:text-white">
              I'm Tiago, a software engineer from Portugal.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 sm:items-center ">
              <p className="text-black dark:text-white">Find me at </p>
              <ul className="flex flex-1 items-center gap-x-4 sm:flex-initial">
                <li>
                  <a
                    className="inline-block p-2 "
                    href="https://github.com/TiagoRodrigues1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-6 w-6 svg"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                    <span className="sr-only">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block p-2"
                    href="https://www.linkedin.com/in/josetiagorodrigues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-6 w-6 svg"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <title>linkedin</title>
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>

                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg md:ml-20 md:w-80 md:h-80 w-30 h-30 text-white max-w-xs"
              src="https://avatars.githubusercontent.com/u/51172492?v=4"
              alt="me"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
