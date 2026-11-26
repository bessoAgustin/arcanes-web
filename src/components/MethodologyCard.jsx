const MethodologyCard = ({id, title, image, onSelect}) => {
    return (
        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-4 rounded-2xl w-full cursor-pointer focus-visible:ring justify-center items-center h-full' onClick={() => {onSelect(id)}}>
            <img
            src= {image}
            alt=""
            loading='lazy'
            className='max-w-full aspect-square object-cover rounded-lg'
            width='133' height='133'
            decoding='async'
            />
            <span className='flex font-semibold min-h-[2lh] items-center justify-center text-text-main text-2xl'>
                {title}
            </span>
        </button>
    )
}

export default MethodologyCard;