import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  UserCog, 
  Search, 
  PlusCircle,
  Users,
  GraduationCap,
  Calendar,
  UserPlus,
  Download,
  FilePlus
} from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HR = () => {
  const dummyEmployees = [
    {
      id: 'EMP-2022-0123',
      name: 'Dr. Anisa Wijaya',
      position: 'Dokter Spesialis Anak',
      department: 'Pediatrics',
      joinDate: '2022-06-15',
      endContract: '2025-06-14',
      status: 'active'
    },
    {
      id: 'EMP-2020-0087',
      name: 'Budi Santoso',
      position: 'Kepala Perawat',
      department: 'ICU',
      joinDate: '2020-03-10',
      endContract: 'Permanent',
      status: 'active'
    },
    {
      id: 'EMP-2023-0201',
      name: 'Citra Lestari',
      position: 'Radiografer',
      department: 'Radiology',
      joinDate: '2023-09-01',
      endContract: '2025-08-31',
      status: 'training'
    },
    {
      id: 'EMP-2021-0150',
      name: 'Dr. Dodi Irawan',
      position: 'Dokter Umum',
      department: 'Emergency',
      joinDate: '2021-11-15',
      endContract: '2024-11-14',
      status: 'leave'
    }
  ];

  const dummyTrainings = [
    {
      id: 'TRN-2025-0018',
      name: 'Advanced Emergency Response',
      department: 'Emergency',
      startDate: '2025-05-10',
      endDate: '2025-05-12',
      provider: 'Medical Association Indonesia',
      participants: 12,
      status: 'scheduled'
    },
    {
      id: 'TRN-2025-0017',
      name: 'Healthcare Information Management',
      department: 'All Departments',
      startDate: '2025-04-25',
      endDate: '2025-04-26',
      provider: 'SIMRS Academy',
      participants: 25,
      status: 'scheduled'
    },
    {
      id: 'TRN-2025-0016',
      name: 'Clinical Research Methods',
      department: 'Medical Staff',
      startDate: '2025-04-05',
      endDate: '2025-04-06',
      provider: 'National Health Research Institute',
      participants: 8,
      status: 'completed'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      training: 'bg-blue-100 text-blue-800',
      leave: 'bg-yellow-100 text-yellow-800',
      terminated: 'bg-red-100 text-red-800',
      scheduled: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    return (
      <Badge 
        className={styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'}
        variant="outline"
      >
        {status}
      </Badge>
    );
  };

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Kepegawaian (HRD)</h1>
          <div className="flex gap-2">
            <Button onClick={() => {
              // Export functionality will be added here
              const csvContent = dummyEmployees
                .map(e => [e.id, e.name, e.position, e.department, e.joinDate, e.status].join(','))
                .join('\n');
              const blob = new Blob([`ID,Nama,Jabatan,Departemen,Tanggal Bergabung,Status\n${csvContent}`], { type: 'text/csv' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'laporan-karyawan.csv';
              a.click();
            }}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button>
              <FilePlus className="mr-2 h-4 w-4" />
              Generate Laporan
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Tambah Karyawan
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah Karyawan Baru</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" />
                  </div>
                  <div>
                    <Label htmlFor="position">Jabatan</Label>
                    <Input id="position" />
                  </div>
                  <div>
                    <Label htmlFor="department">Departemen</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih departemen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="icu">ICU</SelectItem>
                        <SelectItem value="radiology">Radiology</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="joinDate">Tanggal Bergabung</Label>
                    <Input type="date" id="joinDate" />
                  </div>
                  <div>
                    <Label htmlFor="contract">Jenis Kontrak</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kontrak" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="contract">Kontrak</SelectItem>
                        <SelectItem value="internship">Magang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
                <DialogFooter>
                  <Button variant="outline" onClick={() => {}}>Batal</Button>
                  <Button onClick={() => {}}>Simpan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Karyawan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <div className="text-2xl font-bold">245 Orang</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Kontrak Akan Berakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-amber-500 mr-2" />
                <div className="text-2xl font-bold">15 Karyawan</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Pelatihan Bulan Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold">3 Program</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Karyawan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari berdasarkan nama, NIP, atau departemen"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="employees">
          <TabsList className="mb-6">
            <TabsTrigger value="employees">Data Karyawan</TabsTrigger>
            <TabsTrigger value="contracts">Kontrak Kerja</TabsTrigger>
            <TabsTrigger value="trainings">Pelatihan & Sertifikasi</TabsTrigger>
            <TabsTrigger value="performance">Penilaian Kinerja</TabsTrigger>
          </TabsList>
          
          <TabsContent value="employees">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Karyawan</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>NIP</TableHead>
                      <TableHead>Nama Karyawan</TableHead>
                      <TableHead>Jabatan</TableHead>
                      <TableHead>Departemen</TableHead>
                      <TableHead>Tanggal Bergabung</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyEmployees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.joinDate}</TableCell>
                        <TableCell>{getStatusBadge(employee.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <CardTitle>Kontrak Kerja</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>NIP</TableHead>
                      <TableHead>Nama Karyawan</TableHead>
                      <TableHead>Jabatan</TableHead>
                      <TableHead>Mulai Kontrak</TableHead>
                      <TableHead>Akhir Kontrak</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyEmployees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.joinDate}</TableCell>
                        <TableCell>{employee.endContract}</TableCell>
                        <TableCell>{getStatusBadge(employee.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trainings">
            <Card>
              <CardHeader>
                <CardTitle>Program Pelatihan & Sertifikasi</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Program</TableHead>
                      <TableHead>Nama Program</TableHead>
                      <TableHead>Departemen</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Penyelenggara</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyTrainings.map((training) => (
                      <TableRow key={training.id}>
                        <TableCell className="font-medium">{training.id}</TableCell>
                        <TableCell>{training.name}</TableCell>
                        <TableCell>{training.department}</TableCell>
                        <TableCell>{`${training.startDate} - ${training.endDate}`}</TableCell>
                        <TableCell>{training.provider}</TableCell>
                        <TableCell>{getStatusBadge(training.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Penilaian Kinerja & Kompetensi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <UserCog className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Penilaian Kinerja</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Periode penilaian kinerja belum dimulai atau pilih karyawan untuk melihat riwayat penilaian
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HR;