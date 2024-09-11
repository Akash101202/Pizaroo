import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/users/UserName";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="mb-4 flex h-16 items-center justify-between rounded-b-xl border-b border-stone-200 bg-cyan-600 px-4 py-3 uppercase sm:px-6">
      <Link className="flex">
        <img src={Logo} alt="" className="h-[100px] w-[100px] object-contain" />
      </Link>
      <Link to="/" className="font-bold tracking-widest text-stone-100">
        Pizaroooo
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
