import Dictionary from './Dictionary'

function Cards(){
    return <div className='mt-8 flex gap-16'>
        {Dictionary.map(returnCard)}
    </div>
}

function returnCard(Dictionary){
    return <CreateCard Img={Dictionary.Img} Name={Dictionary.Heading} Des={Dictionary.Des}/>
}

function CreateCard(props){
    return (<div className='w-56 bg-green-500 rounded-2xl p-4 transition-all hover:scale-105 hover:cursor-pointer'>
        <h1 className='text-5xl w-[100%] flex justify-center mb-4'>{props.Img}</h1>
        <h2 className='text-3xl mb-4'>{props.Name}</h2>
        <p>{props.Des}</p>
    </div>)
}

export default Cards