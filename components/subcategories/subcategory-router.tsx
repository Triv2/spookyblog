"use client"

import * as React from "react"
import { Search, CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation"
import ArticleCard from "../articles/article-card"

const subcategories = [
  {
    value: "subcategory1",
    label: "Subcategory 1",
  },
  {
    value: "subcategory2",
    label: "Subcategory 2",
  },
  {
    value: "subcategory3",
    label: "Subcategory 3",
  },
 
]

export function SubcategoryRouter() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("subcategory1")

  const switcher = (currentValue:any) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
  }

  return (
    <div className="flex items-center justify-center flex-col py-2 bg-slate-900/80 ">
      <div className="flex items-center gap-1 md:flex-row flex-col p-2">
        
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="green"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between text-ellipsis truncate z-30"
        >
          {value
            ? subcategories.find((category) => category.value === value)?.label
            : "Subcategory"}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="bg-gradient-to-l from-emerald-600/40 to-emerald-900/60 flex items-center gap-2 text-emerald-300 bg-opacity-50">
          <CommandInput placeholder="Search subcategories..." className="h-9" />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {subcategories.map((category) => (
              <CommandItem
                className={" truncate text-emerald-400 aria-selected:bg-emerald-700 aria-selected:text-emerald-200"}
                key={category.value}
                value={category.value}
                onSelect={(currentValue:any) => {
                  switcher(currentValue)
                }}
              >
                {category.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    <p className="text-purple-300/70 px-3">Search and select a subcategory to reveal all the articles.</p>
    </div>
    
      {value === "subcategory1" && (
        <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
        <ArticleCard/>
        <ArticleCard/>
        </div>
      )}
      {value === "subcategory2" && (
        <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        </div>
      )}

    
    </div>
  )
}
