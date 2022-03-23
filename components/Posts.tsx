import { Post } from './Post'
import posts from '../data/data.json'

interface PostsProps {}

export const Posts: React.FC<PostsProps> = ({}) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
