export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        serviceAccount: env.json("FIREBASE_SERVICE_ACCOUNT_OBJECT"),
        bucketName: env("FIREBASE_BUCKET_NAME"),
        basePath: env("FIREBASE_BASE_PATH"),
        baseUrl: env("FIREBASE_BASE_URL"),
        publicFiles: true,
        uniform: false,
      },
    },
  },
});
