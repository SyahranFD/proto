"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

const categories = [
  {
    value: "Software Development",
    label: "Software Development",
  },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "2D Animation",
    label: "2D Animation",
  },
  {
    value: "3D Animation",
    label: "3D Animation",
  },
];

interface ComboboxCategoryProjectProps {
  onSelect: (value: string) => void;
}

export function ComboboxCategoryProject({ onSelect }: ComboboxCategoryProjectProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between py-3 px-4 h-auto bg-gray-100 rounded-xl"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={() => {
                  const newValue = category.value === value ? "" : category.value;
                  setValue(newValue);
                  if (onSelect) {
                    onSelect(newValue);
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
