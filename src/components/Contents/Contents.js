import Subreddits from "../Subreddits/Subreddits";
import Home from "../Home/Home";

const Contents = () => {
  return (
    <div class="flex min-h-fit bg-gradient-to-r from-sky-800 to-sky-100">
      <div class="w-full">
        <h2 class="pt-8 text-center text-4xl text-white">Posts</h2>
        <Home />
      </div>
      <aside class="float-right min-h-fit w-14 bg-sky-800 shadow-xl shadow-black lg:w-96">
        <Subreddits />
      </aside>
    </div>
  );
};

export default Contents;
