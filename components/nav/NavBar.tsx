"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from '@/components/icons/menu';

function NavBar() {
  const pathname = usePathname();
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const updateGradientPosition = () => {
    const activeLink = navRefs.current[pathname];
    if (activeLink && gradientRef.current) {
      const rect = activeLink.getBoundingClientRect();
      gradientRef.current.style.width = `${rect.width}px`;
      gradientRef.current.style.left = `${rect.left + window.scrollX}px`;
    }
  };

  useEffect(() => {
    updateGradientPosition();
    window.addEventListener('resize', updateGradientPosition);

    return () => {
      window.removeEventListener('resize', updateGradientPosition);
    };
  }, [pathname]);

  useEffect(() => {
    updateGradientPosition();
  }, [pathname]);

  const navItems = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-opacity-0 bg-transparent start-0 border-b border-border backdrop-filter backdrop-filter-[10px]">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto md:px-20 p-4">
        <div className="flex items-center h-full">
          <Link
            href="/"
            ref={(el) => (navRefs.current['/'] = el)}
            className={`self-center text-3xl font-semibold whitespace-nowrap text-foreground ${
              pathname === '/' ? 'text-blue-700' : ''
            }`}
          >
            Notello
          </Link>
          <ul className="hidden md:flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 h-full ml-8">
            {navItems.map((item) => (
              <li key={item.path} className="h-full flex items-center">
                <Button variant="nav">
                  <Link
                    href={item.path}
                    ref={(el) => (navRefs.current[item.path] = el)}
                    className={`h-full flex items-center rounded ${
                      pathname === item.path ? 'text-foreground/95' : 'text-foreground'
                    }`}
                    aria-current={pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:order-2 gap-6 md:space-x-0 rtl:space-x-reverse">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="md:hidden" variant="outline" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.path}>
                  <Link
                    href={item.path}
                    ref={(el) => (navRefs.current[item.path] = el)}
                    className={`w-full h-full flex items-center rounded ${
                      pathname === item.path ? 'text-foreground/95' : 'text-foreground'
                    }`}
                    aria-current={pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              </DropdownMenuContent>
          </DropdownMenu>

          <ThemeSwitcher />
          <Button>Waitlist</Button>
        </div>
      </div>
      <div
        ref={gradientRef}
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-transparent via-foreground to-transparent transition-all duration-300"
        style={{ width: '0px', left: '0px' }}
      ></div>
    </div>
  );
}

export default NavBar;
