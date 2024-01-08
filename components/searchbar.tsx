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

const categories = [
  {
    value: "/",
    label: "Home",
  },
  {
    value: "articles",
    label: "Articles",
  },
  {
    value: "categories",
    label: "Categories",
  },
  {
    value: "cryptid corner",
    label: "Cryptid Corner",
  },
  {
    value: "paranormal science",
    label: "Paranormal Science",
  },
  {
    value: "cosmic mythology",
    label: "Cosmic Mythology",
  },
  {
    value: "ghost hunting",
    label: "Ghost Hunting",
  },
  {
    value: "spirit rumors",
    label: "Spirit Rumors",
  },
  {
    value: "urban legends",
    label: "Urban Legends",
  },
]

export function Searchbar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const route = (currentValue:any) => {
    setValue(currentValue === value ? "" : currentValue)
    
    if(currentValue==="cryptid corner"){
      router.push("/categories/cryptid-corner");
    }
    if(currentValue==="cosmic mythology"){
      router.push("/categories/cosmic-mythology");
    }
    if(currentValue=="paranormal science"){
      router.push("/categories/paranormal-science");
    }
    if(currentValue==="ghost hunting"){
      router.push("/categories/ghost-hunting");
    }
    if(currentValue==="spirit rumors"){
      router.push("/categories/spirit-rumors");
    }
    if(currentValue==="urban legends"){
      router.push("/categories/urban-legends");
    }
    if(currentValue==="categories"){
      router.push("/categories");
    }
    if(currentValue==="articles"){
      router.push("/articles");
    }
    if(currentValue==="/"){
      router.push("/");
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="purple"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between text-ellipsis text-emerald-400 truncate z-30 shadow-sm bg-gradient-to-tl from-emerald-600/40 to-purple-900/60 "
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Category"}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0  border-0">
        <Command className=" bg-gradient-to-tl from-emerald-600/40 to-purple-900/60 flex items-center gap-2 text-fuchsia-500 bg-opacity-50">
          <CommandInput placeholder="Search categories..." className="h-9 text-emerald-300 placeholder:text-emerald-300" />
          <CommandEmpty className="text-emerald-300 text-sm p-4">No category found.</CommandEmpty>
          <CommandGroup  >
            {categories.map((category) => (
              <CommandItem
                className={" truncate text-purple-400 aria-selected:bg-purple-500/40 aria-selected:text-purple-200"}
                key={category.value}
                value={category.value}
                onSelect={(currentValue:any) => {
                  route(currentValue)
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
  )
}
