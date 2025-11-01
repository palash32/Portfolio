import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#282e39] px-4 md:px-10 py-3">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
