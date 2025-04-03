import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllAssignments() {
    return Database.assignments;
}

export function findAssignmentsForCourse(assignmentId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === assignmentId);
}
export function findAssignmentsForEnrolledUser(userId) {
    const { assignments, enrollments } = Database;
    const enrolledAssignments = assignments.filter((course) =>
        enrollments.some((enrollment) => enrollment.user === userId && enrollment.assignment === assignments._id));
    return enrolledAssignments;
}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
   export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
    
