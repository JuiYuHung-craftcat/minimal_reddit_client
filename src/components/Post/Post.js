import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from "react-icons/ti";
import moment from "moment";
import shortenNumber from "../../utils/shortenNumber";
import Comment from "../Comment/Comment";

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
      return <TiArrowDownThick />;
    }
    return <TiArrowDownOutline />;
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
    <article class="mx-4 my-4 flex bg-gray-300 lg:mx-12 lg:my-12" key={post.id}>
      <div class="mx-4 text-xs lg:text-lg">
        <button
          class="my-2"
          type="button"
          onClick={() => onHandleVote(1)}
          aria-label="Up vote"
        >
          {renderUpVote()}
        </button>
        <p>{shortenNumber(post.ups, 1)}</p>
        <button
          class="my-2"
          type="button"
          onClick={() => onHandleVote(-1)}
          aria-label="Down vote"
        >
          {renderDownVote()}
        </button>
      </div>
      <div class="w-full text-xs lg:text-lg">
        <h3 class="my-2">{post.title}</h3>
        <div class="my-2 mr-4">
          <img src={post.url} alt="" />
        </div>
        <div class="my-2 lg:flex lg:justify-between">
          <span class="flex">
            <img
              class="mx-1 h-3 w-3 border border-gray-800 lg:mx-2 lg:h-8 lg:w-8"
              src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${post.author}`}
              alt={`${post.author} profile`}
            />
            <span>{post.author}</span>
          </span>
          <span>{moment.unix(post.created_utc).fromNow()}</span>
          <span class="mr-4">
            <button
              class="mx-2"
              type="button"
              onClick={() => onToggleComments(post.permalink)}
              aria-label="Show comments"
            >
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
