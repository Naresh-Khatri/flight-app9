"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const departurePorts = [
  // United States - East Coast
  { name: "Miami, FL", code: "MIA" },
  { name: "Fort Lauderdale, FL", code: "FLL" },
  { name: "Port Canaveral (Orlando), FL", code: "PCV" },
  { name: "Tampa, FL", code: "TPA" },
  { name: "Jacksonville, FL", code: "JAX" },
  { name: "Charleston, SC", code: "CHS" },
  { name: "Baltimore, MD", code: "BWI" },
  { name: "Cape Liberty (New York), NJ", code: "CBL" },
  { name: "Manhattan (New York), NY", code: "NYC" },
  { name: "Brooklyn (New York), NY", code: "BKN" },
  { name: "Boston, MA", code: "BOS" },
  { name: "Norfolk, VA", code: "ORF" },
  { name: "Bayonne, NJ", code: "BAY" },
  { name: "Portland, ME", code: "PWM" },
  { name: "Bar Harbor, ME", code: "BHB" },
  { name: "Galveston, TX", code: "GAL" },
  { name: "Mobile, AL", code: "MOB" },
  { name: "New Orleans, LA", code: "MSY" },

  // United States - West Coast
  { name: "Los Angeles, CA", code: "LAX" },
  { name: "Long Beach, CA", code: "LGB" },
  { name: "San Diego, CA", code: "SAN" },
  { name: "San Francisco, CA", code: "SFO" },
  { name: "Seattle, WA", code: "SEA" },
  { name: "Portland, OR", code: "PDX" },
  { name: "Monterey, CA", code: "MRY" },
  { name: "Astoria, OR", code: "AST" },
  { name: "Vancouver, BC", code: "YVR" },
  { name: "Victoria, BC", code: "YYJ" },

  // Hawaii
  { name: "Honolulu, HI", code: "HNL" },
  { name: "Kahului, Maui, HI", code: "OGG" },
  { name: "Hilo, HI", code: "ITO" },
  { name: "Kona, HI", code: "KOA" },
  { name: "Nawiliwili, Kauai, HI", code: "LIH" },

  // Caribbean
  { name: "San Juan, Puerto Rico", code: "SJU" },
  { name: "Charlotte Amalie, St. Thomas", code: "STT" },
  { name: "Philipsburg, St. Maarten", code: "SXM" },
  { name: "Basseterre, St. Kitts", code: "SKB" },
  { name: "George Town, Grand Cayman", code: "GCM" },
  { name: "Roatan, Honduras", code: "RTB" },
  { name: "Ocho Rios, Jamaica", code: "OCJ" },
  { name: "Montego Bay, Jamaica", code: "MBJ" },
  { name: "Bridgetown, Barbados", code: "BGI" },
  { name: "St. Johns, Antigua", code: "ANU" },
  { name: "Castries, St. Lucia", code: "SLU" },
  { name: "Nassau, Bahamas", code: "NAS" },
  { name: "Freeport, Bahamas", code: "FPO" },
  { name: "Cozumel, Mexico", code: "CZM" },
  { name: "Costa Maya, Mexico", code: "CTM" },
  { name: "Progreso, Mexico", code: "PGO" },

  // Mediterranean & Europe
  { name: "Barcelona, Spain", code: "BCN" },
  { name: "Rome (Civitavecchia), Italy", code: "FCO" },
  { name: "Venice, Italy", code: "VCE" },
  { name: "Athens (Piraeus), Greece", code: "ATH" },
  { name: "Naples, Italy", code: "NAP" },
  { name: "Marseille, France", code: "MRS" },
  { name: "Palma de Mallorca, Spain", code: "PMI" },
  { name: "Amsterdam, Netherlands", code: "AMS" },
  { name: "Copenhagen, Denmark", code: "CPH" },
  { name: "Southampton, England", code: "SOU" },
  { name: "Hamburg, Germany", code: "HAM" },
  { name: "Stockholm, Sweden", code: "STO" },
  { name: "Oslo, Norway", code: "OSL" },
  { name: "Bergen, Norway", code: "BGO" },
  { name: "Dublin, Ireland", code: "DUB" },
  { name: "Reykjavik, Iceland", code: "REK" },
  { name: "Lisbon, Portugal", code: "LIS" },
  { name: "Valletta, Malta", code: "MLA" },
  { name: "Istanbul, Turkey", code: "IST" },
  { name: "Dubrovnik, Croatia", code: "DBV" },
  { name: "Monte Carlo, Monaco", code: "MCM" },
  { name: "Nice, France", code: "NCE" },
  { name: "Genoa, Italy", code: "GOA" },
  { name: "Kiel, Germany", code: "KEL" },
];

const cruiseLines = [
  "Royal Caribbean",
  "Carnival Cruise Line",
  "Norwegian Cruise Line",
  "Celebrity Cruises",
  "Princess Cruises",
  "MSC Cruises",
  "Holland America Line",
  "Disney Cruise Line",
];

const cruiseLengths = [
  "2-3 nights",
  "4-6 nights",
  "7-9 nights",
  "10-14 nights",
  "15+ nights",
];

const destinations = [
  // Caribbean Regions
  { name: "Eastern Caribbean", code: "ECARIB" },
  { name: "Western Caribbean", code: "WCARIB" },
  { name: "Southern Caribbean", code: "SCARIB" },
  { name: "Bahamas", code: "BAHA" },
  { name: "Bermuda", code: "BER" },

  // Americas
  { name: "Mexican Riviera", code: "MEXRIV" },
  { name: "Baja Mexico", code: "BAJAMEX" },
  { name: "Alaska", code: "AK" },
  { name: "Pacific Northwest", code: "PNW" },
  { name: "Canada/New England", code: "CANE" },
  { name: "Panama Canal", code: "PAN" },
  { name: "Central America", code: "CENTAM" },
  { name: "South America", code: "SAM" },
  { name: "Amazon River", code: "AMZN" },
  { name: "California Coast", code: "CALCST" },
  { name: "Hawaii", code: "HI" },

  // Europe
  { name: "Western Mediterranean", code: "WMED" },
  { name: "Eastern Mediterranean", code: "EMED" },
  { name: "Greek Isles", code: "GREEK" },
  { name: "British Isles", code: "BRIT" },
  { name: "Baltic Sea", code: "BALT" },
  { name: "Norwegian Fjords", code: "FJORDS" },
  { name: "Iceland & Greenland", code: "ARCTIC" },
  { name: "Northern Europe", code: "NEUR" },
  { name: "Western Europe", code: "WEUR" },

  // Asia & Pacific
  { name: "Southeast Asia", code: "SEAST" },
  { name: "Japan & Korea", code: "JPKOR" },
  { name: "China", code: "CHINA" },
  { name: "South Pacific", code: "SPAC" },
  { name: "Australia", code: "AUS" },
  { name: "New Zealand", code: "NZ" },
  { name: "Tasmania", code: "TAS" },
  { name: "French Polynesia", code: "FPOLY" },

  // Indian Ocean & Middle East
  { name: "Dubai & Emirates", code: "UAE" },
  { name: "India", code: "INDIA" },
  { name: "Indian Ocean", code: "INOCN" },
  { name: "Maldives", code: "MLD" },
  { name: "Seychelles", code: "SEY" },

  // Special Voyages
  { name: "World Cruise", code: "WORLD" },
  { name: "Transatlantic", code: "TRAN" },
  { name: "Transpacific", code: "TPAC" },
  { name: "Antarctica", code: "ANT" },
  { name: "African Coast", code: "AFR" },
  { name: "Suez Canal", code: "SUEZ" },
  { name: "Grand Voyages", code: "GRAND" },

  // Themed
  { name: "Holiday Cruises", code: "HOLIDAY" },
  { name: "Repositioning", code: "REPO" },
  { name: "Wine Country", code: "WINE" },
  { name: "Northern Lights", code: "AURORA" },
];

export function CruiseSearchForm() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState("");
  const [date, setDate] = useState("");
  const [line, setLine] = useState("");

  const isFormValid = destination && departure && length && date && line;

  const activeFilters = [
    destination && {
      label: destinations.find((d) => d.code === destination)?.name,
      onClear: () => setDestination(""),
    },
    departure && {
      label: departurePorts.find((p) => p.code === departure)?.name,
      onClear: () => setDeparture(""),
    },
    length && {
      label: cruiseLengths.find((l) => l.toLowerCase() === length),
      onClear: () => setLength(""),
    },
    date && {
      label: date === "custom" ? "Custom date" : `Next ${date.split("-")[1]}`,
      onClear: () => setDate(""),
    },
    line && {
      label: cruiseLines.find((l) => l.toLowerCase() === line),
      onClear: () => setLine(""),
    },
  ].filter(Boolean);

  const buildSearchUrl = () => {
    const params = new URLSearchParams();

    if (destination) params.append("dest", destination);
    if (departure) params.append("port", departure);
    if (length) params.append("length", length);
    if (date) params.append("date", date);
    if (line) params.append("line", line.toLowerCase());

    return `/search?${params.toString()}`;
  };

  return (
    <div className="space-y-4">
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl">
        <div className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-start text-left font-normal"
              >
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-70" />
                {destination
                  ? destinations.find((d) => d.code === destination)?.name
                  : "Search cruise destinations"}
                <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]">
              <Command>
                <CommandInput placeholder="Search destinations..." />
                <CommandList>
                  <CommandEmpty>No destination found.</CommandEmpty>
                  <CommandGroup>
                    {destinations.map((dest) => (
                      <CommandItem
                        key={dest.code}
                        value={dest.code}
                        onSelect={(currentValue) => {
                          setDestination(
                            currentValue === destination ? "" : currentValue,
                          );
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            destination === dest.code
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {dest.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={date} onValueChange={setDate}>
              <SelectTrigger>
                <SelectValue placeholder="Departure date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next-3-months">Next 3 months</SelectItem>
                <SelectItem value="next-6-months">Next 6 months</SelectItem>
                <SelectItem value="next-year">Next year</SelectItem>
                <SelectItem value="custom">Custom date</SelectItem>
              </SelectContent>
            </Select>

            <Select value={length} onValueChange={setLength}>
              <SelectTrigger>
                <SelectValue placeholder="Cruise length" />
              </SelectTrigger>
              <SelectContent>
                {cruiseLengths.map((length) => (
                  <SelectItem key={length} value={length.toLowerCase()}>
                    {length}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <SelectDeparture value={departure} onChange={setDeparture} />

            <Select value={line} onValueChange={setLine}>
              <SelectTrigger>
                <SelectValue placeholder="Cruise line" />
              </SelectTrigger>
              <SelectContent>
                {cruiseLines.map((line) => (
                  <SelectItem key={line} value={line.toLowerCase()}>
                    {line}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-end">
              <Button asChild disabled={!isFormValid}>
                <a
                  href={buildSearchUrl()}
                  className={cn(!isFormValid && "pointer-events-none")}
                >
                  View cruises
                </a>
              </Button>
            </div>
            {!isFormValid && (
              <p className="text-sm text-red-400 text-right">
                * Please fill in all fields to search for cruises
              </p>
            )}
          </div>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-full text-sm"
            >
              {/* @ts-ignore */}
              <span>{filter.label}</span>
              <button
                onClick={() => {
                  /* @ts-ignore */
                  filter?.onClear();
                }}
                className="hover:text-red-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          {activeFilters.length > 1 && (
            <button
              onClick={() => {
                setDestination("");
                setDeparture("");
                setLength("");
                setDate("");
                setLine("");
              }}
              className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function SelectDeparture({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-ellipsis truncate overflow-hidden"
        >
          {value
            ? departurePorts.find((port) => port.code === value)?.name
            : "departure port..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 " align="start">
        <Command>
          <CommandInput placeholder="Search ports..." />
          <CommandList>
            <CommandEmpty>No port found.</CommandEmpty>
            <CommandGroup>
              {departurePorts.map((port) => (
                <CommandItem
                  key={port.code}
                  value={port.code}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === port.code ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {port.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
