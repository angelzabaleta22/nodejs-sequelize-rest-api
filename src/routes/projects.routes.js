import { Router } from "express";
import {getProjects, createProjects } from "../controllers/projects.controller.js";



const router = Router()

router.get("/projects", getProjects);
router.post("/projects", createProjects);
router.put("/projects/:id");
router.delete("/projects/:id");
router.get("/projects/:id");



export default router;