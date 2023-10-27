const SubTitle = (param: any) => {
    return (
        <>
            <p className={`text-2xl font-semibold text-center ${param.color}`}>{param.name}</p>
        </>
    )
}

export default SubTitle