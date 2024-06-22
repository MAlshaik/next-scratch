"use client"
import React, { useState } from 'react';

interface FlashcardProps {
  term: string;
  definition: string;
}

export function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-full bg-secondary text-foreground rounded-tl-lg cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="p-4 h-full flex items-center justify-center text-center select-none">
        {isFlipped ? (
          <p>{definition}</p>
        ) : (
          <h5 className="font-semibold">{term}</h5>
        )}
      </div>
    </div>
  );
}
