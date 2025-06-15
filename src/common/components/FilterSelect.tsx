import { useLayoutEffect, useRef, useState } from "react";
import useOnOutsideClick from "../hooks/useOnOutsideClick";

interface FilterSelectProps<T extends { id: number }> {
  value: T | undefined;
  onSelect: (value: T) => void;
  options: T[];
  labelFn: (option: T) => string;
}

export default function FilterSelect<T extends { id: number }>({
  value,
  onSelect,
  options,
  labelFn,
}: FilterSelectProps<T>) {
  const [searchText, setSearchText] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const selectorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSearchText("");
  };

  useOnOutsideClick(selectorRef, handleCloseOverlay);

  useLayoutEffect(() => {
    const updateOverlayHeight = () => {
      if (selectorRef.current && overlayRef.current) {
        const freeSpace =
          window.innerHeight -
          selectorRef.current.getBoundingClientRect().bottom -
          OVERLAY_SCREEN_GAP;
        overlayRef.current.style.maxHeight = freeSpace + "px";
      }
    };

    updateOverlayHeight();

    window.addEventListener("resize", updateOverlayHeight);
    return () => window.removeEventListener("resize", updateOverlayHeight);
  }, [showOverlay]);

  const filteredOptions = options.filter((x) =>
    labelFn(x).toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );

  const handleOnClick = (option: T) => {
    onSelect(option);
    handleCloseOverlay();
  };

  return (
    <div className="relative" ref={selectorRef}>
      <input
        className="border-primary border-2 border-solid p-1 rounded-md"
        onClick={() => setShowOverlay(true)}
        onChange={(e) => setSearchText(e.target.value)}
        value={showOverlay || !value ? searchText : labelFn(value)}
        placeholder="Select one"
      />
      {showOverlay && (
        <div
          ref={overlayRef}
          className="absolute w-full bg-background border-primary border-2 border-solid overflow-auto"
        >
          {filteredOptions.map((x) => (
            <div
              key={x.id}
              className="p-1 cursor-pointer hover:bg-accent hover:text-on-accent"
              onClick={() => handleOnClick(x)}
            >
              {labelFn(x)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const OVERLAY_SCREEN_GAP = 16;
