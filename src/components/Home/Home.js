import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Post from '../Post/Post';
import PostLoading from '../PostLoading/PostLoading';
import getRandomNumber from '../../utils/getRandomNumber';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments
} from '../../store/redditSlice';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit))
  }, [selectedSubreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    }
    return getComments;
  };
  // TODO isLoading remove for debug
  if (1) {
    return (
      <div>
        {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
      </ div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div>
        <h2>No posts matching "{searchTerm}"</h2>
        <button
          type="button"
          onClick={() => dispatch(setSearchTerm(''))}
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>

    </>
  );

};

export default Home;


