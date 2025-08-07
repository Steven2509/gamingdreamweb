// server.js
const express = require("express");
const cors = require("cors");
const ImageKit = require("imagekit");

const app = express();
const PORT = 5000;

// Bật CORS cho mọi nguồn (cho phép frontend truy cập)
app.use(cors());

// Cấu hình ImageKit SDK
const imagekit = new ImageKit({
  publicKey: "public_OMNI0lJ4dWzo7Fs3eaFZM3PbcDw=",   // public của bạn
  privateKey: "private_4RU27qAH2MNxmiCMaAxcI3zV9Es=",              // ⚠️ thay bằng private key của bạn
  urlEndpoint: "https://ik.imagekit.io/thiensigma"  // endpoint của bạn
});

// Route để frontend gọi để lấy token upload
app.get("/auth", (req, res) => {
  const authParameters = imagekit.getAuthenticationParameters();
  res.json(authParameters);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ ImageKit auth server running at http://localhost:${PORT}`);
});
