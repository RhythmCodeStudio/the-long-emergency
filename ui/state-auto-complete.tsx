"use client";

import { useMemo, useState } from "react";
import { validateState } from "@/utils/utils";

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

type StateAutocompleteProps = {
  value: string;
  errorMessage: string;
  onChange: (value: string) => void;
  onErrorMessageChange?: (message: string) => void;
};

export default function StateAutocomplete({
  value,
  errorMessage,
  onChange,
  onErrorMessageChange,
}: StateAutocompleteProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredStates = useMemo(() => {
    const trimmed = value.trim();
    return trimmed
      ? usStates.filter((stateName) =>
          stateName.toLowerCase().includes(trimmed.toLowerCase()),
        )
      : usStates;
  }, [value]);

  const handleStateKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Tab" && filteredStates.length === 1) {
      const typedValue = value.trim().toLowerCase();
      const match = filteredStates[0];

      if (typedValue && match.toLowerCase().startsWith(typedValue)) {
        e.preventDefault();
        onChange(match);
        onErrorMessageChange?.("");
        setShowSuggestions(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-start w-full relative">
      <label className="m-2 text-left text-base" htmlFor="show-request-form-state">
        State
      </label>

      <input
        id="show-request-form-state"
        type="text"
        name="state"
        placeholder="Type or choose a state"
        value={value}
        // autoComplete="address-level1"
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => setShowSuggestions(false), 120);
        }}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
          if (validateState(e.target.value)) {
            onErrorMessageChange?.("");
          }
        }}
        onKeyDown={handleStateKeyDown}
        className="shadow-md shadow-white border-2 border-border-default w-full text-whitesmoke placeholder-white/40 rounded-3xl tracking-wide caret-blue-500 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/masks-no-text.png')] bg-no-repeat bg-cover bg-center px-6 pb-1 pt-2 flex items-center"
      />

      {showSuggestions && filteredStates.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-20 mt-2 rounded-2xl border border-white/20 bg-black/80 shadow-lg">
          {filteredStates.slice(0, 6).map((stateName) => (
            <button
              key={stateName}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(stateName);
                onErrorMessageChange?.("");
                setShowSuggestions(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10"
            >
              {stateName}
            </button>
          ))}
        </div>
      )}

      <p
        className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}
      >
        {errorMessage || " "}
      </p>
    </div>
  );
}