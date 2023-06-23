import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditsSlice";
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from "../../store/redditSlice";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <h2 class="mt-4 hidden text-center text-2xl text-white lg:block">
        Subreddits
      </h2>
      <ul>
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            class={`text-white hover:bg-slate-500 ${
              selectedSubreddit === subreddit.url && `bg-purple-800`
            } `}
          >
            <button
              class="mx-2 mb-2 mt-2 flex items-center text-xs lg:mx-2 lg:mb-8 lg:mt-8"
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                class="mr-4 h-9 w-9 rounded-full"
              />
              <span class="hidden lg:block">{subreddit.display_name}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Subreddits;
