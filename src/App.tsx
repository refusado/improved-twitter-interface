function App() {
  return (
    <div>
      <menu>
        <div id="logo">
          <h1>X</h1>
        </div>
        <nav>
          <a href="/">
            <img src="/" alt="Home" />
            <p>Home</p>
          </a>
          <a href="/">
            <img src="/" alt="Expore" />
            <p>Expore</p>
          </a>
          <a href="/">
            <img src="/" alt="Notifications" />
            <p>Notificatoins</p>
          </a>
        </nav>
        <button>Tweet</button>
      </menu>
      <main>
        <div>
          <h2>Home</h2>
          <div>
            <a href="/">
              <p>For you</p>
            </a>
            <a href="/">
              <p>Folowwing</p>
            </a>
          </div>
        </div>
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
                <img src="/" alt="Reply" />
                <span>7</span>
              </span>
              <span>
                <img src="/" alt="Retweet" />
                <span>3</span>
              </span>
              <span>
                <img src="/" alt="Like" />
                <span>14</span>
              </span>
              <span>
                <img src="/" alt="View" />
                <span>141</span>
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
