module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");
  // eleventyConfig.addPassthroughCopy("./src/img");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
