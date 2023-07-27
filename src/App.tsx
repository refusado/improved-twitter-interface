import { useState } from 'react';
import X from './assets/X.svg';

function App() {
  const [activeFeed, setActiveFeed]: [Boolean, Function] = useState(false);
  const [isManuOpen, setIsMenuOpen]: [Boolean, Function] = useState(false);
  const [closingMenu, setClosingMenu]: [Boolean, Function] = useState(!isManuOpen);

  const toggleMenu = () => {
    setClosingMenu(!closingMenu);
    setTimeout(() => {
      setIsMenuOpen(!isManuOpen);
    }, isManuOpen ? 210 : 0);
  }
  
  return (
    <div>
      <header>
        <div className="px-4 py-[0.68rem]">
          <div className="flex items-center h-8">
            <div className="w-0 h-full grow">
              <button className="h-full" onClick={toggleMenu}>
                <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
              </button>
            </div>
            <div className="flex items-center justify-center h-full">
              <img className="h-full" src={X} alt="Logo" />
            </div>
            <div className="inline-block h-full grow">
            </div>
          </div>
        </div>
      </header>

      {isManuOpen && (
        <div className={`fixed top-0 right-0 left-0 bottom-0 z-50 ${closingMenu ? 'animate-menu-out' : 'animate-menu-in'}`}>
          <div onClick={toggleMenu} className="absolute w-screen h-screen"></div>
          <menu className={`bg-white h-screen overflow-scroll pb-14 w-[280px] max-w-full ${closingMenu ? 'animate-to-left' : 'animate-to-right'}`}>
            <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-white">
              <p><strong>Account info</strong></p>
              <button onClick={toggleMenu} className="flex items-center justify-center text-2xl duration-200 bg-white rounded-full w-9 h-9 hover:bg-neutral-200">
                ×
              </button>
            </div>
            <div className="px-4 py-3 bg-blue-500a">
              <div className="flex">
                <button className="flex items-center justify-center overflow-hidden duration-150 bg-red-500 rounded-full w-11 aspect-square hover:brightness-90">
                  <img src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
                </button>
                <button className="flex items-center justify-center w-8 h-8 ml-auto text-xl duration-100 bg-white border rounded-full hover:brightness-95 border-neutral-200">
                  +
                </button>
              </div>
              <a href="/" className="inline-block my-3 text-sm">
                <p className="text-neutral-800 hover:underline underline-offset-2"><strong>Refu</strong></p>
                <p className="text-neutral-500">@refusado</p>
              </a>
              <div>
                <p className="flex items-center gap-4 text-sm text-neutral-500">
                  <button className="hover:underline underline-offset-2"><strong className="text-neutral-800">60</strong> Following</button>
                  <button className="hover:underline underline-offset-2"><strong className="text-neutral-800">7</strong> Followers</button>
                </p>
              </div>
            </div>

            <nav className="bg-white">
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Profile" />
                </span>
                <p className="text-lg tracking-wide"><strong>Profile</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Thitter Blue" />
                </span>
                <p className="text-lg tracking-wide"><strong>Thitter Blue</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Lists" />
                </span>
                <p className="text-lg tracking-wide"><strong>Lists</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Bookmarks" />
                </span>
                <p className="text-lg tracking-wide"><strong>Bookmarks</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Communities" />
                </span>
                <p className="text-lg tracking-wide"><strong>Communities</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Monetization" />
                </span>
                <p className="text-lg tracking-wide"><strong>Monetization</strong></p>
              </a>
            </nav>

            <div className="bg-white">
              <details className="group">
                <summary className="flex items-center justify-between px-5 py-4 text-sm bg-white cursor-pointer hover:bg-neutral-400/10">
                  <strong>Creator Studio</strong>
                  <span className="text-xs duration-100 origin-center select-none h-fit -scale-x-150 group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
                </summary>
                
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Analytics" />
                  </span>
                  <span className="text-sm">Analytics</span>
                </a>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between px-5 py-4 text-sm bg-white cursor-pointer hover:bg-neutral-400/10">
                  <strong>Professional Tools</strong>
                  <span className="text-xs duration-100 origin-center select-none h-fit -scale-x-150 group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
                </summary>

                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Twitter for Professionals" />
                  </span>
                  <span className="text-sm">Twitter for Professionals</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Twitter Ads" />
                  </span>
                  <span className="text-sm">Twitter Ads</span>
                </a>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between px-5 py-4 text-sm bg-white cursor-pointer hover:bg-neutral-400/10">
                  <strong>Settings and Support</strong>
                  <span className="text-xs duration-100 origin-center select-none h-fit -scale-x-150 group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
                </summary>

                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Settings and privacy" />
                  </span>
                  <span className="text-sm">Settings and privacy</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Help Center" />
                  </span>
                  <span className="text-sm">Help Center</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Data saver" />
                  </span>
                  <span className="text-sm">Data saver</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Display" />
                  </span>
                  <span className="text-sm">Display</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Keyboard shortcuts" />
                  </span>
                  <span className="text-sm">Keyboard shortcuts</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-5 py-2 bg-white hover:bg-neutral-400/10">
                  <span className="overflow-hidden w-7 h-7">
                    <img src="/" alt="Log out" />
                  </span>
                  <span className="text-sm">Log out</span>
                </a>
              </details>
            </div>

            {/* <ul className="bg-white">
              <li>
                <input id="creator-studio" type="checkbox" hidden className="peer" />
                <label htmlFor="creator-studio" className="flex justify-between px-5 py-4 bg-white border-red-300 group open hover:bg-neutral-400/10 peer-checked:border">
                  <span>Creator Studio</span>
                  <span className="peer-checked:text-violet-500 group-open:bg-black">v</span>
                </label>
              </li>
              <li>
                <input id="professional-tools" type="checkbox" hidden className="peer" />
                <label htmlFor="professional-tools" className="flex justify-between px-5 py-4 bg-white border-red-300 group hover:bg-neutral-400/10 peer-checked:border">
                  <span>Professional Tools</span>
                  <span className="peer-checked:text-violet-500">v</span>
                </label>
              </li>
              <li>
                <input id="settings-support" type="checkbox" hidden className="peer" />
                <label htmlFor="settings-support" className="flex justify-between px-5 py-4 bg-white border-red-300 group hover:bg-neutral-400/10 peer-checked:border">
                  <span>Settings and Support</span>
                  <span className="peer-checked:text-violet-500">v</span>
                </label>
              </li>
            </ul> */}
          </menu>
        </div>
      )}

      <button className="fixed right-0 z-30 block mb-5 mr-5 bottom-14 group">
        <span className="flex items-center justify-center text-white duration-300 border rounded-full shadow-md bg-violet-500 border-violet-600 w-14 h-14 shadow-neutral-600/30 group-hover:bg-violet-700">
          <img src="/" alt="Tweet" />
        </span>
      </button>

      <nav className="fixed bottom-0 z-30 flex w-screen bg-white border-t-2 shadow shadow-black/30 border-neutral-100">
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200"><img src="/" alt="X" /></span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200"><img src="/" alt="X" /></span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200"><img src="/" alt="X" /></span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200"><img src="/" alt="X" /></span>
        </a>
      </nav>

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


        <div className="sticky top-0 z-20 bg-white/50 backdrop-blur-md">
          {/* desktop
          <h2>Home</h2>
          */}
          <div className="flex justify-between text-sm border-b-2 border-black/5">
            <button className="flex justify-center w-0 duration-200 grow hover:bg-neutral-900/10" onClick={() => setActiveFeed(false)}>
              <div className="flex flex-col items-center">
                <div className="h-1"></div>
                <p className={`py-3 ${activeFeed ? 'text-black/70' : 'font-bold'}`}>For you</p>
                <div className={`h-1 w-[106%] bg-violet-600 rounded-full ${activeFeed ? 'invisible' : ''}`}></div>
              </div>
            </button>
            <button className="flex justify-center w-0 duration-200 grow hover:bg-neutral-900/10" onClick={() => setActiveFeed(true)}>
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

        <article className="flex gap-3 px-4 py-3 duration-300 border cursor-pointer hover:bg-neutral-100 border-b-neutral-200">
          <div>
            <span className="inline-block w-10 h-10 duration-300 hover:brightness-90">
              <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </span>
          </div>

          <div className="relative flex flex-col">
            <div className="flex items-center justify-between pb-1 text-sm">

              <p className="mr-6 break-all">
                <strong className="mr-1 text-neutral-800 hover:underline underline-offset-2">
                  Name Here
                </strong>
                <span className="mr-1 text-neutral-500">@username.here ∙</span>
                <span className="text-neutral-500">14m</span>
              </p>
              
              <div className="absolute -right-2">
                <span title="More" className="flex items-center justify-center font-bold tracking-widest duration-300 rounded-full w-9 h-9 text-neutral-500 hover:text-violet-600 hover:bg-violet-300/30">
                  ∙∙∙
                </span>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in dicta reiciendis tenetur, dolore aliquid dolores sint officiis, nisi esse officia perferendis. Numquam totam sint a ab dolorem harum ipsam?</p>
            </div>
            <aside className="flex flex-wrap justify-between h-8 text-neutral-500">
              <button title="Reply" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>7</span>
              </button>
              <button title="Retweet" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>3</span>
              </button>
              <button title="Like" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>14</span>
              </button>
              <button title="View" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>141</span>
              </button>
              <button title="Share" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" />
              </button>
            </aside>
          </div>
        </article>

        <article className="flex gap-3 px-4 py-3 duration-300 border cursor-pointer hover:bg-neutral-100 border-b-neutral-200">
          <div>
            <span className="inline-block w-10 h-10 duration-300 hover:brightness-90">
              <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </span>
          </div>

          <div className="relative flex flex-col">
            <div className="flex items-center justify-between pb-1 text-sm">

              <p className="mr-6 break-all">
                <strong className="mr-1 text-neutral-800 hover:underline underline-offset-2">
                  Name Here
                </strong>
                <span className="mr-1 text-neutral-500">@username.here ∙</span>
                <span className="text-neutral-500">14m</span>
              </p>
              
              <div className="absolute -right-2">
                <span title="More" className="flex items-center justify-center font-bold tracking-widest duration-300 rounded-full w-9 h-9 text-neutral-500 hover:text-violet-600 hover:bg-violet-300/30">
                  ∙∙∙
                </span>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in dicta reiciendis tenetur, dolore aliquid dolores sint officiis, nisi esse officia perferendis. Numquam totam sint a ab dolorem harum ipsam?</p>
            </div>
            <aside className="flex flex-wrap justify-between h-8 text-neutral-500">
              <button title="Reply" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>7</span>
              </button>
              <button title="Retweet" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>3</span>
              </button>
              <button title="Like" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>14</span>
              </button>
              <button title="View" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>141</span>
              </button>
              <button title="Share" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" />
              </button>
            </aside>
          </div>
        </article>

        <article className="flex gap-3 px-4 py-3 duration-300 border cursor-pointer hover:bg-neutral-100 border-b-neutral-200">
          <div>
            <span className="inline-block w-10 h-10 duration-300 hover:brightness-90">
              <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </span>
          </div>

          <div className="relative flex flex-col">
            <div className="flex items-center justify-between pb-1 text-sm">

              <p className="mr-6 break-all">
                <strong className="mr-1 text-neutral-800 hover:underline underline-offset-2">
                  Name Here
                </strong>
                <span className="mr-1 text-neutral-500">@username.here ∙</span>
                <span className="text-neutral-500">14m</span>
              </p>
              
              <div className="absolute -right-2">
                <span title="More" className="flex items-center justify-center font-bold tracking-widest duration-300 rounded-full w-9 h-9 text-neutral-500 hover:text-violet-600 hover:bg-violet-300/30">
                  ∙∙∙
                </span>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in dicta reiciendis tenetur, dolore aliquid dolores sint officiis, nisi esse officia perferendis. Numquam totam sint a ab dolorem harum ipsam?</p>
            </div>
            <aside className="flex flex-wrap justify-between h-8 text-neutral-500">
              <button title="Reply" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>7</span>
              </button>
              <button title="Retweet" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>3</span>
              </button>
              <button title="Like" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>14</span>
              </button>
              <button title="View" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>141</span>
              </button>
              <button title="Share" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" />
              </button>
            </aside>
          </div>
        </article>

        <article className="flex gap-3 px-4 py-3 duration-300 border cursor-pointer hover:bg-neutral-100 border-b-neutral-200">
          <div>
            <span className="inline-block w-10 h-10 duration-300 hover:brightness-90">
              <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </span>
          </div>

          <div className="relative flex flex-col">
            <div className="flex items-center justify-between pb-1 text-sm">

              <p className="mr-6 break-all">
                <strong className="mr-1 text-neutral-800 hover:underline underline-offset-2">
                  Name Here
                </strong>
                <span className="mr-1 text-neutral-500">@username.here ∙</span>
                <span className="text-neutral-500">14m</span>
              </p>
              
              <div className="absolute -right-2">
                <span title="More" className="flex items-center justify-center font-bold tracking-widest duration-300 rounded-full w-9 h-9 text-neutral-500 hover:text-violet-600 hover:bg-violet-300/30">
                  ∙∙∙
                </span>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in dicta reiciendis tenetur, dolore aliquid dolores sint officiis, nisi esse officia perferendis. Numquam totam sint a ab dolorem harum ipsam?</p>
            </div>
            <aside className="flex flex-wrap justify-between h-8 text-neutral-500">
              <button title="Reply" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>7</span>
              </button>
              <button title="Retweet" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>3</span>
              </button>
              <button title="Like" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>14</span>
              </button>
              <button title="View" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" /><span>141</span>
              </button>
              <button title="Share" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
                <img src="/" alt="x" />
              </button>
            </aside>
          </div>
        </article>
      </main>
    </div>
  )
}

export default App
