import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-center lg:text-left">
      <div className="p-4 text-center text-black dark:text-lightgray ">
        © 2023 Copyright: Tiago Rodrigues |
        <Link key="Home" to="/" className="hover:underline">
          Home
        </Link>{" "}
        |
        <Link key="About" to="about" className="hover:underline">
          About
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
