import { FaBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const NewsCard = ({news, title}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const newsData = {
    "id": "bcdefa0123456789bcdefa01",
    "category_id": 2,
    "title": "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
    "rating": {
      "number": 4,
      "badge": "trending"
    },
    "total_view": 6789,
    "author": {
      "name": "Shirin Akter",
      "published_date": "2025-04-22T17:00:00.000Z",
      "img": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    "thumbnail_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
    "image_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
    "details": "Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend. The increase in export earnings is attributed to rising global demand and the government's supportive policies aimed at enhancing trade competitiveness. Analysts predict continued growth in the coming quarters, provided that global economic conditions remain favorable and domestic industries maintain their momentum. This positive export performance is expected to have a favorable impact on the country's foreign exchange reserves and overall economic stability.",
    "tags": ["exports", "economy", "business", "growth", "trade"],
    "others": {
      "is_today_pick": true,
      "is_trending": true
    },
    "production": true
  };

  // Format date to match the style in the image
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const currentDate = formatDate(news.author.published_date);


  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Header with category and date */}
      <div className="bg-gray-100 px-6 py-3 flex justify-between items-center">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
        {title}
        </span>
        <span className="text-sm text-gray-500">{currentDate}</span>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar with icons - UPDATED POSITION */}
        <div className="md:w-12 bg-gray-50 flex md:flex-col justify-start items-start py-4 md:py-6 px-4 md:px-2">
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full mb-4 ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            <FaBookmark size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-500">
            <FaShareAlt size={20} />
          </button>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Title only - removed rating from here */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {news.title}
          </h2>
          
          {/* Author info - removed views from here */}
          <div className="flex items-center mb-6">
            <img 
              src={news.author.img} 
              alt={news.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">{news.author.name}</p>
              <p className="text-sm text-gray-500">Senior Business Correspondent</p>
            </div>
          </div>
          
          {/* News image */}
          <div className="mb-6">
            <img 
              src={news.image_url} 
              alt="Bangladesh Export Growth"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          {/* News details */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {news.details}
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Badges */}
          <div className="flex gap-3 mb-4">
            {news.others.is_today_pick && (
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                Today's Pick
              </span>
            )}
            {newsData.others.is_trending && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Trending
              </span>
            )}
          </div>
          
          {/* NEW FOOTER with rating and views */}
          <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
            <div className="flex items-center text-gray-700">
              <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                <FaStar className="mr-1" size={14} />
                <span>{news.rating.number}/5</span>
              </div>
              <div className="flex items-center text-gray-500">
                <FaEye className="mr-1" />
                <span>{news.total_view.toLocaleString()} views</span>
              </div>
            </div>
            
            {/* Optional: Add read more button */}
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Read Full Story →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;