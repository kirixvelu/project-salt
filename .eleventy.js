const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPassthroughCopy("./favicon.ico");
  eleventyConfig.addPassthroughCopy("./site.webmanifest");
  eleventyConfig.addPassthroughCopy("./favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("./favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("./apple-touch-icon.png");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
