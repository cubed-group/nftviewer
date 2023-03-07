import "@google/model-viewer";
import "./index.css";

export default function ThreeD({
  url = "",
  onError,
  className,
  ...others
}: any) {
  return (
    <div className="threed-container">
      {/* @ts-ignore */}
      <model-viewer
        class={`model-viewer ${className ? className : ""}`}
        alt="3D model viewer"
        src={url}
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        onError={onError}
        {...others}
        // @ts-ignore
      ></model-viewer>
      {/* @ts-ignore */}
    </div>
  );
}
