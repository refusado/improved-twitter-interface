import { useState } from 'react';
import X from '/x.svg';
import { Timeline } from './components/timeline/Timeline';
import { Menu } from './components/menu/Menu';
import { Feather, Plus, House, MagnifyingGlass, Bell, EnvelopeSimple } from '@phosphor-icons/react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen]: [Boolean, Function] = useState(false);
  const [closingMobileMenu, setClosingMobileMenu]: [Boolean, Function] = useState(!isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setClosingMobileMenu(!closingMobileMenu);
    setTimeout(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }, isMobileMenuOpen ? 210 : 0);
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  window.addEventListener('resize', () => setIsMobile(window.innerWidth < 500));

  return (
    <div>
      <Menu
        isMobile={isMobile}
        mobileMenuProps={{ toggleMobileMenu, closingMobileMenu }}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <header>
        <div className="px-4 py-[0.68rem]">
          <div className="flex items-center h-8">
            <div className="w-0 h-full grow">
              <button className="h-full" onClick={toggleMobileMenu}>
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

      <button className="fixed right-0 z-30 block mb-5 mr-5 bottom-14 group">
        <span className="flex items-center justify-center p-3 text-white duration-300 border rounded-full shadow-md bg-violet-500 w-14 h-14 shadow-neutral-600/30 group-hover:brightness-90">
          <Feather className="w-full h-full mt-1 ml-1.5 bg-yellow-500a" />
          <Plus className="absolute w-3.5 h-3.5 rounded-full bottom-1/2 right-1/2" weight="bold" />
        </span>
      </button>

      <nav className="fixed bottom-0 z-30 flex w-screen bg-white border-t-2 shadow shadow-black/30 border-neutral-100">
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200">
            <House className="text-black w-7 h-7" weight={true ? 'fill' : 'regular'} />
          </span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200">
            <MagnifyingGlass className="text-black w-7 h-7" weight={false ? 'bold' : 'regular'} />
          </span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200">
            <Bell className="text-black w-7 h-7" weight={false ? 'fill' : 'regular'} />
          </span>
        </a>
        <a className="flex items-center justify-center h-[52px] grow group" href="/">
          <span className="flex items-center justify-center w-10 h-10 duration-300 rounded-full group-hover:bg-neutral-200">
            <EnvelopeSimple className="text-black w-7 h-7" weight={false ? 'bold' : 'regular'} />
          </span>
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
