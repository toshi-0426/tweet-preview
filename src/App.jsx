import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function TweetForm({ onTweetSubmit }) {
  const [tweetData, setTweetData] = useState({
    name: "",
    id: "",
    content: "",
    icon: "",
  });

  const handleChange = (e) => {
    setTweetData({
      ...tweetData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTweetSubmit(tweetData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row space-x-4 p-4">
        <div className="flex flex-col place-items-start">
          <label className="text-xl mb-2">Name</label>
          <input 
            className="border rounded p-2 w-64"
            name="name"
            value={tweetData.name}
            onChange={handleChange}
            placeholder="Enter your name"
         />
        </div>
        
        <div className="flex flex-col place-items-start">
          <label className="text-xl mb-2">ID</label>
          <input 
            className="border rounded p-2 w-64"
            name="id"
            value={tweetData.id}
            onChange={handleChange}
            placeholder="Enter your id"
         />
        </div>
      </div>

      <div className="flex flex-col place-items-start">
        <label className="text-xl mb-2">Textarea</label>
        <textarea 
          className="border rounded p-2 w-full h-32"
          name="content"
          value={tweetData.content}
          onChange={handleChange}
          placeholder="Tweet contents"
        />
      </div>

      <div className="flex flex-row justify-between items-center p-4">
          <input 
            className="border rounded p-2 w-64"
            name="icon"
            value={tweetData.icon}
            placeholder='Icon'
          />
          <button 
            className='rounded-full bg-blue-400 text-white font-bold py-3 px-8'
            type="submit" 
          >Create Tweet</button>
      </div>
    </form>
  );
}



function TweetPreview ({ tweetData }) {
  return (
    <div className="bg-white rounded-xl border p-6 w-[550px]">
      <div className="flex justify-between mb-2">
        <span className="text-blue-600 font-bold text-xl">{ tweetData.name }</span>
        <span className="text-gray-400 font-medium">Apr 2</span>
      </div>

      <div className='flex items-start mb-3'>
        { tweetData.content }
      </div>

      <div className="flex justify-between text-gray-500">
        <span>57K Retweets</span>
        <span>246.1K Quote Tweets</span>
        <span>1.3M Likes</span>
      </div>
    </div>
    
  );
}


function App() {
  const [tweetData, setTweetData] = useState(null);

  const handleTweetChange = (newTweetData) => {
    setTweetData(newTweetData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[600px]">
        <TweetForm 
          onTweetSubmit={handleTweetChange}
        />
        {tweetData && <TweetPreview tweetData={tweetData}/>}
        
      </div>
    </div>
  );
}

export default App
