import Title from "../components/title"
import SubTitle from "../components/sub_title"

const Portfolio = () => {
    return (
        <>
            <div id="portfolioSection" className="w-full h-screen bg-blue-300 pt-20">
                <SubTitle name="Portfolio" />
                <Title name="Check My Wonderfull Work" />
                <p className="w-1/2 mx-auto text-center text-white text-sm mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum mollitia temporibus est dolor? Fugiat similique perspiciatis illo distinctio ducimus laborum voluptate, sequi voluptas nesciunt, ab impedit ex eos, placeat explicabo.
                </p>
            </div>
        </>
    )
}

export default Portfolio