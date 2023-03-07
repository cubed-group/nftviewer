export const TYPES_GROUP = {
  video: ["mp4", "avi", "mpeg", "ogv", "ts", "webm", "3gp", "2gp"],
  audio: ["aac", "mid", "midi", "mp3", "oga", "opus", "wav", "weba", "cda"],
  image: [
    "bmp",
    "gif",
    "ico",
    "jpg",
    "jpeg",
    "png",
    "svg",
    "tif",
    "tiff",
    "webp",
  ],
  "3d": ["gltf", "glb"],
};

export const TYPES = Object.keys(TYPES_GROUP);

export const DEFAULT_TYPE = "image";
