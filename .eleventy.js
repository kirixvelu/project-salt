module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addPassthroughCopy("./favicon.ico");
  eleventyConfig.addPassthroughCopy("./site.webmanifest");
  eleventyConfig.addPassthroughCopy("./favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("./favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("./apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("./android-chrome-512x512.png");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
