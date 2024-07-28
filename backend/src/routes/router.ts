import express from "express";
import prisma from "../../prisma/client";

const router = express.Router();

router.get("/services", async (req, res) => {
  const services = await prisma.service.findMany();

  res.json(services);
});

export default router;
