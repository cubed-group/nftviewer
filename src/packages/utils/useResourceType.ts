import { useEffect, useState } from "react";
import { ResourceType } from "../interface";
import { TYPES_GROUP, DEFAULT_TYPE, TYPES } from "./const";

export default function useResourceType(url: string): ResourceType {
  const [type, setType] = useState<ResourceType>(DEFAULT_TYPE);

  useEffect(() => {
    const path = /[^?#]+/.exec(url)?.[0] || "";
    const suffix = /\.[^.]+$/.exec(path);

    if (suffix) {
      const fileType = suffix[0].substr(1);
      let t: ResourceType = DEFAULT_TYPE;

      if (TYPES_GROUP.video.includes(fileType)) {
        t = "video";
      } else if (TYPES_GROUP.image.includes(fileType)) {
        t = "image";
      } else if (TYPES_GROUP.audio.includes(fileType)) {
        t = "audio";
      } else if (TYPES_GROUP["3d"].includes(fileType)) {
        t = "3d";
      }

      setType(t);
    } else {
      fetch(url, {
        method: "HEAD",
      })
        .then((res) => {
          for (let pair of res.headers.entries()) {
            if (pair[0] === "content-type") {
              const contentType = pair[1];
              let t = pair[1].split("/")[0] as ResourceType;

              if (contentType === "text/plain") {
                // plain text
                setType("text");
              } else if (TYPES.includes(t)) {
                // video, audio, image
                setType(t);
              } else if (contentType.startsWith("model/gltf")) {
                // model/gltf-binary, model/gltf+json
                setType("3d");
              }
            }
          }
        })
        .catch(console.log);
    }
  }, [url]);

  return type;
}
