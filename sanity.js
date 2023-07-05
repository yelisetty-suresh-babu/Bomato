import { SanityClient } from "@sanity/client";
import sanityConfig from "./bomato-sanity/sanity.config";
import ImageUrlBuilder from '@sanity/image-url'

const client = SanityClient({
  projectId: "42y1xbdz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder?.image(source);

export default client;
