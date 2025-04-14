import { useQuery } from "@tanstack/react-query";
import { Appointment } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar as CalendarIcon, PlusCircle } from "lucide-react";

const Appointments = () => {
  const { data: appointments, isLoading } = useQuery<Appointment[]>({
    queryKey: ["/api/appointments/today"],
  });

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Jadwal & Appointment</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Buat Janji Temu
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Janji Temu Hari Ini</CardTitle>
              <Button variant="outline" size="sm">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Kalender Lengkap
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : !appointments || appointments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Tidak ada janji temu hari ini
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Waktu</TableHead>
                    <TableHead>Pasien</TableHead>
                    <TableHead>Dokter</TableHead>
                    <TableHead>Departemen</TableHead>
                    <TableHead>Tujuan</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{new Date(appointment.scheduledDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                      <TableCell className="font-medium">ID: {appointment.patientId}</TableCell>
                      <TableCell>ID: {appointment.doctorId}</TableCell>
                      <TableCell>ID: {appointment.departmentId}</TableCell>
                      <TableCell>{appointment.purpose || "-"}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === "scheduled" ? "bg-blue-100 text-blue-800" : 
                          appointment.status === "completed" ? "bg-green-100 text-green-800" : 
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {appointment.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
