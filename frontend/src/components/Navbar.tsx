const NavBar = () => {
  return (
    <div className="grid  bg-gray-900 text-gray-200 grid-cols-2 h-14 fixed w-full z-10">
      <div className="flex">
        <button className="mx-5">Icon</button>
      </div>
      <div className="flex justify-evenly">
        <button>About</button>
        <button>Projects</button>

        <button>Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
