import { useState } from 'react';
import X from '/x.svg';
import { Timeline } from './components/timeline/Timeline';

function App() {
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
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Profile</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Thitter Blue" />
                </span>
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Thitter Blue</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Lists" />
                </span>
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Lists</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Bookmarks" />
                </span>
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Bookmarks</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Communities" />
                </span>
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Communities</strong></p>
              </a>
              <a href="/" className="flex items-center gap-6 px-4 py-3 duration-200 bg-white hover:bg-neutral-400/10">
                <span className="w-8 h-8 overflow-hidden">
                  <img src="/" alt="Monetization" />
                </span>
                <p className="overflow-hidden text-lg tracking-wide text-ellipsis"><strong>Monetization</strong></p>
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

      <Timeline />
    </div>
  )
}

export default App
