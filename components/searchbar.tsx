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
]

export function Searchbar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const route = (currentValue:any) => {
    setValue(currentValue === value ? "" : currentValue)
    
    if(currentValue==="cryptid corner"){
      router.push("/cryptid-corner");
    }
    if(currentValue==="cosmic mythology"){
      router.push("/cosmic-mythology");
    }
    if(currentValue=="paranormal science"){
      router.push("/paranormal-science");
    }
    if(currentValue==="ghost hunting"){
      router.push("/ghost-hunting");
    }
    if(currentValue==="spirit rumors"){
      router.push("/spirit-rumors");
    }
    if(currentValue==="categories"){
      router.push("/categories");
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between text-ellipsis truncate z-30"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Category"}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search categories..." className="h-9" />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                className={" truncate"}
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
