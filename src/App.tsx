function App() {
  return (
    <div>
      <header>
        <div>
          <div>
            <button><img src="/" alt="Avatar" /></button>
          </div>
          <div id="logo">
            <h1>X</h1>
          </div>
          <div>

          </div>
        </div>
      </header>

      <menu>
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

      <footer>
        <button>
          <span><img src="/" alt="Tweet" /></span>
          <p>Tweet</p>
        </button>

        <nav>
          <a href="/"><span><img src="/" alt="Home" />x</span></a>
          <a href="/"><span><img src="Search" alt="Search" />x</span></a>
          <a href="/"><span><img src="/" alt="Notifications" />x</span></a>
          <a href="/"><span><img src="/" alt="Messages" />x</span></a>
        </nav>
      </footer>

      <main>
        <div>
          {/* <h2>Home</h2> */}
          <div>
            <a href="/">
              <p>For you</p>
            </a>
            <a href="/">
              <p>Folowwing</p>
            </a>
          </div>
        </div>
        {/* <div>
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
        </div> */}
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
