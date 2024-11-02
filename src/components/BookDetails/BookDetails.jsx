import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const bookId = useParams();
    const id = parseInt(bookId.id);
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const { bookName, author, image, category, tags, review, totalPages, rating, publisher, yearOfPublishing } = book;
    return (
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-10">
            <div className="bg-base-300 rounded-xl p-20 w-1/2 flex justify-center items-center">
                <img src={image} alt={bookName} className="w-5/6" />
            </div>
            <div className="md:w-1/2 flex flex-col gap-5">
                <h1 className="text-5xl">{bookName}</h1>
                <p>By: {author}</p>
                <span className="border-t border-b py-2">
                    <span>{category}</span>
                </span>
                <small><span className="font-bold">Review: </span> {review}</small>
                <p className="font-bold">Tag:  {
                    tags.map((tag, index) => <span key={index} className="bg-[#23BE0A0D] text-[#23BE0A] rounded ml-10 p-1 font-semibold text-sm">#{tag}</span>)
                }</p>
                <div className="divider"></div>
                <div>
                    <p className="flex"> <span className="w-1/3">Number of pages:</span> <span className="font-bold">{totalPages}</span></p>
                    <p className="flex"> <span className="w-1/3">Publisher: </span><span className="font-bold">{publisher}</span></p>
                    <p className="flex"><span className="w-1/3">Year of Publishing: </span> <span className="font-bold">{yearOfPublishing}</span></p>
                    <p className="flex"><span className="w-1/3">Rating:</span> <span className="font-bold">{rating}</span></p>
                </div>
                <div className="flex gap-5">
                    <button className="btn btn-outline border-[#50B1C9] hover:bg-[#50B1C9] hover:border-[#50B1C9]">Read</button>
                    <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
        </div >
    );
};

export default BookDetails;