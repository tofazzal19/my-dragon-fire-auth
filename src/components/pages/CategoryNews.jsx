 import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
  const categories = [
  {
    "id": 0, 
    "name": "All News"
  },
  {
    "id": 1,
    "name": "Breaking News"
  },
  {
    "id": 2,
    "name": "Business"
  },
  {
    "id": 3,
    "name": "Technology"
  },
  {
    "id": 4,
    "name": "Health"
  },
  {
    "id": 5,
    "name": "Sports"
  },
  {
    "id": 6,
    "name": "Entertainment"
  },
  {
    "id": 7,
    "name": "Science"
  },
  {
    "id": 8,
    "name": "Politics"
  },
  {
    "id": 9,
    "name": "Education"
  },
  {
    "id": 10,
    "name": "Lifestyle"
  }
];


  const {id} = useParams();
  const category = categories.find(c =>c.id== id)
  console.log(category);
   const data = useLoaderData();
  
  console.log(id, data);
   const [categoryNews, setCategoryNews] = useState([]);
  //  console.log(categoryNews);

    //  console.log(id, data);

    useEffect(() => {
        
      if (id == "0"){
        setCategoryNews(data);
        return;
      }
      else if(id == "1"){
        console.log(data);
           const filteredNews = data.filter((news)=> news.others.is_today_pick == true );
           
           console.log(filteredNews);
           setCategoryNews(filteredNews);

      }
      else{
        const filteredNews = data.filter((news)=> news.category_id == id );
        setCategoryNews(filteredNews);
      }
        //  const filteredNews = data.filter((news)=> news.category_id == id ) 
        // //  console.log(filteredNews);
        //  setCategoryNews(filteredNews);
    }, [data, id]);

    // console.log(categoryNews);

    return <div>
      <h2 className='font-bold'>
        Total<span className='text-secondary'>{categoryNews.length}</span>News Found
      </h2>
      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map((news) => (
            <NewsCard title={category.name} key={news.id} news={news}></NewsCard>
          ))
        }

      </div>
    </div>;
    
 };

export default CategoryNews;