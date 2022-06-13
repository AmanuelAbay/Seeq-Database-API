const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "amanuel",
  api_key: "514354735915838",
  api_secret: "l6aAwXJXzac6Yp1_uwN9yhQNaak",
});

const upload = async (image) => {
  try {
    let urls = "";
    let data = await cloudinary.uploader.upload(image, {
      unique_filename: true,
      discard_original_filename: true,
      folder: "Cinema_License",
      timeout: 120000,
    });
    urls = data.url;
    return urls;
  } catch (error) {
    console.error(error);
  }
};

module.exports = upload;
