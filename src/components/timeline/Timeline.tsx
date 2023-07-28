import { useState } from "react";
import { Tweet } from "../Tweet";
import { tweetsData } from "./mockData";

export function Timeline() {
  const [activeFeed, setActiveFeed]: [Boolean, Function] = useState(false);

  const tweets = tweetsData.map(tweet => {
    return <Tweet
      key={tweet.id}
      author={tweet.author}
      time={tweet.time}
      content={tweet.content}
      stats={tweet.stats}
    />
  });

  return (
    <main className="mb-12">
      <div className="sticky top-0 z-20 bg-white/50 backdrop-blur-md">
        {/* desktop
        <h2>Home</h2>
        */}
        <div className="flex justify-between text-sm border-b-2 border-black/5">
          <button className="flex justify-center w-0 duration-200 grow hover:bg-neutral-600/10" onClick={() => setActiveFeed(false)}>
            <div className="flex flex-col items-center">
              <div className="h-1"></div>
              <p className={`py-3 ${activeFeed ? 'text-black/70' : 'font-bold'}`}>For you</p>
              <div className={`h-1 w-[106%] bg-violet-600 rounded-full ${activeFeed ? 'invisible' : ''}`}></div>
            </div>
          </button>
          <button className="flex justify-center w-0 duration-200 grow hover:bg-neutral-600/10" onClick={() => setActiveFeed(true)}>
            <div className="flex flex-col items-center">
              <div className="h-1"></div>
              <p className={`py-3 ${activeFeed ? 'font-bold' : 'text-black/70'}`}>Following</p>
              <div className={`h-1 w-[106%] bg-violet-600 rounded-full ${activeFeed ? '' : 'invisible'}`}></div>
            </div>
          </button>
        </div>
      </div>
      {/* desktop
      <div>
        <img src="/" alt="Profile picture" />
        <div>
          <textarea name="What is happening?" />
          <div>
            <span><img src="/" alt="Media" /></span>
            <span><img src="/" alt="Gif" /></span>
            <span><img src="/" alt="Poll" /></span>
            <button>Tweet</button>
          </div>
        </div>
      </div>
      */}
      <button className="w-screen py-3.5 text-sm duration-300 border-b-2 text-violet-600 border-neutral-100 hover:bg-neutral-100">
        <p>Show 150 Tweets</p>
      </button>

      {tweets}
    </main>
  );
}

{/* desktop
  <aside>
    <div>
      <div>
        <img src="/" alt="Search" />
      </div>
      <div>
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>

    <section>
      <h2>Get Verified</h2>
      <p>Subscribe to unlock new features.</p>
      <div>
        <button>Get verified</button>
      </div>
    </section>

    <section>
      <div>
        <h2>What's happening</h2>
      </div>
      <div>
        <a href="/">
          <div>
            <p><span>Sports</span> <span>Trending</span></p>
            <h3>BREAKING UPDATE</h3>
            <div>
              <span>14.5K</span> Tweets
            </div>
          </div>
          <div>
            <span>...</span>
          </div>
        </a>
        <a href="/">
          <div>
            <p><span>Sports</span> <span>Trending</span></p>
            <h3>BREAKING UPDATE</h3>
            <div>
              <span>14.5K</span> Tweets
            </div>
          </div>
          <div>
            <span>...</span>
          </div>
        </a>
      </div>
      <div>
        <a href="/">
          <span>Show more</span>
        </a>
      </div>
    </section>

    <section>
      <div>
        <h2>Who to follow</h2>
      </div>
      <div>
        <a href="/">
          <div><img src="/" alt="Avatar" /></div>
          <div>
            <p>Name Here</p>
            <p>@username14here</p>
          </div>
          <div>
            <button>Follow</button>
          </div>
        </a>
        <a href="/">
          <div><img src="/" alt="Avatar" /></div>
          <div>
            <p>Name Here</p>
            <p>@username14here</p>
          </div>
          <div>
            <button>Follow</button>
          </div>
        </a>
      </div>
      <div>
        <a href="/">
          <span>Show more</span>
        </a>
      </div>
    </section>
    
    <div>
      <a href="/">Terms of Service</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Cokkie Policy</a>
      <a href="/">Accessibility</a>
      <a href="/">Ads info</a>
      <label>
        <input type="checkbox"/>
        More <span>...</span>
      </label>
      <p>&copy; 2023 X Corp.</p>
    </div>
  </aside>
  
  <aside>
    <button>
      <div>
        <span>Messages</span>
      </div>
      <div>
        <img src="/" alt="New message" />
      </div>
      <div>
        <button>
          <img src="/" alt="Collapse" />
        </button>
      </div>
    </button>
    <div>
      <ul>
        <li>
          <button>
            <div>
              <img src="/" alt="Avatar" />
            </div>
            <div>
              <p>
                <span><strong>Name Here</strong></span>
                <span>Y</span>
                <span>@username14here</span>
                <span>Jun 13</span>

                <span>
                  <button>...</button>
                </span>
              </p>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div>
              <img src="/" alt="Avatar" />
            </div>
            <div>
              <p>
                <span><strong>Name Here</strong></span>
                <span>Y</span>
                <span>@username14here</span>
                <span>Jun 13</span>

                <span>
                  <button>...</button>
                </span>
              </p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </aside>
  */}