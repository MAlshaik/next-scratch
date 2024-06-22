"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Hero } from '@/components/landing/hero';
import { MindMap } from '@/components/landing/mind-map';
import { Comparison } from '@/components/landing/comparison';
import { Features } from '@/components/landing/features/features';
import { WhyUs } from '@/components/landing/whyus';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { SideBar } from '@/components/landing/sidebar';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mindMapRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const whyusRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [sidebarStyle, setSidebarStyle] = useState({});
  const [activeSection, setActiveSection] = useState('');
  let animationFrameId: number | null = null;

function updateSidebarPosition() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = requestAnimationFrame(() => {
    if (containerRef.current && heroRef.current && faqRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const heroRect = heroRef.current.getBoundingClientRect();
      const faqRect = faqRef.current.getBoundingClientRect();
      const rightPosition = window.innerWidth - containerRect.right;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const sidebarHeight = windowHeight * 0.5;
      
      let top;
      if (scrollY < heroRect.height - sidebarHeight / 2) {
        top = Math.max(0, heroRect.top + heroRect.height / 2 - sidebarHeight / 2);
        setActiveSection('about');
      } else if (scrollY + windowHeight >= documentHeight - faqRect.height / 2) {
        top = Math.min(windowHeight - sidebarHeight, faqRect.top + faqRect.height / 2 - sidebarHeight / 2);
        setActiveSection('FAQ');
      } else {
        top = windowHeight / 2 - sidebarHeight / 2;
      }

      setSidebarStyle({
        position: 'fixed',
        top: `${top}px`,
        right: `${rightPosition}px`,
        height: `${sidebarHeight}px`,
      });
    }
  });
}

function handleScroll() {
  updateSidebarPosition();
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollBottom = scrollPosition + windowHeight;

  if (scrollPosition === 0) {
    setActiveSection('about');
    return;
  }

  if (scrollBottom >= documentHeight - 50) { // Increased threshold
    setActiveSection('FAQ');
    return;
  }

  [heroRef, mindMapRef, comparisonRef, featuresRef, faqRef].forEach((ref) => {
    if (ref.current) {
      const sectionTop = ref.current.offsetTop;
      const sectionBottom = sectionTop + ref.current.offsetHeight;
      const sectionMiddle = sectionTop + (ref.current.offsetHeight / 2);

      if (scrollPosition < sectionMiddle && scrollBottom > sectionMiddle) {
        setActiveSection(ref.current.id);
      }
    }
  });
}

  useEffect(() => {
  function handleResize() {
    updateSidebarPosition();
    handleScroll(); // Call handleScroll on resize as well
  }

  updateSidebarPosition(); // Initial position
  handleScroll(); // Initial active section
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);

  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className="min-h-screen w-full sphere">
        <div ref={containerRef} className="pt-24 mx-auto w-[80rem] md:px-20 max-w-[98%]">
          <div className="pr-0 md:pr-32">
            <div ref={heroRef} id="about"><Hero /></div>
            <div ref={mindMapRef} id="visualize"><MindMap /></div>
            <div ref={comparisonRef} id="automate"><Comparison /></div>
            <div ref={featuresRef} id="features"><Features /></div>
            <div ref={faqRef} id="FAQ">
              <FAQ />
            </div>
            <Footer />
          </div>
          <SideBar 
            style={sidebarStyle} 
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            sections={{
              about: heroRef,
              visualize: mindMapRef,
              automate: comparisonRef,
              features: featuresRef,
              FAQ: faqRef
            }}
          />
        </div>
      </div>
    </main>
  );
}


