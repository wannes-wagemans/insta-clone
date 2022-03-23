import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

interface PostProps {
  id: string
  img: string
  caption: string
  username: string
}

export const Post: React.FC<PostProps> = ({ id, img, caption, username }) => {
  return (
    <div className="my-7 rounded-sm border bg-white ">
      <div className="flex items-center justify-between  p-5">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-5 text-xl text-white">
            {username[0].toUpperCase()}
          </div>
          <h1 className="font-bold">{username}</h1>
        </div>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="w-full object-cover" src={img} />
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <HeartIcon className="button" />
          <ChatIcon className="button" />
          <PaperAirplaneIcon className="button" />
        </div>
        <BookmarkIcon className="button" />
      </div>
      <p className="px-4 pb-4">
        <span className="mr-1 font-bold">{username}</span> {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}
