import useAuth from "../Hooks/useAuth";

const Google = () => {
  const { githubLogin,googleLogin } = useAuth();
  const handleGithub = () => {
    githubLogin().then((result) => {
     console.log(result.user);
    }).catch((error) => {
     console.log(error.message);
    });
  };
  const handleGoogle = () => {
    googleLogin().then((result) => {
     console.log(result.user);
    }).catch((error) => {
     console.log(error.message);
    });
  };
  return (
    <div className="flex items-center gap-2">
      <button onClick={handleGoogle} className="btn btn-sm w-full ">
        <img
          src="https://i.postimg.cc/jdCrbHMW/Logo-google-icon-PNG.png"
          alt=""
          className="w-[15px]"
        />
        Google
      </button>{" "}
      <button onClick={handleGithub} className="btn btn-sm w-full ">
        <img
          src="https://i.postimg.cc/YSpfTxfk/github-logo.png"
          alt=""
          className="w-[15px]"
        />
        Github
      </button>
    </div>
  );
};

export default Google;
