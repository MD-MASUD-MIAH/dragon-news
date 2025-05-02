import { FaEye, FaStar } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import moment from 'moment'; 
import { Link } from 'react-router';
const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    details,
    rating,
    total_view,
    id,
   
  } = news;

  return (
    <div className="card shadow-md bg-base-100 rounded-lg ">
      {/* Author Info */}
      <div className="flex items-center p-4 bg-base-200  justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={author.img} alt="author" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{moment(author.published_date).format("YYYY-MM-DD")}</p>
          </div>
        </div>
        {/* Optional Share Icon */}
     <div className='flex items-center justify-center gap-2'>
        <CiBookmark size={24}></CiBookmark>
    <IoShareSocialOutline size={24}></IoShareSocialOutline>
     </div>
      </div>

      {/* Title */}
      <h2 className="text-lg p-4 font-bold mb-2">{title}</h2>

      {/* Image */}
      <div className="w-full   p-6 rounded">
  <img
    src={thumbnail_url}
    alt="news"
    className="w-full max-h-[500px] object-contain rounded-md"
  />
</div>


      {/* Details */}
      <p className="text-sm p-4 text-gray-700 border-b pb-3 border-base-300">
        {details.slice(0, 200)}...
        <Link to={`/newsdeails/${id}`} className="text-blue-600 font-semibold cursor-pointer"> Read More</Link>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex items-center px-4 pb-6 justify-between mt-4">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-sm text-black">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};


export default NewsCard;