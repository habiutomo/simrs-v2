import { pgTable, text, serial, integer, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull().default("staff"),
  specialty: text("specialty"),
  status: text("status").notNull().default("active"),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Patients schema
export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  medicalRecordNumber: text("medical_record_number").notNull().unique(),
  fullName: text("full_name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  gender: text("gender").notNull(),
  address: text("address"),
  phoneNumber: text("phone_number"),
  insuranceNumber: text("insurance_number"),
  insuranceType: text("insurance_type"),
  registrationDate: timestamp("registration_date").notNull().defaultNow(),
  status: text("status").notNull().default("active"),
});

export const insertPatientSchema = createInsertSchema(patients).omit({ id: true });
export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;

// Appointments schema
export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  doctorId: integer("doctor_id").notNull(),
  departmentId: integer("department_id").notNull(),
  scheduledDate: timestamp("scheduled_date").notNull(),
  status: text("status").notNull().default("scheduled"),
  purpose: text("purpose"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({ id: true, createdAt: true });
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;

// Departments schema
export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  status: text("status").notNull().default("active"),
});

export const insertDepartmentSchema = createInsertSchema(departments).omit({ id: true });
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type Department = typeof departments.$inferSelect;

// Inpatients schema
export const inpatients = pgTable("inpatients", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  admissionDate: timestamp("admission_date").notNull(),
  dischargeDate: timestamp("discharge_date"),
  roomId: integer("room_id").notNull(),
  doctorId: integer("doctor_id").notNull(),
  diagnosis: text("diagnosis"),
  status: text("status").notNull().default("admitted"),
  notes: text("notes"),
});

export const insertInpatientSchema = createInsertSchema(inpatients).omit({ id: true });
export type InsertInpatient = z.infer<typeof insertInpatientSchema>;
export type Inpatient = typeof inpatients.$inferSelect;

// Medical Records schema
export const medicalRecords = pgTable("medical_records", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  doctorId: integer("doctor_id").notNull(),
  visitDate: timestamp("visit_date").notNull(),
  visitType: text("visit_type").notNull(),
  chiefComplaint: text("chief_complaint"),
  diagnosis: text("diagnosis"),
  treatment: text("treatment"),
  prescription: text("prescription"),
  notes: text("notes"),
  followUp: timestamp("follow_up"),
});

export const insertMedicalRecordSchema = createInsertSchema(medicalRecords).omit({ id: true });
export type InsertMedicalRecord = z.infer<typeof insertMedicalRecordSchema>;
export type MedicalRecord = typeof medicalRecords.$inferSelect;

// Activities schema
export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  action: text("action").notNull(),
  details: text("details"),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const insertActivitySchema = createInsertSchema(activities).omit({ id: true, timestamp: true });
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type Activity = typeof activities.$inferSelect;

// Visits schema (for department analytics)
export const departmentVisits = pgTable("department_visits", {
  id: serial("id").primaryKey(),
  departmentId: integer("department_id").notNull(),
  visitCount: integer("visit_count").notNull(),
  visitDate: date("visit_date").notNull(),
});

export const insertDepartmentVisitSchema = createInsertSchema(departmentVisits).omit({ id: true });
export type InsertDepartmentVisit = z.infer<typeof insertDepartmentVisitSchema>;
export type DepartmentVisit = typeof departmentVisits.$inferSelect;
