import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import {
  insertUserSchema,
  insertPatientSchema,
  insertAppointmentSchema,
  insertDepartmentSchema,
  insertInpatientSchema,
  insertMedicalRecordSchema,
  insertActivitySchema,
  insertDepartmentVisitSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // Dashboard routes
  apiRouter.get("/dashboard/stats", async (req: Request, res: Response) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Error fetching dashboard stats" });
    }
  });

  // Department visits routes
  apiRouter.get("/department-visits", async (req: Request, res: Response) => {
    try {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const today = new Date();
      
      const visits = await storage.getDepartmentVisitsByDateRange(thirtyDaysAgo, today);
      
      // Group by department
      const departmentData = new Map();
      
      for (const visit of visits) {
        const department = await storage.getDepartment(visit.departmentId);
        if (!department) continue;
        
        if (!departmentData.has(department.name)) {
          departmentData.set(department.name, visit.visitCount);
        } else {
          departmentData.set(department.name, departmentData.get(department.name) + visit.visitCount);
        }
      }
      
      const result = Array.from(departmentData).map(([name, count]) => ({ name, count }));
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error fetching department visits" });
    }
  });

  // Recent activities routes
  apiRouter.get("/activities/recent", async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 5;
      const activities = await storage.listRecentActivities(limit);
      
      // Enrich with user data
      const enrichedActivities = await Promise.all(
        activities.map(async (activity) => {
          if (activity.userId) {
            const user = await storage.getUser(activity.userId);
            if (user) {
              return {
                ...activity,
                user: {
                  id: user.id,
                  fullName: user.fullName,
                  role: user.role
                }
              };
            }
          }
          
          return {
            ...activity,
            user: null
          };
        })
      );
      
      res.json(enrichedActivities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching recent activities" });
    }
  });

  // User routes
  apiRouter.get("/users", async (req: Request, res: Response) => {
    try {
      const users = await storage.listUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  });

  apiRouter.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const user = await storage.getUser(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  });

  apiRouter.post("/users", async (req: Request, res: Response) => {
    try {
      const validation = insertUserSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid user data", errors: validation.error });
      }
      
      const user = await storage.createUser(validation.data);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  });

  // Patient routes
  apiRouter.get("/patients", async (req: Request, res: Response) => {
    try {
      const patients = await storage.listPatients();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: "Error fetching patients" });
    }
  });

  apiRouter.get("/patients/:id", async (req: Request, res: Response) => {
    try {
      const patient = await storage.getPatient(parseInt(req.params.id));
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: "Error fetching patient" });
    }
  });

  apiRouter.post("/patients", async (req: Request, res: Response) => {
    try {
      const validation = insertPatientSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid patient data", errors: validation.error });
      }
      
      const patient = await storage.createPatient(validation.data);
      res.status(201).json(patient);
    } catch (error) {
      res.status(500).json({ message: "Error creating patient" });
    }
  });

  // Appointment routes
  apiRouter.get("/appointments", async (req: Request, res: Response) => {
    try {
      const appointments = await storage.listAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching appointments" });
    }
  });

  apiRouter.get("/appointments/today", async (req: Request, res: Response) => {
    try {
      const today = new Date();
      const appointments = await storage.listAppointmentsByDate(today);
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching today's appointments" });
    }
  });

  apiRouter.get("/appointments/:id", async (req: Request, res: Response) => {
    try {
      const appointment = await storage.getAppointment(parseInt(req.params.id));
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      res.json(appointment);
    } catch (error) {
      res.status(500).json({ message: "Error fetching appointment" });
    }
  });

  apiRouter.post("/appointments", async (req: Request, res: Response) => {
    try {
      const validation = insertAppointmentSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid appointment data", errors: validation.error });
      }
      
      const appointment = await storage.createAppointment(validation.data);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(500).json({ message: "Error creating appointment" });
    }
  });

  // Department routes
  apiRouter.get("/departments", async (req: Request, res: Response) => {
    try {
      const departments = await storage.listDepartments();
      res.json(departments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching departments" });
    }
  });

  // Inpatient routes
  apiRouter.get("/inpatients", async (req: Request, res: Response) => {
    try {
      const inpatients = await storage.listInpatients();
      res.json(inpatients);
    } catch (error) {
      res.status(500).json({ message: "Error fetching inpatients" });
    }
  });

  apiRouter.get("/inpatients/active/count", async (req: Request, res: Response) => {
    try {
      const count = await storage.getActiveInpatientCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: "Error fetching active inpatient count" });
    }
  });

  // Medical Records routes
  apiRouter.get("/medical-records/patient/:patientId", async (req: Request, res: Response) => {
    try {
      const records = await storage.listMedicalRecordsByPatient(parseInt(req.params.patientId));
      res.json(records);
    } catch (error) {
      res.status(500).json({ message: "Error fetching medical records" });
    }
  });

  apiRouter.post("/medical-records", async (req: Request, res: Response) => {
    try {
      const validation = insertMedicalRecordSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid medical record data", errors: validation.error });
      }
      
      const medicalRecord = await storage.createMedicalRecord(validation.data);
      res.status(201).json(medicalRecord);
    } catch (error) {
      res.status(500).json({ message: "Error creating medical record" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
