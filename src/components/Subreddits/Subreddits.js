import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditsSlice';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <h2 class="text-center text-white text-2xl mt-4">Subreddits</h2>
      <ul>
        {subreddits.map((subreddit) => (
          <li key={subreddit.id}
            class={`text-white hover:bg-slate-500 ${selectedSubreddit === subreddit.url && `bg-english_red`} `}
          >
            <button class="flex items-center text-sm mt-8 mb-8 mx-4" type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
              <img src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                alt={`${subreddit.display_name}`}
                class="w-9 h-9 mr-4 rounded-full"
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
};
export default Subreddits;
