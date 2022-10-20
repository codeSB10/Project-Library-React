import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
                icon={<FontAwesomeIcon icon="bolt" />} 
                subtitle="Easy and Quick"
                para="Get access to the book you purchase instantly."
            />
            <Highlight
                icon={<FontAwesomeIcon icon="book-open" />} 
                subtitle="10,000+ Books"
                para="Library has all kinds of books."
            />
            <Highlight
                icon={<FontAwesomeIcon icon="tags" />} 
                subtitle="Affordable"
                para="Get books cheaper than anywhere else."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
