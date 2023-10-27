

const Title = (param: any) => {
    return (
        <p className={`text-3xl md:text-5xl font-semibold text-center ${param.color}`}>{param.name}</p>
    )
}

export default Title