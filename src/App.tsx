import X from './assets/X.svg';

console.log(X);

function App() {
  return (
    <div className="container mx-auto border border-red-500">
      <header>
        <div className="flex items-center px-4 py-3 h-14">
          <div className="flex-grow w-0 h-full">
            <button className="h-full">
              <img className="h-full rounded-full"
               src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img className="h-4/5" src={X} alt="Logo" />
          </div>
          <div className="flex-grow">
          </div>
        </div>
      </header>

      <menu className="hidden">
        <div>
          <p>Account info</p>
          <button>x</button>
        </div>
        <div>
          <div>
            <span><img src="/" alt="Avatar" /></span>
            <button>+</button>
          </div>
          <div>
            <p>Name Here</p>
            <p>@username13here</p>
          </div>
          <div>
            <p>
              <span><strong>60</strong> Following</span>
              <span><strong>7</strong> Followers</span>
            </p>
          </div>
        </div>

        <nav>
          <a href="/">
            <span><img src="/" alt="Profile" /></span>
            <p>Profile</p>
          </a>
          <a href="/">
            <span><img src="/" alt="Twitter Blue" /></span>
            <p>Twitter Blue</p>
          </a>
          <a href="/">
            <span><img src="/" alt="Lists" /></span>
            <p>Lists</p>
          </a>
        </nav>

        <div>
          <label>
            <input type="checkbox" />
            <span>Creator Studio</span>
            <span>v</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Professional Tools</span>
            <span>v</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Settings and Support</span>
            <span>v</span>
          </label>
        </div>
      </menu>

      <footer className="fixed bottom-0 w-screen">
        <button className="block mt-0 mb-4 ml-auto mr-5 bg-green-300 rounded-full w-14 h-14 ml-5uto">
          <span><img src="/" alt="Tweet" /></span>
        </button>

        <nav className="flex bg-green-300">
          <a className="flex items-center justify-center h-14 grow" href="/"><span><img src="/" alt="X" /></span></a>
          <a className="flex items-center justify-center h-14 grow" href="/"><span><img src="/" alt="X" /></span></a>
          <a className="flex items-center justify-center h-14 grow" href="/"><span><img src="/" alt="X" /></span></a>
          <a className="flex items-center justify-center h-14 grow" href="/"><span><img src="/" alt="X" /></span></a>
        </nav>
      </footer>

      {/* desktop
      <menu>
        <div>
          <span>X</span>
        </div>
        <nav>
          <a href="/">
            <span><img src="/" alt="Home" /></span>
            <span>Home</span>
          </a>
          <a href="/">
            <span><img src="/" alt="Explore" /></span>
            <span>Explore</span>
          </a>
          <a href="/">
            <span><img src="/" alt="Notifications" /></span>
            <span>Notifications</span>
          </a>
        </nav>
        <div>
          <button>Tweet</button>
        </div>
        
        <div>
          <label>
            <input type="checkbox" />
            <div>
              <img src="/" alt="Avatar" />
            </div>
            <div>
              <p>Name Here</p>
              <p>@username13here</p>
            </div>
            <div>
              ...
            </div>
          </label>
        </div>
      </menu>
      */}

      <main>
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


        <div>
          {/* desktop
          <h2>Home</h2>
          */}
          <div>
            <a href="/">
              <p>For you</p>
            </a>
            <a href="/">
              <p>Folowwing</p>
            </a>
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
        <button><p>Show 150 Tweets</p></button>
        <article>
          <img src="/" alt="Avatar" />
          <div>
            <div>
              <p>
                <span>Name Here</span>
                <span>x</span>
                <span>@username14here</span>
                <span>14m</span>
              </p>
              <span>...</span>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in dicta reiciendis tenetur, dolore aliquid dolores sint officiis, nisi esse officia perferendis. Numquam totam sint a ab dolorem harum ipsam?</p>
            </div>
            <aside>
              <span>
                <img src="/" alt="Reply" /><span>7</span>
              </span>
              <span>
                <img src="/" alt="Retweet" /><span>3</span>
              </span>
              <span>
                <img src="/" alt="Like" /><span>14</span>
              </span>
              <span>
                <img src="/" alt="View" /><span>141</span>
              </span>
              <span>
                <img src="/" alt="Share" />
              </span>
            </aside>
          </div>
        </article>
      </main>
    </div>
  )
}

export default App
