import logoM from '../assets/logo_M.svg';
import DateFilter from './DateFilter';
import ViewToggle from './ViewToggle';

export default function ProfileHeader({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  viewMode,
  onViewModeChange,
}) {
  return (
    <header className="profile-card">
      <div className="profile-card-inner">
        <div className="logo-section">
          <div className="logo-container">
            <img src={logoM} alt="Monblan logo" />
          </div>
        </div>
        <div className="info-section">
          <div className="header-row">
            <h1 className="username">monblanproject</h1>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-start-date"
            >
              Start on 17-02-2016
            </a>
          </div>
          <div className="stats-row">
            <span>
              <strong>870</strong> posts
            </span>
            <span>
              <strong>11,787</strong> followers
            </span>
            <span>
              <strong>112</strong> following
            </span>
          </div>
          <div className="actions-row">
            <DateFilter
              fromDate={fromDate}
              toDate={toDate}
              onFromDateChange={onFromDateChange}
              onToDateChange={onToDateChange}
            />
            <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
