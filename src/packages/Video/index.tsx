import "./index.css";

export default function Video({
  url,
  onError,
  className,
  containerClassname,
  ...others
}: any) {
  return (
    <div className={containerClassname}>
      <video
        className={`video ${className ? className : ""}`}
        controls
        preload="metadata"
        src={url}
        onError={onError}
        {...others}
      ></video>
    </div>
  );
}
