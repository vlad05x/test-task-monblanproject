function GridIcon() {
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="6.75" y="0" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="13.5" y="0" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="0" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="6.75" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="13.5" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="0" y="13.5" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="6.75" y="13.5" width="4.5" height="4.5" fill="currentColor"/>
      <rect x="13.5" y="13.5" width="4.5" height="4.5" fill="currentColor"/>
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="1" width="4" height="3" fill="currentColor"/>
      <line x1="7" y1="2.5" x2="18" y2="2.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="0" y="7.5" width="4" height="3" fill="currentColor"/>
      <line x1="7" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="2"/>
      <rect x="0" y="14" width="4" height="3" fill="currentColor"/>
      <line x1="7" y1="15.5" x2="18" y2="15.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export default function ViewToggle({ viewMode, onViewModeChange }) {
  return (
    <div className="view-toggle">
      <button
        type="button"
        className={`btn-toggle ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => onViewModeChange('grid')}
        title="Grid view"
        aria-label="Switch to Grid View"
      >
        <GridIcon />
      </button>

      <button
        type="button"
        className={`btn-toggle ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => onViewModeChange('list')}
        title="List view"
        aria-label="Switch to List View"
      >
        <ListIcon />
      </button>
    </div>
  );
}
