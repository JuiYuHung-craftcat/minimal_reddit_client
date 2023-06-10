import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <header class="h-20 flex justify-between bg-slate-900">
      <Link to="/" class="w-80 mt-4 pl-8 text-white text-bold text-4xl text-left">Reddit<span class="text-blue-600">Minimal</span></Link>
      <div class="w-80 mt-6">
        <form onSubmit={onSearchTermSubmit}>
          <label for="search" class="text-white text-bold text-2xl text-center">Search:</label>
          <input type="text" id="search" name="search" class="ml-2" />
        </form>
      </div>
      <Link to="/about" class="w-80 mt-6 pr-8 text-white text-bold text-2xl text-right">About</Link>
    </header>
  )
}

export default Navbar;
