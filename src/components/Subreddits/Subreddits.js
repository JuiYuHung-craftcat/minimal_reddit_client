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
      <h2 class="mt-4 text-center text-2xl text-white">Subreddits</h2>
      <ul>
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            class={`text-white hover:bg-slate-500 ${
              selectedSubreddit === subreddit.url && `bg-purple-800`
            } `}
          >
            <button
              class="mx-2 mb-8 mt-8 flex items-center text-sm lg:mx-4"
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                class="mr-2 h-4 w-4 rounded-full lg:mr-4 lg:h-9 lg:w-9"
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Subreddits;
