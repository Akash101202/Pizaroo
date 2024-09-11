import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/users/UserName";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="flex">
        <img src={Logo} alt="" className="h-[100px] w-[100px] object-contain" />
      </Link>
      <Link to="/" className="tracking-widest">
        Pizaroooo
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
