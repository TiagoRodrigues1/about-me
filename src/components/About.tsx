import { useEffect } from "react";
const changeTitle = async (props: any) => {
  document.title = props.title;
};

function About(props: any) {
  useEffect(() => {
    changeTitle(props);
  });

  return (
    <div className="flex items-center justify-center max-w-md">
      <div className="">
        <div className="md:mt-8">
          <h1 className="text-white text-xl font-semibold mb-4">About</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
