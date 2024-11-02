import bookImg from '../../assets/books.png'
export default function Banner() {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                />
                <div className='flex flex-col gap-5'>
                    <h1 className="text-6xl font-semibold">  Books to freshen up your bookshelf</h1>
                    <div><button className="btn bg-[#23BE0A] text-white hover:bg-[#13be0a]">View The List</button></div>

                </div>
            </div>
        </div>
    )
}
