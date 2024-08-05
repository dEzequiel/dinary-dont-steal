import { Normalizer } from "./base/base_normalizer.js";
import { commonCharsOnImages } from "../constants.js";
import { determineImageUrl } from "../utils/helper.js";

function UserNormalizer() {}

UserNormalizer.prototype = Object.create(Normalizer.prototype);
UserNormalizer.prototype.normalize = function(id, username, image) {
  const normalizedObject = {
    id: String(id),
    name: username.replace(commonCharsOnImages, "_")
  };

  if(image) {
    normalizedObject.image = { url: determineImageUrl(image.url) };
  }

  if(normalizedObject.image == '') delete normalizedObject.image;

  return normalizedObject;

};

export { UserNormalizer }