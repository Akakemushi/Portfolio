export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("font.woff2");
};

// const eleventyGoogleFonts = require("eleventy-google-fonts");
// module.exports = function(eleventyConfig) {
//   eleventyConfig.addPlugin(eleventyGoogleFonts);
// };
