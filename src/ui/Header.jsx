import CurrentLocation from './CurrentLocation';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="col-[1_/_-1] row-[1_/_2] flex  items-center justify-between px-10 py-8">
      <Logo />
      <SearchBar />
      <CurrentLocation />
    </header>
  );
}

export default Header;
