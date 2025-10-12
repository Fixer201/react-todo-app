import React from 'react';
import ReviewCard from '../elements/cards/ReviewCard.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Review {
  id: number;
  avatar: string;
  name: string;
  role?: string;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    avatar: '/reviews/man-placeholder.svg',
    name: 'John Doe',
    role: 'Product Manager at Company Inc.',
    text: 'EasyToDo transformed how our team organizes tasks. Highly recommend!',
  },
  {
    id: 2,
    avatar: '/reviews/woman-placeholder.svg',
    name: 'Sarah Lee',
    role: 'Team Lead at BrightWorks',
    text: 'Intuitive, fast, and beautifully designed. My team’s productivity skyrocketed within a week!',
  },
  {
    id: 3,
    avatar: '/reviews/man-placeholder.svg',
    name: 'Michael Chen',
    role: 'Freelance Designer',
    text: 'I finally have a tool that doesn’t get in my way. EasyToDo keeps me focused and organized effortlessly.',
  },
  {
    id: 4,
    avatar: '/reviews/woman-placeholder.svg',
    name: 'Anna Petrova',
    role: 'Operations Director at BestTech Company',
    text: 'The collaboration features are brilliant — managing multiple projects has never been this smooth.',
  },
  {
    id: 5,
    avatar: '/reviews/man-placeholder.svg',
    name: 'David Kim',
    role: 'Software Engineer at DevSolutions',
    text: 'A game-changer for my workflow. The seamless integration with other tools is a huge plus!',
  },
  {
    id: 6,
    avatar: '/reviews/woman-placeholder.svg',
    name: 'Emily Johnson',
    role: 'Marketing Specialist at Creative Minds',
    text: 'EasyToDo is my go-to app for task management. It’s simple yet powerful!',
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mx-96 py-16 bg-primary border border-secondary
             rounded-2xl glow-secondary-on-hover transition-shadow duration-300"
    >
      <h2
        className="text-4xl font-black mb-12 relative text-white text-center
               after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1
               after:bg-white after:transition-all after:duration-500 hover:after:w-full"
      >
        What Our Users Say
      </h2>

      <div className="w-full px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            1200: { slidesPerView: 1, spaceBetween: 20 },
            1500: { slidesPerView: 2, spaceBetween: 25 },
            1900: { slidesPerView: 3, spaceBetween: 30 },
            2200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          spaceBetween={30}
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id} className="p-4">
              <ReviewCard
                imagePath={review.avatar}
                altText={review.name}
                name={review.name}
                role={review.role}
                text={review.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
