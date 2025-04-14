import { useQuery } from "@tanstack/react-query";
import { Inpatient as InpatientType } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Building, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InpatientPage = () => {
  const { data: inpatients, isLoading } = useQuery<InpatientType[]>({
    queryKey: ["/api/inpatients"],
  });

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Rawat Inap</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Pendaftaran Rawat Inap
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Bed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Bed Terisi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? "..." : inpatients?.length || 12}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Bed Tersedia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? "..." : 120 - (inpatients?.length || 12)}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="active">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="active">Pasien Aktif</TabsTrigger>
              <TabsTrigger value="discharge">Rencana Pulang</TabsTrigger>
              <TabsTrigger value="history">Riwayat</TabsTrigger>
            </TabsList>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Pasien Rawat Inap Aktif</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                ) : !inpatients || inpatients.length === 0 ? (
                  <div className="text-center py-8">
                    <Building className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada pasien rawat inap</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Semua ruang rawat inap kosong saat ini.
                    </p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Pasien</TableHead>
                        <TableHead>Tanggal Masuk</TableHead>
                        <TableHead>Ruangan</TableHead>
                        <TableHead>Dokter</TableHead>
                        <TableHead>Diagnosis</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inpatients.map((inpatient) => (
                        <TableRow key={inpatient.id}>
                          <TableCell>{inpatient.patientId}</TableCell>
                          <TableCell>{new Date(inpatient.admissionDate).toLocaleDateString()}</TableCell>
                          <TableCell>{inpatient.roomId}</TableCell>
                          <TableCell>{inpatient.doctorId}</TableCell>
                          <TableCell>{inpatient.diagnosis || "-"}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              {inpatient.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discharge">
            <Card>
              <CardHeader>
                <CardTitle>Rencana Pulang</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada rencana pulang untuk saat ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Pasien Rawat Inap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada riwayat pasien rawat inap
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InpatientPage;
