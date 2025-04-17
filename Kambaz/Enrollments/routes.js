import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentsRoutes(app) {

  app.get("/api/users/:userId/courses", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });
  app.delete("/api/users/:userId/courses", (req, res) => {
    const { courseId } = req.params;
    const status = dao.unenroll(courseId);
    res.send(status);
  });

  app.post("/api/users/:userId/courses", (req, res) => {
    const { courseId } = req.params;
    const enrollment = {
      ...req.body,
      course: courseId,
    };
    const newEnrollment = enrollmentsDao.addEnrollments(enrollment);
    res.send(newEnrollment);
  });

}
