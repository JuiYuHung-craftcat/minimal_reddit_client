import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Navbar = () => {

  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(setSearchTerm(searchTermLocal));
  }

  return (
    <header class="h-20 flex justify-between bg-slate-900">
      <Link to="/" class="w-40 lg:w-80 mt-8 lg:mt-6 pl-8 text-white text-bold text-lg lg:text-4xl text-left">Reddit<span class="text-blue-600">Minimal</span></Link>
      <div class="w-80 mt-8 ml-4 lg:mt-6">
        <form onSubmit={onSearchTermSubmit}>
          <label for="search" class="text-white text-bold text-lg lg:text-2xl text-center">Search:</label>
          <input type="text" id="search" name="search" class="ml-2 w-10 lg:w-40" onChange={onSearchTermChange} />
        </form>
      </div>
      <Link to="/about" class="w-40 lg:w-80 mt-8 lg:mt-6 pr-8 text-white text-bold text-lg lg:text-2xl text-right">About</Link>
    </header>
  )
}

export default Navbar;
