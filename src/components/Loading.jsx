import loadingGif from "../assets/loading.gif";

function Loading() {
  return (
    <div className="load-container">
      <img src={loadingGif} alt="loading screen" className="loading-gif" />
    </div>
  );
}

export default Loading;
