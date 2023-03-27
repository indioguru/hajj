export const Video = ({ url_video, portada_video }) => {
  return (
    <iframe
      className="w-full h-[200px] lg:h-[400px] "
      srcDoc={`
        <style>
        img{object-fit:cover}
        *{padding:0;margin:0;overflow:hidden}
        html,body{height:100%;}
        .img1{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
        .img2{position:absolute;width:50px;top:0;bottom:0;margin:auto; left:0;right: 0;}
        span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
        span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
        </style>
        <a href=${url_video}> 
            <img loading="lazy" class = "img1" src=${portada_video}>
            <img loading="lazy" class = "img2"  src="/assets/showroom/play.png" />
        </a>
  `}
      src={`${url_video}`}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      muted
      autoPlay
    ></iframe>
  );
};
