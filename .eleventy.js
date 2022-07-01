module.exports = function(eleventyConfig) {
 eleventyConfig.addTemplateFormats("js");
 eleventyConfig.addExtension("js", {
  outputFileExtension: "html",
  compile: async function(inputContent) {
   return async (data) => {
    return inputContent
   }
  }
 })
}