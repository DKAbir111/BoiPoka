import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, rating, tags } = book;


    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 shadow-xl p-5">
                <figure className='bg-base-300 py-6 rounded-2xl'>
                    <img
                        src={image}
                        alt={bookName}
                        className='h-[230px] w-[170px]'
                    />

                </figure>
                <div className="card-body px-0">
                    <span className='flex justify-between text-[#23BE0A] gap-10'>
                        <p className='bg-[#23BE0A0D] rounded-full text-center'>{tags[0]}</p>
                        <p className='bg-[#23BE0A0D] rounded-full text-center'>{tags[1]}</p>
                    </span>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="border border-dashed my-2"></div>
                    <div className="flex justify-between rating">
                        <p>{category}</p>
                        <p className='flex items-center justify-end gap-2'>{rating}   <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#23BE0A] bg-opacity-50 hover:bg-opacity-100" /></p>
                    </div>
                </div>
            </div></Link>


    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;