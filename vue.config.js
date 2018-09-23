module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: "us-east-1",
      bucket: "berman.xyz",
      assetPath: "dist",
      deployPath: "/",
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  }
};
