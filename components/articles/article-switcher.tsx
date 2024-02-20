"use client";

import { useState, useEffect, Suspense } from "react";
import { Search, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import ArticleCard from "../articles/article-card";
import { Skeleton } from "../ui/skeleton";
import Article from "@/app/(main)/(browse)/articles/[articleId]/_components/article";
import Sidebar from "@/app/(main)/(browse)/categories/_components/sidebar";

const articles = [
  {
    value: "articles",
    label: "Articles",
  },
  {
    value: "article1",
    label: "Article 1",
  },
  {
    value: "article2",
    label: "Article 2",
  },
  {
    value: "article3",
    label: "Article 3",
  },
];

export const ArticleSwitcher = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("articles");

  const switcher = (currentValue: any) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center flex-col  w-full ">
      <div className="flex items-center gap-1 md:flex-row flex-col p-2  w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="purple"
              role="combobox"
              aria-expanded={open}
              className="min-w-[200px] w-auto justify-between text-emerald-400 text-ellipsis truncate z-30 bg-gradient-to-tl from-emerald-600/40  to-purple-900/60"
            >
              {value
                ? articles.find((article) => article.value === value)?.label
                : "Article"}
              <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0 border-none">
            <Command className="bg-gradient-to-tl from-emerald-600/40  to-purple-900/60 flex items-center gap-2 text-emerald-300 bg-opacity-50 ">
              <CommandInput
                placeholder="Search articles..."
                className="h-9 placeholder:text-emerald-300 "
              />
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {articles.map((article) => (
                  <CommandItem
                    className={
                      " truncate text-emerald-400 aria-selected:bg-emerald-700 aria-selected:text-emerald-200"
                    }
                    key={article.value}
                    value={article.value}
                    onSelect={(currentValue: any) => {
                      switcher(currentValue);
                    }}
                  >
                    {article.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === article.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <p className="text-purple-300/70 px-3 text-sm">
          Search or select an article.
        </p>
      </div>
      {value === "articles" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center h-full justify-center px-5  py-3 gap-5">
          <Suspense fallback={<ArticleCard.Skeleton />}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </Suspense>
        </div>
      )}

      {value === "article1" && (
        <div className=" min-h-screen w-full  p-2 md:p-10 flex  md:flex-row flex-col justify-center gap-1">
          <Suspense fallback={<ArticleCard.Skeleton />}>
            <Article />
            <Sidebar />
          </Suspense>
        </div>
      )}
      {value === "article2" && (
        <div className=" min-h-screen w-full  p-2 md:p-10 flex  md:flex-row flex-col justify-center gap-1">
          <Suspense fallback={<ArticleCard.Skeleton />}>
            <Article />
            <Sidebar />
          </Suspense>
        </div>
      )}
    </div>
  );
};

ArticleSwitcher.Skeleton = function SkeletonArticleList() {
  return (
    <div className="flex flex-col items-center gap-2 w-full ">
      <Skeleton className="aspect-video bg-gradient-to-bl from-purple-600/40 to-emerald-900/60 h-[300px] px-5 w-full p-2" />
      <Skeleton className="aspect-video bg-gradient-to-bl from-purple-600/40 to-emerald-900/60 h-[300px] px-5 w-full p-2" />
      <Skeleton className="aspect-video bg-gradient-to-bl from-purple-600/40 to-emerald-900/60 h-[300px] px-5 w-full p-2" />
    </div>
  );
};
