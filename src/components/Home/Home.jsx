import Banner from "../Banner/Banner";
import Books from "../Books/Books";

export default function Home() {
    return (
        <div className="px-2 flex flex-col gap-10">

            <Banner />
            <Books />
        </div>
    )
}
