const VideoDetail=({video})=>{
    if(!video){
        return <div>
            <h1>Introduzca una búsqueda</h1>
            <br/>
            <p>Aplicación que funciona con API youtube</p>
        </div>
    }
    const videoSrc='https://www.youtube.com/embed/${video.id.videoId}';
    return(
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title="Reproductor"/>
            </div>
        </div>
    )

}
export default VideoDetail;