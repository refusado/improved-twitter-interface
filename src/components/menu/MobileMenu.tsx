import { MouseEventHandler } from 'react';

export interface MobileMenuProps {
  closingMobileMenu: Boolean,
  toggleMobileMenu: MouseEventHandler<HTMLButtonElement>
}

export function MobileMenu({ closingMobileMenu, toggleMobileMenu }: MobileMenuProps) {
  const navbarElements = getNavElements();

  return (
    <div className={`fixed top-0 right-0 left-0 bottom-0 z-50 ${closingMobileMenu ? 'animate-menu-out' : 'animate-menu-in'}`}>
      <button onClick={toggleMobileMenu} className="absolute w-screen h-screen"></button>
      <menu className={`bg-white h-screen overflow-scroll pb-12 w-[280px] max-w-full ${closingMobileMenu ? 'animate-to-left' : 'animate-to-right'}`}>
        <div className="sticky top-0 flex items-center justify-between px-3.5 py-2 bg-white">
          <p><strong>Account info</strong></p>
          <button onClick={toggleMobileMenu} className="flex items-center justify-center text-2xl duration-200 bg-white rounded-full w-9 h-9 hover:bg-neutral-200">
            ×
          </button>
        </div>
        <div className="px-3.5 py-3">
          <div className="flex">
            <button className="flex items-center justify-center overflow-hidden duration-150 rounded-full w-11 aspect-square hover:brightness-90">
              <img src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 ml-auto text-xl duration-100 bg-white border rounded-full hover:brightness-95 border-neutral-200">
              +
            </button>
          </div>
          <a href="/" className="inline-block my-3 leading-3">
            <p className="text-lg text-neutral-800 hover:underline underline-offset-2"><strong>Refu</strong></p>
            <p className="text-neutral-500">@refusado</p>
          </a>
          <div>
            <p className="flex items-center gap-4 text-sm leading-8 text-neutral-500">
              <button className="hover:underline underline-offset-2"><strong className="text-neutral-800">60</strong> Following</button>
              <button className="hover:underline underline-offset-2"><strong className="text-neutral-800">7</strong> Followers</button>
            </p>
          </div>
        </div>

        <nav className="text-xl font-bold tracking-wide bg-white">
          {navbarElements}
        </nav>

        <div className="bg-white">
          <details className="group">
            <summary className="flex items-center justify-between px-4 py-3.5 bg-white cursor-pointer hover:bg-neutral-400/10">
              <strong>Creator Studio</strong>
              <span className="p-1 text-[0.5rem] text-neutral-800 font-bold duration-100 origin-center select-none h-fit -scale-x-[2] group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
            </summary>
            
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Analytics" />
              </span>
              <span className="">Analytics</span>
            </a>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between px-4 py-3.5 bg-white cursor-pointer hover:bg-neutral-400/10">
              <strong>Professional Tools</strong>
              <span className="p-1 text-[0.5rem] text-neutral-800 font-bold duration-100 origin-center select-none h-fit -scale-x-[2] group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
            </summary>

            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Twitter for Professionals" />
              </span>
              <span className="">Twitter for Professionals</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Twitter Ads" />
              </span>
              <span className="">Twitter Ads</span>
            </a>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between px-4 py-3.5 bg-white cursor-pointer hover:bg-neutral-400/10">
              <strong>Settings and Support</strong>
              <span className="p-1 text-[0.5rem] text-neutral-800 font-bold duration-100 origin-center select-none h-fit -scale-x-[2] group-open:text-violet-700 group-open:rotate-180">ᐯ</span>
            </summary>

            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Settings and privacy" />
              </span>
              <span className="">Settings and privacy</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Help Center" />
              </span>
              <span className="">Help Center</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Data saver" />
              </span>
              <span className="">Data saver</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Display" />
              </span>
              <span className="">Display</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Keyboard shortcuts" />
              </span>
              <span className="">Keyboard shortcuts</span>
            </a>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-white hover:bg-neutral-400/10">
              <span className="w-5 h-5 overflow-hidden">
                <img src="/" alt="Log out" />
              </span>
              <span className="">Log out</span>
            </a>
          </details>
        </div>
      </menu>
    </div>
  );
}
  
function getNavElements() {
  interface NavbarItem {
    redirect: string,
    name: string,
    iconSrc: string,
    notification: boolean
  };

  const navbarData: NavbarItem[] = [
    {
      redirect: '/',
      name: 'Profile',
      iconSrc: '/',
      notification: false
    },
    {
      redirect: '/',
      name: 'Blue',
      iconSrc: '/',
      notification: false
    },
    {
      redirect: '/',
      name: 'Lists',
      iconSrc: '/',
      notification: true
    },
    {
      redirect: '/',
      name: 'Bookmarks',
      iconSrc: '/',
      notification: false
    },
    {
      redirect: '/',
      name: 'Communities',
      iconSrc: '/',
      notification: true
    },
    {
      redirect: '/',
      name: 'Monetization',
      iconSrc: '/',
      notification: false
    },
  ]

  return navbarData.map(({ redirect, name, iconSrc, notification }: NavbarItem) => {
    return (
      <a href={redirect} className="flex items-center px-3.5 py-3.5 duration-200 bg-white hover:bg-neutral-400/10">
        <span className="overflow-hidden w-7 h-7">
          <img src={iconSrc} alt={name} />
        </span>
        <p className="w-5/6 ml-6 overflow-hidden grow text-ellipsis">{name}</p>
        <div className={`${notification ? '' : 'invisible'} w-2 h-2 m-2 rounded-full bg-violet-500`}></div>
      </a>
    );
  });
}