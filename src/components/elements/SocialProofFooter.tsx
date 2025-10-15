interface SocialProofFooterProps {
  avatars?: string[];
  userCount: string;
  timeframe?: string;
  rating: string;
  reviewCount: string;
}

const SocialProofFooter = ({
  avatars = [],
  userCount,
  timeframe,
  rating,
  reviewCount,
}: SocialProofFooterProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-sm text-gray-400">
      {/* User Count Section */}
      <div className="flex items-center gap-3">
        {/* Avatars */}
        {avatars.length > 0 && (
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="user avatar"
                className="w-8 h-8 rounded-full bg-primary border-2 border-secondary object-cover"
              />
            ))}
          </div>
        )}

        {/* Text */}
        <span className="text-gray-300">
          Join <strong className="text-white">{userCount}</strong> teams
          {timeframe && ` who started ${timeframe}`}
        </span>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-secondary text-xl">★</span>
          <span className="text-white font-semibold">{rating}/5</span>
          <span className="text-gray-400">({reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofFooter;
