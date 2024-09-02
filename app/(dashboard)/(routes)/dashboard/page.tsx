"use client";

 import React from 'react';
import {Card} from "@/components/ui/card";
import { ArrowRight, MessageSquare, Music ,Image, VideoIcon, Code} from "lucide-react";
import {cn} from "@/lib/utils"
import { useRouter } from 'next/navigation';
const tools=[
  {
    label:"conversation",
    icon:MessageSquare,
    color:"text-violet-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label:"Music generation",
    icon:Music,
    color:"text-emerald-500",
    bgColor:"bg-emerald-500/10",
    href:"/music"
  },
  {
  label:"Image generation",
    icon:Image,
    color:"text-pink-700",
    bgColor:"bg-emerald-700/10",
    href:"/image"
}, 
{
  label:"Video generation",
    icon:VideoIcon,
    color:"text-orange-700",
    bgColor:"bg-orange-700/10",
    href:"/video"
},
{
  label:"code generation",
    icon:Code,
    color:"text-green-700",
    bgColor:"bg-green-700/10",
    href:"/code"
}

  
]
const DashboardPage = () => {
  const router=useRouter();
  return (
    <div>
      {/* Container for header section */}
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      {/* Container for additional content */}
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool)=>(
        <Card 
        onClick={()=>router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-center
        justify-between hover:shadow-md transition
        cursor-pointer"
      >
       <div className="flex items-center gap-x-4">
        <div className={cn("p-2 w-fit roundend-md",tool.bgColor)}>
          <tool.icon className={cn("w-8 h-8",tool.color)}/>
       </div>
       <div className="font-semibold">
        {tool.label}
       </div>
       </div>
       <ArrowRight className="w-5 h-5"/>
      </Card>
      )) }
      
      </div>
    </div>
  );
};

export default DashboardPage;
