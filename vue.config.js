module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: "us-east-1",
      bucket: "berman.xyz",
      assetPath: "dist",
      deployPath: "/",
      pwa: false,
      enableCloudfront: true,
      uploadConcurrency: 5,
      cloudfrontId: "E2QV315DYGO20J",
      cloudfrontMatchers: "/*"
    }
  }
};
