import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

function ChangeTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (e: any) => {
    e.preventDefault();
    let theme =
      e.currentTarget.getAttribute("data-toggle-dark") === "dark" ? "light" : "dark";
    setTheme(theme);
    e.currentTarget.setAttribute("data-toggle-dark", theme);
  };

  return (
    <div>
      <button
        onClick={handleThemeChange}
        data-tooltip-target="default-button-example-toggle-dark-mode-tooltip"
        type="button"
        data-toggle-dark="dark"
        className="transition ease-in-out flex items-center w-9 h-9 justify-center text-xs font-medium text-white bg-darkWhite dark:bg-black rounded-lg dark:bg-gray hover:scale-150 duration-300"
      >
        <svg
          data-toggle-icon="moon"
          className="w-3.5 h-3.5 block dark:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 18 20"
        >
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        </svg>
        <svg
          data-toggle-icon="sun"
          className="w-3.5 h-3.5 hidden dark:block"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 20 20"
        >
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
        <span className="sr-only">Toggle dark/light mode</span>
      </button>
    </div>
  );
}

export default ChangeTheme;
