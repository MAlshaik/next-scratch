interface SideBarProps {
  style: React.CSSProperties;
  activeSection: string;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  sections: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

export function SideBar({ style, activeSection, scrollToSection, sections }: SideBarProps) {
  return (
    <aside 
      className="hidden md:block w-20 pr-32 transition-all duration-300 ease-in-out" 
      style={style}
    >
      <div className="h-full flex flex-col justify-center items-center py-4">
        <div className="space-y-12">
          {Object.entries(sections).map(([key, ref]) => (
            <p 
              key={key}
              className={`cursor-pointer text-right ${activeSection === key ? 'text-foreground' : ''}`}
              onClick={() => scrollToSection(ref)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}

