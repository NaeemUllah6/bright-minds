
function VideoCard({ video, description }) {
    return (
        <div className='p-6 rounded-lg bg-white'>
            <video muted autoPlay src={video} />
            <h3 className="mt-4 font-bold text-xl">{description}</h3>
        </div>
    )
}

export default VideoCard