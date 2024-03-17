import Turtle from "../assets/Turtle";

const Header = () => {
  return (
    <header className="absolute w-full inset-0 flex p-12 items-center gap-4 text-primary-500 font-semibold text-4xl h-fit mb-2 sm:mb-0">
      <Turtle color="#EAB308" size="100" />
      <span>Typing Turtle</span>
    </header>
  );
};

export default Header;
