import { useMemo, useState } from 'react';
import BackgroundWaves from './components/BackgroundWaves';
import ProfileHeader from './components/ProfileHeader';
import Feed from './components/Feed';

import img0 from './assets/Rectangle 20.webp';
import img1 from './assets/Rectangle 20-1.webp';
import img2 from './assets/Rectangle 20-2.webp';
import img3 from './assets/Rectangle 20-3.webp';
import img4 from './assets/Rectangle 20-4.webp';
import img5 from './assets/Rectangle 20-5.webp';
import img6 from './assets/Rectangle 20-6.webp';
import img7 from './assets/Rectangle 20-7.webp';
import img8 from './assets/Rectangle 20-8.webp';

const parseDate = (dateStr) => {
  if (!dateStr) return null;
  const cleanStr = dateStr.replace(/_/g, '-');
  const parts = cleanStr.split('-');
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
};

const ALL_MOCK_POSTS = [
  { id: 1, image: img1, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 2, image: img8, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 3, image: img7, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 4, image: img1, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 5, image: img4, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 6, image: img0, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 7, image: img6, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 8, image: img3, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },
  { id: 9, image: img2, todayStats: { likes: 128, comments: 31 }, histStats: { date: '9-08-2016', likes: 67, comments: 22 }, uploadDate: '11-04-2016' },

  { id: 10, image: img0, todayStats: { likes: 142, comments: 35 }, histStats: { date: '9-08-2016', likes: 78, comments: 24 }, uploadDate: '15-08-2016' },
  { id: 11, image: img1, todayStats: { likes: 156, comments: 40 }, histStats: { date: '9-08-2016', likes: 82, comments: 29 }, uploadDate: '22-08-2016' },
  { id: 12, image: img2, todayStats: { likes: 130, comments: 28 }, histStats: { date: '9-08-2016', likes: 65, comments: 20 }, uploadDate: '01-09-2016' },
  { id: 13, image: img3, todayStats: { likes: 175, comments: 50 }, histStats: { date: '9-08-2016', likes: 92, comments: 35 }, uploadDate: '10-09-2016' },
  { id: 14, image: img4, todayStats: { likes: 98, comments: 15 }, histStats: { date: '9-08-2016', likes: 45, comments: 10 }, uploadDate: '28-09-2016' },
  { id: 15, image: img5, todayStats: { likes: 210, comments: 64 }, histStats: { date: '9-08-2016', likes: 115, comments: 48 }, uploadDate: '05-10-2016' },
  { id: 16, image: img6, todayStats: { likes: 112, comments: 22 }, histStats: { date: '9-08-2016', likes: 58, comments: 16 }, uploadDate: '20-10-2016' },
  { id: 17, image: img7, todayStats: { likes: 185, comments: 48 }, histStats: { date: '9-08-2016', likes: 88, comments: 30 }, uploadDate: '12-11-2016' },
  { id: 18, image: img8, todayStats: { likes: 250, comments: 80 }, histStats: { date: '9-08-2016', likes: 140, comments: 55 }, uploadDate: '09-12-2016' },

  { id: 19, image: img0, todayStats: { likes: 310, comments: 95 }, histStats: { date: '9-08-2016', likes: 180, comments: 72 }, uploadDate: '14-01-2017' },
  { id: 20, image: img1, todayStats: { likes: 120, comments: 25 }, histStats: { date: '9-08-2016', likes: 50, comments: 15 }, uploadDate: '28-01-2017' },
  { id: 21, image: img2, todayStats: { likes: 275, comments: 70 }, histStats: { date: '9-08-2016', likes: 155, comments: 50 }, uploadDate: '15-02-2017' },
  { id: 22, image: img3, todayStats: { likes: 190, comments: 44 }, histStats: { date: '9-08-2016', likes: 98, comments: 28 }, uploadDate: '02-03-2017' },
  { id: 23, image: img4, todayStats: { likes: 148, comments: 32 }, histStats: { date: '9-08-2016', likes: 75, comments: 21 }, uploadDate: '20-03-2017' },
  { id: 24, image: img5, todayStats: { likes: 340, comments: 110 }, histStats: { date: '9-08-2016', likes: 210, comments: 85 }, uploadDate: '10-04-2017' },
  { id: 25, image: img6, todayStats: { likes: 165, comments: 38 }, histStats: { date: '9-08-2016', likes: 82, comments: 24 }, uploadDate: '25-04-2017' },
  { id: 26, image: img7, todayStats: { likes: 290, comments: 75 }, histStats: { date: '9-08-2016', likes: 160, comments: 60 }, uploadDate: '18-05-2017' },
  { id: 27, image: img8, todayStats: { likes: 420, comments: 130 }, histStats: { date: '9-08-2016', likes: 250, comments: 98 }, uploadDate: '01-06-2017' }
];

export default function App() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('09_08_2016');
  const [viewMode, setViewMode] = useState('list');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredPosts = useMemo(() => {
    const fromVal = parseDate(fromDate);
    const toVal = parseDate(toDate);

    return ALL_MOCK_POSTS.filter((post) => {
      const uploadVal = parseDate(post.uploadDate);
      if (!uploadVal) return true;

      if (fromVal && uploadVal < fromVal) return false;
      if (toVal && uploadVal > toVal) return false;
      return true;
    });
  }, [fromDate, toDate]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="app-container">
      <BackgroundWaves />
        <ProfileHeader
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        
        <Feed
          posts={visiblePosts}
          viewMode={viewMode}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
    </div>
  );
}
