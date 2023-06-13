import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from 'react-icons/ti';
import getRandomNumber from '../../utils/getRandomNumber';

const PostLoading = () => {
  return (
    <article class="bg-gray-300 mx-12 my-12 flex">
      <div class="text-2xl mx-4">
        <button type="button" aria-label="Up vote" class="my-2">
          <TiArrowUpOutline />
        </button>
        <Skeleton />
        <button type="button" aria-label="Down vote" class="my-2">
          <TiArrowDownOutline />
        </button>
      </div>
      <div class="text-2xl w-full">
        <h3 class="my-2">
          <Skeleton width={getRandomNumber(100, 200)} />
        </h3>
        <div class="my-2 mr-4">
          <Skeleton height={250} />
        </div>
        <div class="flex justify-between my-2">
          <span>
            <Skeleton width={getRandomNumber(20, 50)} />
          </span>
          <span>
            <Skeleton width={getRandomNumber(50, 100)} />
          </span>
          <span class="mr-4">
            <button class="mx-2" type="button" aria-label="Show comments">
              <TiMessage />
            </button>
            <Skeleton width={getRandomNumber(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostLoading;
