import clearIcon from "../assets/Vector (2).svg";
import { useDateRangePicker } from "../hooks/useDateRangePicker";

function CalendarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="2.5"
        width="13"
        height="12"
        rx="1.5"
        stroke="#5F5F5F"
        strokeWidth="1.2"
      />
      <line
        x1="1.5"
        y1="6"
        x2="14.5"
        y2="6"
        stroke="#5F5F5F"
        strokeWidth="1.2"
      />
      <path
        d="M4.5 1V3"
        stroke="#5F5F5F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 1V3"
        stroke="#5F5F5F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect x="4" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
      <rect x="7.25" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
      <rect x="10.5" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
      <rect x="4" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
      <rect x="7.25" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
      <rect x="10.5" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F" />
    </svg>
  );
}

export default function DateFilter({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) {
  const { fromInputRef, toInputRef, handleClear, triggerPicker } =
    useDateRangePicker({
      fromDate,
      toDate,
      onFromDateChange,
      onToDateChange,
    });

  return (
    <div className="date-filter-container">
      <span className="filter-label">Date</span>
      <div className="date-inputs-wrapper">
        <div className="date-input-group">
          <input
            type="text"
            ref={fromInputRef}
            placeholder="from"
            readOnly
            onClick={(e) => triggerPicker("from", e)}
          />
          <button
            type="button"
            className="btn-clear"
            onClick={(e) => handleClear("from", e)}
            aria-label="Clear date from"
          >
            <img src={clearIcon} alt="Clear" />
          </button>
          <div
            className="icon-calendar-wrapper"
            onClick={(e) => triggerPicker("from", e)}
          >
            <CalendarIcon />
          </div>
        </div>

        <div className="date-input-group">
          <input
            type="text"
            ref={toInputRef}
            placeholder="to"
            readOnly
            onClick={(e) => triggerPicker("to", e)}
          />
          <button
            type="button"
            className="btn-clear"
            onClick={(e) => handleClear("to", e)}
            aria-label="Clear date to"
          >
            <img src={clearIcon} alt="Clear" />
          </button>
          <div
            className="icon-calendar-wrapper"
            onClick={(e) => triggerPicker("to", e)}
          >
            <CalendarIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
