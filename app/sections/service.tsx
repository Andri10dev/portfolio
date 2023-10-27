import Title from "../components/title"
import SubTitle from "../components/sub_title"

const Service = () => {
    return (
        <>
            <div id="serviceSection" className="w-full h-screen bg-gray-500 pt-20">
                <SubTitle color="text-white" name="Service" />
                <Title color="text-white" name="Why I Do" />
                <p className="w-1/2 mx-auto text-center text-white text-sm mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum mollitia temporibus est dolor? Fugiat similique perspiciatis illo distinctio ducimus laborum voluptate, sequi voluptas nesciunt, ab impedit ex eos, placeat explicabo.
                </p>
            </div>
        </>
    )
}

export default Service