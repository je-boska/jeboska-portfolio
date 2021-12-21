import sanityClient from "../client";
import groq from "groq";

export const getImpressum = async () => {
  const impressum = await sanityClient.fetch(
    groq`*[_type == "page" && title == "Impressum"] {
      _id,
      title,
      body,
    }
    `
  );

  return impressum[0];
};
