import { DesktopMenu } from './Desktop';
import { MobileMenu, MobileMenuProps } from './MobileMenu';

interface MenuProps {
  isMobile: Boolean,
  mobileMenuProps: MobileMenuProps,
  isMobileMenuOpen: Boolean
}

export function Menu({ isMobile, mobileMenuProps, isMobileMenuOpen }: MenuProps) {
  
  if (isMobile) {
    const { closingMobileMenu, toggleMobileMenu } = mobileMenuProps;

    if (isMobileMenuOpen) {
      return <MobileMenu
        closingMobileMenu={closingMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
    }
    return <></>
  } else {
    return <DesktopMenu/>
  }
};