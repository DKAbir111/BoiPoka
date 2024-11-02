import bookImg from '../../assets/books.png'
export default function Banner() {
    return (
        <div className="hero bg-base-200 lg:px-32 md:px-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                    className=' border' />
                <div className='flex flex-col gap-8'>
                    <h1 className="text-5xl font-semibold">  Books to freshen up your bookshelf</h1>
                    <div className='mx-auto md:mx-0'><button className="btn bg-[#23BE0A] text-white hover:bg-[#13be0a]">View The List</button></div>

                </div>
            </div>
        </div>
    )
}
