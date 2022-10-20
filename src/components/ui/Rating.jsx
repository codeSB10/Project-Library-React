import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-stroke" />}
    </div>
  );
};

export default Rating;
