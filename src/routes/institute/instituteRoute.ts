import express, { Router } from "express"
import isLoggedIn from "../../middleware/middleware"
import { createCategoryTable, createCourseTable, createInstitute, createStudentTable, createTeacherTable } from "../../controllers/institute/instituteController"
import asyncErrorHandler from "../../services/asyncErrorHandler"
const router:Router=express.Router()

router.route("/institute").post(isLoggedIn,asyncErrorHandler(createInstitute),asyncErrorHandler(createTeacherTable),asyncErrorHandler(createStudentTable),asyncErrorHandler(createCategoryTable),asyncErrorHandler(createCourseTable))

export default router