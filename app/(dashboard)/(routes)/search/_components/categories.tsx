"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcTreeStructure,
  FcOldTimeCamera,
  FcIdea,
  FcAlphabeticalSortingAz,
  FcFlowChart,
  FcAcceptDatabase,
  FcPositiveDynamic,

  FcShipped,
  FcSettings,
} from "react-icons/fc";
import { LuBinary } from "react-icons/lu";
import { TbBinaryTree,TbBrandJavascript } from "react-icons/tb";
import { VscFileBinary } from "react-icons/vsc";
import { FaBusinessTime } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";

import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Computer Science Fundamentals": FcFlowChart, 
  "Software Engineering Essentials": FcShipped,
  "Information System Basics": FcAcceptDatabase, //data visualization example
  "Introduction to Programming": FaJava,
  "Essential Data Structures": FcTreeStructure,
  "Algorithmic Principles": FcAlphabeticalSortingAz,
  "Problem Solving Strategies": FcIdea,
  "Business and Tech Integration": FaBusinessTime,
  "Web Programming": TbBrandJavascript,

};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}