import Subreddits from '../Subreddits/Subreddits';

const Contents = () => {
  return (
    <div class="bg-gradient-to-r from-dull_violet_black to-hay_russet min-h-fit flex">
      <div class="w-full">
        <h2 class="text-center text-4xl pt-8">Building...</h2>
      </div>
      <aside class="float-right w-96 min-h-fit bg-dull_violet_black shadow-xl shadow-black">
        <Subreddits />
      </aside>
    </div>
  )
}

export default Contents;
