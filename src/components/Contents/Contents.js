import Subreddits from '../Subreddits/Subreddits';
import Home from '../Home/Home';

const Contents = () => {
  return (
    <div class="bg-gradient-to-r from-dull_violet_black to-hay_russet min-h-fit flex">
      <div class="w-full">
        <h2 class="text-center text-4xl text-white pt-8">Posts</h2>
        <Home />
      </div>
      <aside class="hidden lg:block float-right w-96 min-h-fit bg-dull_violet_black shadow-xl shadow-black">
        <Subreddits />
      </aside>
    </div>
  )
}

export default Contents;
