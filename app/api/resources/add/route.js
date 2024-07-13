import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "../../api/_components/cloudinary";
import { prisma } from "../_components/prisma";

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("file"));

apiRoute.post(async (req, res) => {
  try {
    const { name, description, resourceType } = req.body;

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }

        // Save the resource info in the database
        const resource = await prisma.resources.create({
          data: {
            name,
            description,
            url: result.secure_url,
            resource_type: resourceType,
          },
        });

        res.status(200).json({ resource });
      }
    );

    req.file.stream.pipe(uploadStream);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, so Multer can handle it
  },
};
