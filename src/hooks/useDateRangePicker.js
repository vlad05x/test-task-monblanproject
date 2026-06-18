import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";

export function useDateRangePicker({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) {
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  
  const fpFromRef = useRef(null);
  const fpToRef = useRef(null);

  useEffect(() => {
    fpFromRef.current = flatpickr(fromInputRef.current, {
      dateFormat: "d_m_Y",
      allowInput: true,
      onChange: ([selectedDate], dateStr) => {
        onFromDateChange(dateStr);
      },
    });

    fpToRef.current = flatpickr(toInputRef.current, {
      dateFormat: "d_m_Y",
      allowInput: true,
      onChange: ([selectedDate], dateStr) => {
        onToDateChange(dateStr);
      },
    });

    return () => {
      fpFromRef.current?.destroy();
      fpToRef.current?.destroy();
    };
  }, []); 

  useEffect(() => {
    fpFromRef.current?.setDate(fromDate || null);
    fpToRef.current?.set("minDate", fromDate || null);
  }, [fromDate]);

  useEffect(() => {
    fpToRef.current?.setDate(toDate || null);
    fpFromRef.current?.set("maxDate", toDate || null);
  }, [toDate]);

  const handleClear = (type, e) => {
    e.stopPropagation();
    if (type === "from") {
      onFromDateChange("");
    } else {
      onToDateChange("");
    }
  };

  const triggerPicker = (type, e) => {
    if (e) e.stopPropagation();
    if (type === "from") {
      fpFromRef.current?.open();
    } else {
      fpToRef.current?.open();
    }
  };

  return {
    fromInputRef,
    toInputRef,
    handleClear,
    triggerPicker,
  };
}
