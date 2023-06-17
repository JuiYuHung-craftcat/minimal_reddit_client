import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div class="border border-black my-4 mx-2 hover:bg-pink-100">
      <div class="flex">
        <img
          class="w-8 h-8 m-2 border border-gray-800"
          src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${comment.author}`}
          alt={`${comment.author} profile`}
        />
        <p class="m-2 text-lg">{comment.author}</p>
        <p class="m-2 text-lg">{moment.unix(comment.created_utc).fromNow()}</p>
      </div>
      <div class="mx-2">
        <ReactMarkdown>{comment.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Comment;
