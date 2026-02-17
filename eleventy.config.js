import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("accordion.js");
  eleventyConfig.addPassthroughCopy("language.js");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};

// const eleventyGoogleFonts = require("eleventy-google-fonts");
// module.exports = function(eleventyConfig) {
//   eleventyConfig.addPlugin(eleventyGoogleFonts);
// };
