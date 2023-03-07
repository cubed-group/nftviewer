import "./index.css";

export default function Video({ url, onError, className, ...others }: any) {
  return (
    <video
      className={`video ${className ? className : ""}`}
      controls
      preload="metadata"
      src={url}
      onError={onError}
      {...others}
    ></video>
  );
}
