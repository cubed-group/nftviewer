import { useRef } from "react";
import "./index.css";

export default function Audio({ url, onError, className, ...others }: any) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <audio
      className={`audio ${className ? className : ""}`}
      controls
      ref={audioRef}
      preload="metadata"
      src={url}
      onError={onError}
      {...others}
    ></audio>
  );
}
