const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // Destino do arquivo
  destination: function (req, file, cb) {
    cb(null, path.join("public", "arquivos"));
  },

// Nome do arquivo
filename: function (req, file, cb) {
  cb(null, `${Date.now()}-${file.originalname}`);
},

  /* onFileUploadStart: function(file) {
    console.log("Inside uploads");
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      console.log("é imageeeeem")
        return true;
    }
    else
    {
      console.log("não é imagem")
        return false;
    }
} */

 

});


const upload = multer({ storage: storage });


module.exports = upload;
