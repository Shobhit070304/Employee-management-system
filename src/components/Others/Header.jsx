const Header = ({ data }) => {
  const handleLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.href = "/login";
  };
  return (
    <div className="w-full flex justify-between items-center px-10">
      <h1 className="text-xl font-semibold">
        Hello <br /> <span className="text-3xl font-bold">{data?.name} 👋</span>{" "}
      </h1>
      <button
        className="text-white px-4 py-3 tecxt-2xl bg-red-500 hiver:bg-red-600 rounded-md"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
