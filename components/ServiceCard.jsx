const ServiceCard = ({id, name, image, onSelect}) => {
    return (
        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer focus-visible:ring' onClick={() => {onSelect(id)}}>
            <img
            src= {image}
            alt=""
            loading='lazy'
            className='w-full aspect-square object-cover rounded-lg'
            width='640' height='640'
            decoding='async'
            />
            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                {name}
            </span>
        </button>
    )
}

export default ServiceCard;