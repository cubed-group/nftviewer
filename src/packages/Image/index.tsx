import { useState } from "react";
import NotFound from "../assets/not-found.jpg";
import "./index.css";

export default function Image({ url, onError, className, ...others }: any) {
  const [src, setSrc] = useState(url);

  const handleError = (e: any) => {
    setSrc(NotFound);
  };

  return (
    <img
      src={src}
      onError={handleError}
      className={`image ${className ? className : ""}`}
      {...others}
    ></img>
  );
}
