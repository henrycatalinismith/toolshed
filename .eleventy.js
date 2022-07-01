const path = require("path")

module.exports = function(eleventyConfig) {
 eleventyConfig.addPassthroughCopy("*.js");
 eleventyConfig.addTemplateFormats("js");
 eleventyConfig.addExtension("js", {
  outputFileExtension: "html",
  getData: async function(inputPath) {
   return {
    layout: "javascript",
    title: path.basename(inputPath, ".js"),
   }
  },
  compile: async function(inputContent) {
   return async (data) => {
    return inputContent
   }
  }
 })
}