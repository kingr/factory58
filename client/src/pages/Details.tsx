import { useParams }from "react-router-dom";

const Details = () => {
  const { name } = useParams();

  return (
    <div className="details">
      <div style={{marginTop: "10px"}}>
        <h1>I'm {name}!</h1>
        <p style={{marginTop: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

export default Details;