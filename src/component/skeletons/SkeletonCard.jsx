import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ cards }) => {
  console.log(cards);
  return (
    <div className="skeleton-container">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <Skeleton height={320} width={250} borderRadius={6} key={i} />
        ))}
    </div>
  );
};
export default SkeletonCard;
