import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
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
    };
    return getComments;
  };
  if (isLoading) {
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
      <div class="text-center text-2xl my-8">
        <h2 class="text-white">No posts matching "{searchTerm}"</h2>
        <button
          type="button"
          onClick={() => dispatch(setSearchTerm(''))}
        >
          <span class="text-english_red">Go Home</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );

};

export default Home;


