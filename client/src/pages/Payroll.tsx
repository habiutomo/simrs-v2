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
  CalendarDays,
  Download,
  EyeIcon,
  Mail,
  Filter,
  Plus,
  CheckCircle2
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

// Komponen dialog preview slip gaji
interface PayslipData {
  id: string;
  employeeId: string;
  employeeName: string;
  position: string;
  department: string;
  period: string;
  amount: number;
  status: string;
}

const PayslipPreviewDialog = ({ slip }: { slip: PayslipData }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <EyeIcon className="h-4 w-4 mr-2" />
          Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Slip Gaji Digital</DialogTitle>
          <DialogDescription>
            Periode: {slip.period}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Header Slip Gaji */}
          <div className="flex flex-col items-center border-b pb-4">
            <h2 className="text-xl font-bold">Rumah Sakit Sehat Sentosa</h2>
            <p className="text-sm text-gray-500">Jl. Kesehatan No. 123, Jakarta Selatan</p>
            <h3 className="mt-2 font-semibold">SLIP GAJI KARYAWAN</h3>
            <p className="text-sm">Periode: {slip.period}</p>
          </div>
          
          {/* Informasi Karyawan */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">ID Karyawan</p>
              <p className="font-medium">{slip.employeeId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Nama Karyawan</p>
              <p className="font-medium">{slip.employeeName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Jabatan</p>
              <p className="font-medium">{slip.position}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Departemen</p>
              <p className="font-medium">{slip.department}</p>
            </div>
          </div>
          
          <Separator />
          
          {/* Pendapatan */}
          <div>
            <h4 className="font-medium text-blue-600 mb-2">Pendapatan</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Gaji Pokok</span>
                <span>Rp 15.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Tunjangan Jabatan</span>
                <span>Rp 5.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Tunjangan Kesehatan</span>
                <span>Rp 2.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Insentif Kinerja</span>
                <span>Rp 3.000.000</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Total Pendapatan</span>
                <span>Rp 25.000.000</span>
              </div>
            </div>
          </div>
          
          {/* Potongan */}
          <div>
            <h4 className="font-medium text-red-600 mb-2">Potongan</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>PPh 21</span>
                <span>Rp 2.250.000</span>
              </div>
              <div className="flex justify-between">
                <span>BPJS Kesehatan</span>
                <span>Rp 150.000</span>
              </div>
              <div className="flex justify-between">
                <span>BPJS Ketenagakerjaan</span>
                <span>Rp 100.000</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Total Potongan</span>
                <span>Rp 2.500.000</span>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Total Diterima */}
          <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
            <div className="flex justify-between font-bold">
              <span>TOTAL GAJI DITERIMA</span>
              <span>{slip.amount === 22500000 ? 'Rp 22.500.000' : formatCurrency(slip.amount)}</span>
            </div>
            <p className="text-xs text-blue-600 mt-1">Telah ditransfer ke rekening Bank Mandiri ****4567 pada tanggal 28 Maret 2025</p>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            <p>Slip gaji ini digenerate secara otomatis dan valid tanpa tanda tangan.</p>
            <p>Jika ada pertanyaan, hubungi Departemen SDM di ext. 2345 atau email hr@rssehatsentosa.com</p>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Unduh PDF
          </Button>
          <Button>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

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
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Slip Gaji</CardTitle>
                <div className="flex gap-2">
                  <Select defaultValue="march-2025">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="march-2025">Maret 2025</SelectItem>
                      <SelectItem value="february-2025">Februari 2025</SelectItem>
                      <SelectItem value="january-2025">Januari 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
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
                      <TableHead className="text-right">Aksi</TableHead>
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
                        <TableCell className="text-right">
                          <PayslipPreviewDialog slip={slip} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Pengiriman Slip Gaji */}
            <Card>
              <CardHeader>
                <CardTitle>Pengiriman Slip Gaji</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-md">
                    <div>
                      <h3 className="font-medium text-blue-700">Slip Gaji Maret 2025</h3>
                      <p className="text-sm text-blue-600">243 slip gaji siap dikirim</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Semua
                      </Button>
                      <Button>
                        <Mail className="h-4 w-4 mr-2" />
                        Kirim Email
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between bg-gray-50 p-4 rounded-md border">
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">Status Pengiriman:</div>
                      <div>Dikirim: <span className="font-medium text-green-600">243</span></div>
                      <div>Belum Dilihat: <span className="font-medium text-yellow-600">78</span></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">Detail Pengiriman:</div>
                      <div>Tanggal Kirim: 28/03/2025</div>
                      <div>Metode: Email</div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">Riwayat:</div>
                      <div>Terakhir Diperbarui: 28/03/2025 14:30</div>
                      <div>Oleh: Admin HR</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="components">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Komponen Gaji</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Pilih Jabatan</h3>
                      <Select defaultValue="dokter">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jabatan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dokter">Dokter</SelectItem>
                          <SelectItem value="perawat">Perawat</SelectItem>
                          <SelectItem value="staff">Staff Administrasi</SelectItem>
                          <SelectItem value="teknisi">Teknisi</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Pilih Departemen</h3>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih departemen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Departemen</SelectItem>
                          <SelectItem value="pediatrics">Pediatrik</SelectItem>
                          <SelectItem value="icu">ICU</SelectItem>
                          <SelectItem value="radiology">Radiologi</SelectItem>
                          <SelectItem value="pharmacy">Farmasi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Tampilkan Komponen
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Detail Komponen Gaji - Dokter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-medium text-blue-600">Pendapatan</h3>
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3 font-medium">Komponen</div>
                        <div className="col-span-2 font-medium">Nominal</div>
                        <div className="col-span-1 font-medium">Tipe</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">Gaji Pokok</div>
                        <div className="col-span-2">Rp 15.000.000</div>
                        <div className="col-span-1">Fixed</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">Tunjangan Jabatan</div>
                        <div className="col-span-2">Rp 5.000.000</div>
                        <div className="col-span-1">Fixed</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">Tunjangan Kesehatan</div>
                        <div className="col-span-2">Rp 2.000.000</div>
                        <div className="col-span-1">Fixed</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">Insentif Kinerja</div>
                        <div className="col-span-2">Rp 3.000.000</div>
                        <div className="col-span-1">Variable</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b bg-gray-50">
                        <div className="col-span-3 font-medium">Total Pendapatan</div>
                        <div className="col-span-2 font-medium">Rp 25.000.000</div>
                        <div className="col-span-1"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium text-red-600">Potongan</h3>
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3 font-medium">Komponen</div>
                        <div className="col-span-2 font-medium">Nominal</div>
                        <div className="col-span-1 font-medium">Tipe</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">PPh 21</div>
                        <div className="col-span-2">Rp 2.250.000</div>
                        <div className="col-span-1">%</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">BPJS Kesehatan</div>
                        <div className="col-span-2">Rp 150.000</div>
                        <div className="col-span-1">%</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b">
                        <div className="col-span-3">BPJS Ketenagakerjaan</div>
                        <div className="col-span-2">Rp 100.000</div>
                        <div className="col-span-1">%</div>
                      </div>
                      
                      <div className="grid grid-cols-6 py-2 border-b bg-gray-50">
                        <div className="col-span-3 font-medium">Total Potongan</div>
                        <div className="col-span-2 font-medium">Rp 2.500.000</div>
                        <div className="col-span-1"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 py-2 bg-blue-50 rounded-md border-blue-200 border">
                      <div className="col-span-3 font-bold">TOTAL DITERIMA</div>
                      <div className="col-span-2 font-bold">Rp 22.500.000</div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card className="mb-6">
              <CardHeader className="flex justify-between items-start">
                <div>
                  <CardTitle>Laporan Pajak PPh 21</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Periode Tahun 2025</p>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="2025">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Pilih tahun" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Bulan</TableHead>
                      <TableHead>Total Gaji Bruto</TableHead>
                      <TableHead>Total PPh 21</TableHead>
                      <TableHead>Jumlah Karyawan</TableHead>
                      <TableHead>Status Pelaporan</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Maret 2025</TableCell>
                      <TableCell>{formatCurrency(1245000000)}</TableCell>
                      <TableCell>{formatCurrency(112050000)}</TableCell>
                      <TableCell>243</TableCell>
                      <TableCell>{getStatusBadge('paid')}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="h-4 w-4 mr-2" />
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Februari 2025</TableCell>
                      <TableCell>{formatCurrency(1235000000)}</TableCell>
                      <TableCell>{formatCurrency(111150000)}</TableCell>
                      <TableCell>240</TableCell>
                      <TableCell>{getStatusBadge('paid')}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="h-4 w-4 mr-2" />
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Januari 2025</TableCell>
                      <TableCell>{formatCurrency(1230000000)}</TableCell>
                      <TableCell>{formatCurrency(110700000)}</TableCell>
                      <TableCell>238</TableCell>
                      <TableCell>{getStatusBadge('paid')}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="h-4 w-4 mr-2" />
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Formulir SPT PPh 21 */}
            <Card>
              <CardHeader>
                <CardTitle>Formulir Pelaporan Pajak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 border rounded-md p-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">SPT Masa PPh 21 - Maret 2025</h3>
                      <p className="text-sm text-gray-500">Status: Sudah Dilaporkan</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Terkirim
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">SPT Tahunan PPh 21 - 2024</h3>
                      <p className="text-sm text-gray-500">Status: Draft</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button>
                        <FileText className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Bukti Potong PPh 21 (1721-A1)</h3>
                      <p className="text-sm text-gray-500">Periode: Januari - Desember 2024</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Buat Baru
                      </Button>
                    </div>
                  </div>
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