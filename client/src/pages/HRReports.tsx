
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Users, 
  Clock,
  Calendar,
  Download,
  LineChart,
  BadgeCheck,
  Printer
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HRReports = () => {
  const handleGenerateReport = (reportType: string) => {
    // TODO: Implement report generation logic
    console.log(`Generating ${reportType} report`);
  };

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Laporan SDM & Kepegawaian</h1>
        </div>

        <Tabs defaultValue="employee">
          <TabsList className="mb-4">
            <TabsTrigger value="employee">Data Karyawan</TabsTrigger>
            <TabsTrigger value="attendance">Kehadiran & Shift</TabsTrigger>
            <TabsTrigger value="payroll">Penggajian</TabsTrigger>
            <TabsTrigger value="performance">Kinerja</TabsTrigger>
          </TabsList>

          <TabsContent value="employee">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data & Riwayat Karyawan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Departemen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Departemen</SelectItem>
                      <SelectItem value="medical">Medis</SelectItem>
                      <SelectItem value="nursing">Keperawatan</SelectItem>
                      <SelectItem value="support">Penunjang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('employee-data')}>
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Laporan
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cetak Kontrak & ID Card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="contract">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Dokumen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Kontrak Kerja</SelectItem>
                      <SelectItem value="idcard">ID Card</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('documents')}>
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Dokumen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan Absensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => handleGenerateReport('attendance')}>
                    <Clock className="mr-2 h-4 w-4" />
                    Download Laporan
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lembur & Cuti</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => handleGenerateReport('overtime-leave')}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Download Laporan
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shift per Unit</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => handleGenerateReport('shift')}>
                    <Users className="mr-2 h-4 w-4" />
                    Download Laporan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Slip Gaji Karyawan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="current">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Bulan Berjalan</SelectItem>
                      <SelectItem value="last">Bulan Lalu</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('payslip')}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Slip Gaji
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rekap Payroll Bulanan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="current">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Bulan Berjalan</SelectItem>
                      <SelectItem value="last">Bulan Lalu</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('payroll-summary')}>
                    <LineChart className="mr-2 h-4 w-4" />
                    Generate Rekap
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluasi Karyawan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="current">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Periode Berjalan</SelectItem>
                      <SelectItem value="last">Periode Lalu</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('evaluation')}>
                    <BadgeCheck className="mr-2 h-4 w-4" />
                    Download Evaluasi
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KPI per Divisi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Divisi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Divisi</SelectItem>
                      <SelectItem value="medical">Divisi Medis</SelectItem>
                      <SelectItem value="nursing">Divisi Keperawatan</SelectItem>
                      <SelectItem value="support">Divisi Penunjang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full" onClick={() => handleGenerateReport('kpi')}>
                    <LineChart className="mr-2 h-4 w-4" />
                    Generate Laporan KPI
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRReports;
