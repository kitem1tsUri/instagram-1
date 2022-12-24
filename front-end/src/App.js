import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [createPostData, setCreatePostData] = useState({ title: '', message: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/posts').then(({ data }) => {
      setPosts(data);
    })
  }, []);

  const createPost = async () => {
    try {
      await axios.post('http://localhost:8000/posts', createPostData)

      const { data } = await axios.get('http://localhost:8000/posts');
      setPosts(data);

      setCreatePostData({ title: '', message: '' })
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Hello</h1>

        <button onClick={() => setShowModal(true)}>Create Post</button>
      </header>

      <div className='postsContainer'>
        {posts.map((cur) => (
          <div className='postContainer' key={`post-${cur.id}`}>
            <h2>{cur.title}</h2>
            <h3>{cur.message}</h3>
          </div>
        ))}
      </div>

      {showModal && <div className='modalContainer'>
        <div className='modal'>
          <div className='inputContainer'>
            <h4>title</h4>

            <input onChange={(e) => setCreatePostData({ ...createPostData, title: e.target.value })} />
          </div>

          <div className='inputContainer'>
            <h4>message</h4>

            <input onChange={(e) => setCreatePostData({ ...createPostData, message: e.target.value })} />
          </div>

          <button onClick={createPost}>Create</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>}
    </div>
  );
}

export default App;
