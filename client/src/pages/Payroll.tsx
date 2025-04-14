import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase,
  Search, 
  Calculator,
  PieChart,
  FileText,
  BanknoteIcon,
  Clock,
  CalendarDays
} from "lucide-react";

const Payroll = () => {
  const dummyPayroll = [
    {
      id: 'PYR-2025-04',
      period: 'April 2025',
      employeeCount: 245,
      totalAmount: 1250000000,
      status: 'draft',
      paymentDate: '-'
    },
    {
      id: 'PYR-2025-03',
      period: 'Maret 2025',
      employeeCount: 243,
      totalAmount: 1245000000,
      status: 'paid',
      paymentDate: '2025-03-28'
    },
    {
      id: 'PYR-2025-02',
      period: 'Februari 2025',
      employeeCount: 240,
      totalAmount: 1235000000,
      status: 'paid',
      paymentDate: '2025-02-27'
    }
  ];

  const dummyPayslips = [
    {
      id: 'SLP-2025-03-0123',
      employeeId: 'EMP-2022-0123',
      employeeName: 'Dr. Anisa Wijaya',
      position: 'Dokter Spesialis Anak',
      department: 'Pediatrics',
      period: 'Maret 2025',
      amount: 22500000,
      status: 'sent'
    },
    {
      id: 'SLP-2025-03-0087',
      employeeId: 'EMP-2020-0087',
      employeeName: 'Budi Santoso',
      position: 'Kepala Perawat',
      department: 'ICU',
      period: 'Maret 2025',
      amount: 12000000,
      status: 'sent'
    },
    {
      id: 'SLP-2025-03-0201',
      employeeId: 'EMP-2023-0201',
      employeeName: 'Citra Lestari',
      position: 'Radiografer',
      department: 'Radiology',
      period: 'Maret 2025',
      amount: 9500000,
      status: 'sent'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      paid: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      sent: 'bg-blue-100 text-blue-800',
      viewed: 'bg-green-100 text-green-800',
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

  const formatCurrency = (amount: number) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Penggajian (Payroll)</h1>
          <Button>
            <Calculator className="mr-2 h-4 w-4" />
            Proses Gaji Bulan Ini
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Pengeluaran Gaji</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BanknoteIcon className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold">{formatCurrency(1250000000)}</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Bulan April 2025</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Pegawai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                <div className="text-2xl font-bold">245 Orang</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Aktif per 14 April 2025</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Tanggal Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 text-amber-500 mr-2" />
                <div className="text-2xl font-bold">28 April 2025</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">14 hari lagi</div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Slip Gaji</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari berdasarkan nama atau ID karyawan"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="periods">
          <TabsList className="mb-6">
            <TabsTrigger value="periods">Periode Penggajian</TabsTrigger>
            <TabsTrigger value="slips">Slip Gaji</TabsTrigger>
            <TabsTrigger value="components">Komponen Gaji</TabsTrigger>
            <TabsTrigger value="reports">Laporan Pajak</TabsTrigger>
          </TabsList>
          
          <TabsContent value="periods">
            <Card>
              <CardHeader>
                <CardTitle>Periode Penggajian</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Periode</TableHead>
                      <TableHead>Periode</TableHead>
                      <TableHead>Jumlah Karyawan</TableHead>
                      <TableHead>Total Gaji</TableHead>
                      <TableHead>Tanggal Bayar</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyPayroll.map((period) => (
                      <TableRow key={period.id}>
                        <TableCell className="font-medium">{period.id}</TableCell>
                        <TableCell>{period.period}</TableCell>
                        <TableCell>{period.employeeCount} Orang</TableCell>
                        <TableCell>{formatCurrency(period.totalAmount)}</TableCell>
                        <TableCell>{period.paymentDate}</TableCell>
                        <TableCell>{getStatusBadge(period.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="slips">
            <Card>
              <CardHeader>
                <CardTitle>Slip Gaji</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Slip</TableHead>
                      <TableHead>Nama Karyawan</TableHead>
                      <TableHead>Jabatan</TableHead>
                      <TableHead>Periode</TableHead>
                      <TableHead>Total Gaji</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyPayslips.map((slip) => (
                      <TableRow key={slip.id}>
                        <TableCell className="font-medium">{slip.id}</TableCell>
                        <TableCell>
                          <div>{slip.employeeName}</div>
                          <div className="text-xs text-gray-500">{slip.employeeId}</div>
                        </TableCell>
                        <TableCell>{slip.position}</TableCell>
                        <TableCell>{slip.period}</TableCell>
                        <TableCell>{formatCurrency(slip.amount)}</TableCell>
                        <TableCell>{getStatusBadge(slip.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>Komponen Gaji</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PieChart className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Komponen Gaji</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Pilih karyawan untuk melihat detail komponen gaji
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Pajak PPh 21</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Laporan Pajak PPh 21</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Pilih periode untuk melihat laporan pajak penghasilan
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

export default Payroll;