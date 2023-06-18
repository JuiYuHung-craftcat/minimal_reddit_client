import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage
} from 'react-icons/ti';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import Comment from '../Comment/Comment';

const Post = (props) => {
  const [voteValue, setVoteValue] = useState(0);

  const { post, onToggleComments } = props;

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick />;
    }
    return <TiArrowUpOutline />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick />
    }
    return <TiArrowDownOutline />
  };

  const getVoteType = () => {
    if (voteValue === 1) {
      return 'up-vote';
    }
    if (voteValue === -1) {
      return 'down-vote';
    }
    return '';
  };

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <article class="bg-gray-300 mx-12 my-12 flex" key={post.id} >
      <div class="text-sm lg:text-2xl mx-4">
        <button class="my-2" type="button" onClick={() => onHandleVote(1)} aria-label="Up vote">
          {renderUpVote()}
        </button>
        <p>
          {shortenNumber(post.ups, 1)}
        </p>
        <button class="my-2" type="button" onClick={() => onHandleVote(-1)} aria-label="Down vote">
          {renderDownVote()}
        </button>
      </div>
      <div class="text-sm lg:text-2xl w-full">
        <h3 class="my-2">{post.title}</h3>
        <div class="my-2 mr-4">
          <img src={post.url} alt="" />
        </div>
        <div class="lg:flex lg:justify-between my-2">
          <span class="flex">
            <img
              class="w-8 h-8 mx-2 border border-gray-800"
              src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${post.author}`}
              alt={`${post.author} profile`}
            />
            <span>{post.author}</span>
          </span>
          <span>{moment.unix(post.created_utc).fromNow()}</span>
          <span class="mr-4">
            <button class="mx-2" type="button" onClick={() => onToggleComments(post.permalink)} aria-label="Show comments" >
              <TiMessage />
            </button>
            {shortenNumber(post.num_comments, 1)}
          </span>
        </div>
        {renderComments()}
      </div>
    </article>
  );

};

export default Post;

