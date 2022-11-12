const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const ListOfPosts = async () => {
  const posts = await fetchPosts();
  return posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));
};

export default ListOfPosts;
