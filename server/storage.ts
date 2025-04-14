import {
  users, patients, appointments, departments, inpatients, 
  medicalRecords, activities, departmentVisits,
  type User, type InsertUser,
  type Patient, type InsertPatient,
  type Appointment, type InsertAppointment,
  type Department, type InsertDepartment,
  type Inpatient, type InsertInpatient,
  type MedicalRecord, type InsertMedicalRecord,
  type Activity, type InsertActivity,
  type DepartmentVisit, type InsertDepartmentVisit
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  listUsers(): Promise<User[]>;

  // Patient operations
  getPatient(id: number): Promise<Patient | undefined>;
  getPatientByMedicalRecordNumber(mrn: string): Promise<Patient | undefined>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  updatePatient(id: number, patient: Partial<InsertPatient>): Promise<Patient | undefined>;
  listPatients(): Promise<Patient[]>;

  // Appointment operations
  getAppointment(id: number): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointment(id: number, appointment: Partial<InsertAppointment>): Promise<Appointment | undefined>;
  listAppointments(): Promise<Appointment[]>;
  listAppointmentsByDate(date: Date): Promise<Appointment[]>;
  listAppointmentsByDoctor(doctorId: number): Promise<Appointment[]>;
  listAppointmentsByPatient(patientId: number): Promise<Appointment[]>;

  // Department operations
  getDepartment(id: number): Promise<Department | undefined>;
  createDepartment(department: InsertDepartment): Promise<Department>;
  updateDepartment(id: number, department: Partial<InsertDepartment>): Promise<Department | undefined>;
  listDepartments(): Promise<Department[]>;

  // Inpatient operations
  getInpatient(id: number): Promise<Inpatient | undefined>;
  createInpatient(inpatient: InsertInpatient): Promise<Inpatient>;
  updateInpatient(id: number, inpatient: Partial<InsertInpatient>): Promise<Inpatient | undefined>;
  listInpatients(): Promise<Inpatient[]>;
  getActiveInpatientCount(): Promise<number>;

  // Medical Record operations
  getMedicalRecord(id: number): Promise<MedicalRecord | undefined>;
  createMedicalRecord(medicalRecord: InsertMedicalRecord): Promise<MedicalRecord>;
  updateMedicalRecord(id: number, medicalRecord: Partial<InsertMedicalRecord>): Promise<MedicalRecord | undefined>;
  listMedicalRecordsByPatient(patientId: number): Promise<MedicalRecord[]>;

  // Activity operations
  createActivity(activity: InsertActivity): Promise<Activity>;
  listRecentActivities(limit: number): Promise<Activity[]>;

  // Department Visits operations
  createDepartmentVisit(visit: InsertDepartmentVisit): Promise<DepartmentVisit>;
  getDepartmentVisitsByDateRange(startDate: Date, endDate: Date): Promise<DepartmentVisit[]>;
  
  // Dashboard data
  getDashboardStats(): Promise<{
    totalPatients: number;
    todayAppointments: number;
    activeInpatients: number;
    activeDoctors: number;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private patients: Map<number, Patient>;
  private appointments: Map<number, Appointment>;
  private departments: Map<number, Department>;
  private inpatients: Map<number, Inpatient>;
  private medicalRecords: Map<number, MedicalRecord>;
  private activities: Map<number, Activity>;
  private departmentVisits: Map<number, DepartmentVisit>;
  
  private currentUserId: number;
  private currentPatientId: number;
  private currentAppointmentId: number;
  private currentDepartmentId: number;
  private currentInpatientId: number;
  private currentMedicalRecordId: number;
  private currentActivityId: number;
  private currentDepartmentVisitId: number;

  constructor() {
    this.users = new Map();
    this.patients = new Map();
    this.appointments = new Map();
    this.departments = new Map();
    this.inpatients = new Map();
    this.medicalRecords = new Map();
    this.activities = new Map();
    this.departmentVisits = new Map();
    
    this.currentUserId = 1;
    this.currentPatientId = 1;
    this.currentAppointmentId = 1;
    this.currentDepartmentId = 1;
    this.currentInpatientId = 1;
    this.currentMedicalRecordId = 1;
    this.currentActivityId = 1;
    this.currentDepartmentVisitId = 1;
    
    // Initialize with some departments
    this.initializeDepartments();
    // Initialize with admin user
    this.initializeUsers();
    // Initialize visit data for chart
    this.initializeDepartmentVisits();
    // Initialize some activities
    this.initializeActivities();
  }

  private initializeDepartments() {
    const departmentNames = [
      'Pediatrics', 'Internal Medicine', 'Cardiology', 
      'Orthopedic', 'Neurology', 'Dermatology'
    ];
    
    departmentNames.forEach(name => {
      const id = this.currentDepartmentId++;
      const department: Department = {
        id,
        name,
        description: `${name} department`,
        status: 'active'
      };
      this.departments.set(id, department);
    });
  }

  private initializeUsers() {
    const adminUser: User = {
      id: this.currentUserId++,
      username: 'drsutono',
      password: 'password123', // In a real app this would be hashed
      fullName: 'Dr. Sutono',
      role: 'admin',
      specialty: 'General Practice',
      status: 'active'
    };
    
    const drAni: User = {
      id: this.currentUserId++,
      username: 'draniwijaya',
      password: 'password123',
      fullName: 'Dr. Ani Wijaya',
      role: 'doctor',
      specialty: 'Cardiology',
      status: 'active'
    };
    
    this.users.set(adminUser.id, adminUser);
    this.users.set(drAni.id, drAni);
  }

  private initializeDepartmentVisits() {
    const departmentIds = Array.from(this.departments.keys());
    const today = new Date();
    
    const visitsData = [
      { departmentId: 1, count: 140 },
      { departmentId: 2, count: 95 },
      { departmentId: 3, count: 85 },
      { departmentId: 4, count: 70 },
      { departmentId: 5, count: 65 },
      { departmentId: 6, count: 60 }
    ];
    
    visitsData.forEach(data => {
      const visit: DepartmentVisit = {
        id: this.currentDepartmentVisitId++,
        departmentId: data.departmentId,
        visitCount: data.count,
        visitDate: today
      };
      this.departmentVisits.set(visit.id, visit);
    });
  }

  private initializeActivities() {
    const activities = [
      {
        userId: 1,
        action: 'Membuat rekam medis baru untuk pasien Ahmad',
        details: 'Rekam medis pasien',
        timestamp: new Date(Date.now() - 3600000) // 1 hour ago
      },
      {
        userId: null,
        action: 'Sinkronisasi dengan BPJS Kesehatan berhasil',
        details: 'Sistem',
        timestamp: new Date(Date.now() - 7200000) // 2 hours ago
      },
      {
        userId: 2,
        action: 'Menyetelasikan 3 janji temu pasien',
        details: 'Jadwal dokter',
        timestamp: new Date(Date.now() - 10800000) // 3 hours ago
      },
      {
        userId: null,
        action: 'Menambahkan penjadwalan baru Aliwan',
        details: 'Admin',
        timestamp: new Date(Date.now() - 18000000) // 5 hours ago
      }
    ];
    
    activities.forEach(act => {
      const activity: Activity = {
        id: this.currentActivityId++,
        userId: act.userId,
        action: act.action,
        details: act.details,
        timestamp: act.timestamp
      };
      this.activities.set(activity.id, activity);
    });
  }
  
  // User CRUD operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, userUpdate: Partial<InsertUser>): Promise<User | undefined> {
    const existingUser = this.users.get(id);
    if (!existingUser) return undefined;
    
    const updatedUser = { ...existingUser, ...userUpdate };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async listUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Patient CRUD operations
  async getPatient(id: number): Promise<Patient | undefined> {
    return this.patients.get(id);
  }

  async getPatientByMedicalRecordNumber(mrn: string): Promise<Patient | undefined> {
    return Array.from(this.patients.values()).find(
      (patient) => patient.medicalRecordNumber === mrn,
    );
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = this.currentPatientId++;
    const patient: Patient = { ...insertPatient, id };
    this.patients.set(id, patient);
    return patient;
  }

  async updatePatient(id: number, patientUpdate: Partial<InsertPatient>): Promise<Patient | undefined> {
    const existingPatient = this.patients.get(id);
    if (!existingPatient) return undefined;
    
    const updatedPatient = { ...existingPatient, ...patientUpdate };
    this.patients.set(id, updatedPatient);
    return updatedPatient;
  }

  async listPatients(): Promise<Patient[]> {
    return Array.from(this.patients.values());
  }

  // Appointment CRUD operations
  async getAppointment(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { ...insertAppointment, id, createdAt: new Date() };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async updateAppointment(id: number, appointmentUpdate: Partial<InsertAppointment>): Promise<Appointment | undefined> {
    const existingAppointment = this.appointments.get(id);
    if (!existingAppointment) return undefined;
    
    const updatedAppointment = { ...existingAppointment, ...appointmentUpdate };
    this.appointments.set(id, updatedAppointment);
    return updatedAppointment;
  }

  async listAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async listAppointmentsByDate(date: Date): Promise<Appointment[]> {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    
    return Array.from(this.appointments.values()).filter(appointment => {
      const appointmentDate = new Date(appointment.scheduledDate);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate.getTime() === targetDate.getTime();
    });
  }

  async listAppointmentsByDoctor(doctorId: number): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      appointment => appointment.doctorId === doctorId
    );
  }

  async listAppointmentsByPatient(patientId: number): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      appointment => appointment.patientId === patientId
    );
  }

  // Department CRUD operations
  async getDepartment(id: number): Promise<Department | undefined> {
    return this.departments.get(id);
  }

  async createDepartment(insertDepartment: InsertDepartment): Promise<Department> {
    const id = this.currentDepartmentId++;
    const department: Department = { ...insertDepartment, id };
    this.departments.set(id, department);
    return department;
  }

  async updateDepartment(id: number, departmentUpdate: Partial<InsertDepartment>): Promise<Department | undefined> {
    const existingDepartment = this.departments.get(id);
    if (!existingDepartment) return undefined;
    
    const updatedDepartment = { ...existingDepartment, ...departmentUpdate };
    this.departments.set(id, updatedDepartment);
    return updatedDepartment;
  }

  async listDepartments(): Promise<Department[]> {
    return Array.from(this.departments.values());
  }

  // Inpatient CRUD operations
  async getInpatient(id: number): Promise<Inpatient | undefined> {
    return this.inpatients.get(id);
  }

  async createInpatient(insertInpatient: InsertInpatient): Promise<Inpatient> {
    const id = this.currentInpatientId++;
    const inpatient: Inpatient = { ...insertInpatient, id };
    this.inpatients.set(id, inpatient);
    return inpatient;
  }

  async updateInpatient(id: number, inpatientUpdate: Partial<InsertInpatient>): Promise<Inpatient | undefined> {
    const existingInpatient = this.inpatients.get(id);
    if (!existingInpatient) return undefined;
    
    const updatedInpatient = { ...existingInpatient, ...inpatientUpdate };
    this.inpatients.set(id, updatedInpatient);
    return updatedInpatient;
  }

  async listInpatients(): Promise<Inpatient[]> {
    return Array.from(this.inpatients.values());
  }

  async getActiveInpatientCount(): Promise<number> {
    // Active inpatients are those with status 'admitted' and no discharge date
    return Array.from(this.inpatients.values()).filter(
      inpatient => inpatient.status === 'admitted' && !inpatient.dischargeDate
    ).length || 12; // Default to 12 for initial display
  }

  // Medical Record CRUD operations
  async getMedicalRecord(id: number): Promise<MedicalRecord | undefined> {
    return this.medicalRecords.get(id);
  }

  async createMedicalRecord(insertMedicalRecord: InsertMedicalRecord): Promise<MedicalRecord> {
    const id = this.currentMedicalRecordId++;
    const medicalRecord: MedicalRecord = { ...insertMedicalRecord, id };
    this.medicalRecords.set(id, medicalRecord);
    
    // Also create an activity entry
    const doctor = await this.getUser(insertMedicalRecord.doctorId);
    const patient = await this.getPatient(insertMedicalRecord.patientId);
    
    if (doctor && patient) {
      await this.createActivity({
        userId: doctor.id,
        action: `Membuat rekam medis baru untuk pasien ${patient.fullName}`,
        details: 'Rekam medis pasien'
      });
    }
    
    return medicalRecord;
  }

  async updateMedicalRecord(id: number, medicalRecordUpdate: Partial<InsertMedicalRecord>): Promise<MedicalRecord | undefined> {
    const existingMedicalRecord = this.medicalRecords.get(id);
    if (!existingMedicalRecord) return undefined;
    
    const updatedMedicalRecord = { ...existingMedicalRecord, ...medicalRecordUpdate };
    this.medicalRecords.set(id, updatedMedicalRecord);
    return updatedMedicalRecord;
  }

  async listMedicalRecordsByPatient(patientId: number): Promise<MedicalRecord[]> {
    return Array.from(this.medicalRecords.values()).filter(
      record => record.patientId === patientId
    );
  }

  // Activity operations
  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const id = this.currentActivityId++;
    const activity: Activity = { ...insertActivity, id, timestamp: new Date() };
    this.activities.set(id, activity);
    return activity;
  }

  async listRecentActivities(limit: number): Promise<Activity[]> {
    const activities = Array.from(this.activities.values());
    
    // Sort by timestamp (newest first)
    activities.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    return activities.slice(0, limit);
  }

  // Department Visits operations
  async createDepartmentVisit(insertVisit: InsertDepartmentVisit): Promise<DepartmentVisit> {
    const id = this.currentDepartmentVisitId++;
    const visit: DepartmentVisit = { ...insertVisit, id };
    this.departmentVisits.set(id, visit);
    return visit;
  }

  async getDepartmentVisitsByDateRange(startDate: Date, endDate: Date): Promise<DepartmentVisit[]> {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    
    return Array.from(this.departmentVisits.values()).filter(visit => {
      const visitDate = new Date(visit.visitDate);
      return visitDate >= start && visitDate <= end;
    });
  }

  // Dashboard statistics
  async getDashboardStats(): Promise<{
    totalPatients: number;
    todayAppointments: number;
    activeInpatients: number;
    activeDoctors: number;
  }> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayAppointments = await this.listAppointmentsByDate(today);
    
    const activeDoctors = Array.from(this.users.values()).filter(
      user => user.role === 'doctor' && user.status === 'active'
    );

    return {
      totalPatients: this.patients.size || 0,
      todayAppointments: todayAppointments.length || 0,
      activeInpatients: await this.getActiveInpatientCount(),
      activeDoctors: activeDoctors.length || 28 // Default to 28 for initial display
    };
  }
}

export const storage = new MemStorage();
