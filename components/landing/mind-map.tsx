"use client"
import dynamic from 'next/dynamic'
import type { HitTargets, Node, Relationship } from '@neo4j-nvl/core'
import type { MouseEventCallbacks } from '@neo4j-nvl/react'
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

import { getData } from "./data"

const InteractiveNvlWrapper = dynamic(() => import('@neo4j-nvl/react').then(mod => mod.InteractiveNvlWrapper), {
  ssr: false,
});

export function MindMap() {
  const { theme, setTheme } = useTheme()
  const { nodes, relations } = getData(theme);

  const [myNodes, setMyNodes] = useState(nodes)
  const [relationships, setRelationships] = useState(relations)

  const [dragged, setDragged] = useState<boolean>(false)

  useEffect(() => {
    const updatedNodes = myNodes.map(node => ({
      ...node,
      color: theme === "light" ? "#141414" : "#DDD"
    }))
    setMyNodes(updatedNodes)
  }, [theme, setMyNodes])

  useEffect(() => {
  }, [myNodes, relationships])

  const mouseEventCallbacks: MouseEventCallbacks = {
    onHover: (element: Node | Relationship | undefined, hitTargets: HitTargets, evt: MouseEvent) => {
  if (element && element.hasOwnProperty('id') && myNodes.some(node => node.id === element.id)) {
    if (hitTargets.relationship) {
      console.log("relationships")
      return;
    }
    const connectedNodeIds = relationships
      .filter(rel => rel.from === element.id || rel.to === element.id)
      .flatMap(rel => [rel.from, rel.to])
      .filter(id => id !== element.id);
    const connectedRelationshipIds = relationships
      .filter(rel => (rel.from === element.id && connectedNodeIds.includes(rel.to)) ||
                     (rel.to === element.id && connectedNodeIds.includes(rel.from)))
      .map(rel => rel.id);
    const updatedNodes = myNodes.map(node => ({
      ...node,
      color: connectedNodeIds.includes(node.id) || node.id === element.id
        ? theme === "light"
          ? "#141414"
          : "#DDDDDD"
        : theme === "light"
          ? "#BBBBBB"
          : "#222222"
    }));
    const updatedRelationships = relationships.map(rel => ({
      ...rel,
      color: connectedRelationshipIds.includes(rel.id)
        ? theme === "light"
          ? "#141414"
          : "#DDDDDD"
        : theme === "light"
          ? "#EEEEEE"
          : "#222222"
    }));
    if (!dragged) {
      setMyNodes(updatedNodes);
      setRelationships(updatedRelationships);
    }
  } else {
    // Reset color when not hovering over any element
    const updatedNodes = myNodes.map(node => ({
      ...node,
      color: theme === "light" ? "#141414" : "#DDDDDD"
    }));
    const updatedRelationships = relationships.map(rel => ({
      ...rel,
      color: theme === "light" ? "#BBBBBB" : "#222222"
    }));
    if (!dragged) {
      setMyNodes(updatedNodes);
      setRelationships(updatedRelationships);
    }
  }
},
    onCanvasClick: (evt: MouseEvent) => console.log('onCanvasClick', evt),
    onCanvasDoubleClick: (evt: MouseEvent) => console.log('onCanvasDoubleClick', evt),
    onCanvasRightClick: (evt: MouseEvent) => console.log('onCanvasRightClick', evt),
    onDrag: (nodes: Node[]) => setDragged(true),
    onDragEnd: (nodes: Node[]) => setDragged(false),
    onPan: (evt: MouseEvent) => console.log('onPan', evt),
    onZoom: (zoomLevel: number) => console.log('onZoom', zoomLevel)
  }

return (
    <div className="flex flex-col py-48 gap-8">
      <h1>Learning through seeing</h1> 
      <p> <span className="text-foreground font-bold">See the big picture in your courses.</span>
         <br /> We take your study materials and add those concepts to a shared mind map.
      </p>
      <div className="max-w-full w-[1000px] h-[500px]">
        <InteractiveNvlWrapper nodes={myNodes} rels={relationships} mouseEventCallbacks={mouseEventCallbacks} />
      </div>
    </div>
  );
  }
