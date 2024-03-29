import NFTViewer from "./packages";
import "./App.css";

const url_image = "https://www.w3schools.com/tags/img_girl.jpg";
const url_video = "https://www.w3schools.com/tags/movie.mp4";
const url_audio = "https://www.w3schools.com/tags/horse.mp3";
const url_glb = "https://rnft-qc.xhscdn.com/1672817745222njriytypkrzemsz.glb";
const url_not_found = "not-found";

function App() {
  return (
    <div className="app">
      <h2>3D</h2>
      <div className="wrapper">
        <NFTViewer url={url_glb} width="100%" height="100%"></NFTViewer>
      </div>
      <h2>Image</h2>
      <div className="wrapper">
        <NFTViewer url={url_image}></NFTViewer>
      </div>
      <h2>Video</h2>
      <div className="wrapper">
        <NFTViewer url={url_video}></NFTViewer>
      </div>
      <h2>Audio</h2>
      <div className="wrapper">
        <NFTViewer url={url_audio}></NFTViewer>
      </div>
      <h2>Not Found</h2>
      <div className="wrapper">
        <NFTViewer url={url_not_found}></NFTViewer>
      </div>
    </div>
  );
}

export default App;
