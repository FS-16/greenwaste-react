function VideoTutorial() {
  return (
    <>
      <div className="p-5 text-center bg-[#D9D9D9]">
        <h1 className="text-2xl font-medium">Video Tutorial</h1>
        <p className="mt-2 text-base">
          Akses video tutorial untuk mengembangkan keahlian dalam pengelolaan
          limbah yang efisien
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wsfE9ab8lg4"
            title="How Recycling Works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className="card-video">
            <iframe
              width="250"
              height="180"
              src="https://www.youtube.com/embed/jsp7mgYv3aI"
              title="Recycling 101: How to Properly Recycle at Home"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-video">
            <iframe
              width="250"
              height="180"
              src="https://www.youtube.com/embed/x-h1GyFalEA"
              title="How to: Organize your Recycling | Recycle Often. Recycle Right."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-video">
            <iframe
              width="250"
              height="180"
              src="https://www.youtube.com/embed/20iOk-YYuB4"
              title="Recycling 101: How to Dispose of Plastic Bags"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoTutorial;
