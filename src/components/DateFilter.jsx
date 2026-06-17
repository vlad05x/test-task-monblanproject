import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import clearIcon from '../assets/Vector (2).svg';

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="#5F5F5F" strokeWidth="1.2"/>
      <line x1="1.5" y1="6" x2="14.5" y2="6" stroke="#5F5F5F" strokeWidth="1.2"/>
      <path d="M4.5 1V3" stroke="#5F5F5F" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M11.5 1V3" stroke="#5F5F5F" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="4" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
      <rect x="7.25" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
      <rect x="10.5" y="8" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
      <rect x="4" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
      <rect x="7.25" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
      <rect x="10.5" y="11" width="1.5" height="1.5" rx="0.3" fill="#5F5F5F"/>
    </svg>
  );
}

export default function DateFilter({ fromDate, toDate, onFromDateChange, onToDateChange }) {
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const fpFromRef = useRef(null);
  const fpToRef = useRef(null);

  useEffect(() => {
    const fpFrom = flatpickr(fromInputRef.current, {
      dateFormat: "d_m_Y",
      allowInput: true,
      onChange: (selectedDates, dateStr) => {
        onFromDateChange(dateStr);
        if (fpToRef.current) {
          fpToRef.current.set('minDate', dateStr ? selectedDates[0] : null);
        }
      }
    });
    fpFromRef.current = fpFrom;

    const fpTo = flatpickr(toInputRef.current, {
      dateFormat: "d_m_Y",
      allowInput: true,
      onChange: (selectedDates, dateStr) => {
        onToDateChange(dateStr);
        if (fpFromRef.current) {
          fpFromRef.current.set('maxDate', dateStr ? selectedDates[0] : null);
        }
      }
    });
    fpToRef.current = fpTo;

    return () => {
      if (fpFromRef.current) fpFromRef.current.destroy();
      if (fpToRef.current) fpToRef.current.destroy();
    };
  }, [onFromDateChange, onToDateChange]);

  useEffect(() => {
    if (fpFromRef.current && fpFromRef.current.input.value !== fromDate) {
      fpFromRef.current.setDate(fromDate || null, false);
      if (fpToRef.current) {
        fpToRef.current.set('minDate', fromDate ? fpFromRef.current.selectedDates[0] : null);
      }
    }
  }, [fromDate]);

  useEffect(() => {
    if (fpToRef.current && fpToRef.current.input.value !== toDate) {
      fpToRef.current.setDate(toDate || null, false);
      if (fpFromRef.current) {
        fpFromRef.current.set('maxDate', toDate ? fpToRef.current.selectedDates[0] : null);
      }
    }
  }, [toDate]);

  const handleClear = (type, e) => {
    e.stopPropagation();
    if (type === 'from') {
      if (fpFromRef.current) fpFromRef.current.clear();
      onFromDateChange('');
      if (fpToRef.current) fpToRef.current.set('minDate', null);
    } else {
      if (fpToRef.current) fpToRef.current.clear();
      onToDateChange('');
      if (fpFromRef.current) fpFromRef.current.set('maxDate', null);
    }
  };

  const triggerPicker = (type) => {
    if (type === 'from' && fpFromRef.current) {
      fpFromRef.current.open();
    } else if (type === 'to' && fpToRef.current) {
      fpToRef.current.open();
    }
  };

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
            onClick={() => triggerPicker('from')}
          />
          <button
            type="button"
            className="btn-clear"
            onClick={(e) => handleClear('from', e)}
            aria-label="Clear date from"
          >
            <img src={clearIcon} alt="Clear" />
          </button>
          <div className="icon-calendar-wrapper" onClick={() => triggerPicker('from')}>
            <CalendarIcon />
          </div>
        </div>

        <div className="date-input-group">
          <input
            type="text"
            ref={toInputRef}
            placeholder="to"
            readOnly
            onClick={() => triggerPicker('to')}
          />
          <button
            type="button"
            className="btn-clear"
            onClick={(e) => handleClear('to', e)}
            aria-label="Clear date to"
          >
            <img src={clearIcon} alt="Clear" />
          </button>
          <div className="icon-calendar-wrapper" onClick={() => triggerPicker('to')}>
            <CalendarIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
