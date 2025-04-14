import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart as BarChartIcon, Download, FileText, LineChart, ClipboardList, CalendarRange, FileClock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Reports = () => {
  const dummyVisitData = [
    { name: "Jan", count: 120 },
    { name: "Feb", count: 135 },
    { name: "Mar", count: 143 },
    { name: "Apr", count: 127 },
    { name: "May", count: 132 },
    { name: "Jun", count: 143 },
  ];

  const regulatoryReportsList = [
    { 
      id: 'RL-1.1', 
      name: 'Data Dasar Rumah Sakit', 
      period: 'Tahunan', 
      lastSubmitted: '2025-01-10', 
      status: 'submitted' 
    },
    { 
      id: 'RL-1.2', 
      name: 'Data Ketenagaan Rumah Sakit', 
      period: 'Tahunan', 
      lastSubmitted: '2025-01-10', 
      status: 'submitted' 
    },
    { 
      id: 'RL-1.3', 
      name: 'Fasilitas Tempat Tidur', 
      period: 'Tahunan', 
      lastSubmitted: '2025-01-10', 
      status: 'submitted' 
    },
    { 
      id: 'RL-2.1', 
      name: 'Data Ketenagaan Dokter, Dokter Gigi, dan Dokter Spesialis', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'submitted' 
    },
    { 
      id: 'RL-3.1', 
      name: 'Data Kegiatan Pelayanan Rawat Inap', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'submitted' 
    },
    { 
      id: 'RL-3.2', 
      name: 'Data Kegiatan Pelayanan Rawat Darurat', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'submitted' 
    },
    { 
      id: 'RL-3.3', 
      name: 'Data Kegiatan Pelayanan Rawat Jalan', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'submitted' 
    },
    { 
      id: 'RL-3.4', 
      name: 'Data Kegiatan Pelayanan Penunjang', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'submitted' 
    },
    { 
      id: 'RL-4a', 
      name: 'Data Keadaan Morbiditas Pasien Rawat Inap', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'pending' 
    },
    { 
      id: 'RL-4b', 
      name: 'Data Keadaan Morbiditas Pasien Rawat Jalan', 
      period: 'Triwulan', 
      lastSubmitted: '2025-03-31', 
      status: 'pending' 
    },
    { 
      id: 'RL-5.1', 
      name: 'Data Pengunjung Rumah Sakit', 
      period: 'Bulanan', 
      lastSubmitted: '2025-03-31', 
      status: 'pending' 
    },
    { 
      id: 'RL-5.4', 
      name: 'Data Rujukan', 
      period: 'Bulanan', 
      lastSubmitted: '2025-03-31', 
      status: 'overdue' 
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      'submitted': 'bg-green-100 text-green-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'overdue': 'bg-red-100 text-red-800',
      'draft': 'bg-blue-100 text-blue-800',
    };
    
    return (
      <Badge variant="outline" className={styles[status as keyof typeof styles]}>
        {status === 'submitted' ? 'Terkirim' : 
         status === 'pending' ? 'Menunggu' : 
         status === 'overdue' ? 'Terlambat' : 'Draft'}
      </Badge>
    );
  };

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
          <Button
            onClick={() => {
              // Export all reports as CSV
              const data = [
                ['ID', 'Nama Laporan', 'Periode', 'Status'],
                ...regulatoryReportsList.map(report => [
                  report.id,
                  report.name,
                  report.period,
                  report.status
                ])
              ].map(row => row.join(',')).join('\n');
              
              const blob = new Blob([data], { type: 'text/csv' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'daftar-laporan-regulasi.csv';
              a.click();
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Laporan
          </Button>
        </div>
        
        <Tabs defaultValue="general" className="mb-6">
          <TabsList>
            <TabsTrigger value="general">
              <BarChartIcon className="h-4 w-4 mr-2" />
              Laporan Umum
            </TabsTrigger>
            <TabsTrigger value="regulatory">
              <ClipboardList className="h-4 w-4 mr-2" />
              Laporan Regulasi (RL)
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Jenis Laporan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Kategori</h3>
                    <Select defaultValue="patient">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patient">Pasien</SelectItem>
                        <SelectItem value="finance">Keuangan</SelectItem>
                        <SelectItem value="operation">Operasional</SelectItem>
                        <SelectItem value="pharmacy">Farmasi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Periode</h3>
                    <Select defaultValue="month">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih periode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Harian</SelectItem>
                        <SelectItem value="week">Mingguan</SelectItem>
                        <SelectItem value="month">Bulanan</SelectItem>
                        <SelectItem value="quarter">Triwulan</SelectItem>
                        <SelectItem value="year">Tahunan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Format</h3>
                    <Select defaultValue="pdf">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => {
                      // Here we would normally make an API call
                      // For now simulate report generation
                      const category = "patient";
                      const period = "month";
                      const format = "pdf";
                      
                      // Simulate download with dummy data
                      const blob = new Blob(['Dummy Report Data'], { type: 'application/pdf' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `laporan-${category}-${period}.${format}`;
                      a.click();
                    }}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Laporan
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Kunjungan Pasien 6 Bulan Terakhir</CardTitle>
                  <BarChartIcon className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={dummyVisitData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#0078D4" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="regulatory">
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Laporan Regulasi Rumah Sakit (RL)</CardTitle>
                    <div className="flex gap-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Periode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Periode</SelectItem>
                          <SelectItem value="yearly">Tahunan</SelectItem>
                          <SelectItem value="quarterly">Triwulan</SelectItem>
                          <SelectItem value="monthly">Bulanan</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">
                        <CalendarRange className="h-4 w-4 mr-2" />
                        Pilih Periode
                      </Button>
                      <Button>
                        <FileClock className="h-4 w-4 mr-2" />
                        Submit Laporan
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Laporan</TableHead>
                        <TableHead>Nama Laporan</TableHead>
                        <TableHead>Periode</TableHead>
                        <TableHead>Terakhir Dikirim</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {regulatoryReportsList.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">{report.id}</TableCell>
                          <TableCell>{report.name}</TableCell>
                          <TableCell>{report.period}</TableCell>
                          <TableCell>{report.lastSubmitted}</TableCell>
                          <TableCell>{getStatusBadge(report.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Riwayat Pengiriman Laporan Regulasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 text-green-700 rounded-md">
                      <p className="text-sm font-medium">Laporan RL 3.1 - 3.4 Triwulan I 2025 berhasil dikirim</p>
                      <p className="text-xs text-green-600 mt-1">31 Maret 2025, 14:30</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 text-green-700 rounded-md">
                      <p className="text-sm font-medium">Laporan RL 1.1 - 1.3 Tahunan 2024 berhasil dikirim</p>
                      <p className="text-xs text-green-600 mt-1">10 Januari 2025, 10:15</p>
                    </div>
                    
                    <div className="p-4 bg-red-50 text-red-700 rounded-md">
                      <p className="text-sm font-medium">Laporan RL 5.4 Maret 2025 gagal dikirim: Data tidak lengkap</p>
                      <p className="text-xs text-red-600 mt-1">31 Maret 2025, 23:50</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;
