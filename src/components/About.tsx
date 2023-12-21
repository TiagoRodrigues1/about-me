import { useEffect } from "react";
const changeTitle = async (props: any) => {
  document.title = props.title;
};

function About(props: any) {
  useEffect(() => {
    changeTitle(props);
  });

  return (
    <div>
      <p>about</p>
    </div>
  );
}

export default About;
