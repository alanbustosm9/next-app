import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const ListOfPosts = async () => {
  const posts = await fetchPosts();
  return posts.slice(0, 3).map((post) => (
    <div>
      <Link href={`/posts/${post.id}`}>
        <article key={post.id}>
          <h2 style={{ color: "rgb(107 212 223)" }}>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      </Link>
      <LikeButton />
    </div>
  ));
};

export default ListOfPosts;
