import moment from "moment";
import ReactMarkdown from "react-markdown";

const Comment = (props) => {
  const { comment } = props;
  return (
    <div class="mx-1 my-1 border border-black hover:bg-pink-100 lg:mx-2 lg:my-4">
      <div class="lg:flex">
        <img
          class="m-1 h-3 w-3 border border-gray-800 lg:m-2 lg:h-8 lg:w-8"
          src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${comment.author}`}
          alt={`${comment.author} profile`}
        />
        <p class="m-1 text-xs lg:m-2 lg:text-lg">{comment.author}</p>
        <p class="m-1 text-xs lg:m-2 lg:text-lg">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <div class="mx-1 lg:mx-2">
        <ReactMarkdown>{comment.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Comment;
