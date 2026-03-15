import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const [singlePost, setSinglePost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => setSinglePost(data));
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h2>1. Posts</h2>
      {posts.slice(0, 3).map(p => <p key={p.id}>{p.title}</p>)}

      <h2>2. Users</h2>
      {users.slice(0, 3).map(u => <p key={u.id}>{u.name}</p>)}

      <h2>3. Single Post</h2>
      {singlePost && <p>{singlePost.title}</p>}

      <h2>4. Comments</h2>
      {comments.slice(0, 3).map(c => <p key={c.id}>{c.body}</p>)}

      <h2>5. Todos</h2>
      {todos.map(t => <p key={t.id}>{t.title}</p>)}
    </div>
  );
}
