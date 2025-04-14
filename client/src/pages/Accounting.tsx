import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, DollarSign, Calculator, BarChart2, Plus, PlusCircle, Calendar, Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Komponen dialog entri jurnal baru
const NewJournalEntryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Buat Jurnal Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Buat Entri Jurnal Baru</DialogTitle>
          <DialogDescription>
            Entri jurnal akan dicatat ke dalam buku besar setelah disimpan.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="transaction-date" className="text-right">
              Tanggal
            </Label>
            <Input
              id="transaction-date"
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="transaction-ref" className="text-right">
              No. Referensi
            </Label>
            <Input
              id="transaction-ref"
              placeholder="JV-2025-04-001"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="transaction-desc" className="text-right">
              Keterangan
            </Label>
            <Input
              id="transaction-desc"
              placeholder="Deskripsi transaksi"
              className="col-span-3"
            />
          </div>
          
          <div className="border rounded-md p-3">
            <div className="font-medium mb-2">Detail Entri Jurnal</div>
            <div className="space-y-3">
              {/* Baris 1 */}
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-5">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Akun" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10001">1-10001 - Kas</SelectItem>
                      <SelectItem value="1-10002">1-10002 - Bank</SelectItem>
                      <SelectItem value="4-10001">4-10001 - Pendapatan Rawat Inap</SelectItem>
                      <SelectItem value="5-10001">5-10001 - Biaya Farmasi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-3">
                  <Input placeholder="Debit" />
                </div>
                <div className="col-span-3">
                  <Input placeholder="Kredit" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Baris 2 */}
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-5">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Akun" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10001">1-10001 - Kas</SelectItem>
                      <SelectItem value="1-10002">1-10002 - Bank</SelectItem>
                      <SelectItem value="4-10001">4-10001 - Pendapatan Rawat Inap</SelectItem>
                      <SelectItem value="5-10001">5-10001 - Biaya Farmasi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-3">
                  <Input placeholder="Debit" />
                </div>
                <div className="col-span-3">
                  <Input placeholder="Kredit" />
                </div>
                <div className="col-span-1 flex justify-center">
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-12 gap-2 border-t pt-2">
              <div className="col-span-5 font-medium text-right">Total:</div>
              <div className="col-span-3 font-medium">Rp 0</div>
              <div className="col-span-3 font-medium">Rp 0</div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Batal</Button>
          <Button>Simpan Jurnal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Fitur pencarian jurnal
const JournalSearch = () => {
  return (
    <div className="mb-4 flex space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <Input placeholder="Cari berdasarkan keterangan atau nomor akun" className="pl-8" />
      </div>
      <div className="w-48">
        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Periode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Periode</SelectItem>
            <SelectItem value="today">Hari Ini</SelectItem>
            <SelectItem value="this-week">Minggu Ini</SelectItem>
            <SelectItem value="this-month">Bulan Ini</SelectItem>
            <SelectItem value="custom">Periode Kustom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant="outline">
        <Filter className="h-4 w-4 mr-2" />
        Filter
      </Button>
      <Button>
        <Search className="h-4 w-4 mr-2" />
        Cari
      </Button>
    </div>
  );
};

const Accounting = () => {
  const dummyJournals = [
    { id: 1, date: '2025-04-10', description: 'Pembayaran rawat inap pasien HR-1023', debit: 2500000, credit: 0, account: '1-10001', name: 'Kas' },
    { id: 2, date: '2025-04-10', description: 'Pembayaran rawat inap pasien HR-1023', debit: 0, credit: 2500000, account: '4-10001', name: 'Pendapatan Rawat Inap' },
    { id: 3, date: '2025-04-11', description: 'Pembelian obat apotek', debit: 0, credit: 1750000, account: '1-10001', name: 'Kas' },
    { id: 4, date: '2025-04-11', description: 'Pembelian obat apotek', debit: 1750000, credit: 0, account: '5-10001', name: 'Biaya Farmasi' },
    { id: 5, date: '2025-04-12', description: 'Pembayaran gaji karyawan', debit: 0, credit: 35000000, account: '1-10002', name: 'Bank' },
    { id: 6, date: '2025-04-12', description: 'Pembayaran gaji karyawan', debit: 35000000, credit: 0, account: '6-10001', name: 'Beban Gaji' },
    { id: 7, date: '2025-04-13', description: 'Pendapatan layanan laboratorium', debit: 4250000, credit: 0, account: '1-10001', name: 'Kas' },
    { id: 8, date: '2025-04-13', description: 'Pendapatan layanan laboratorium', debit: 0, credit: 4250000, account: '4-10003', name: 'Pendapatan Laboratorium' },
  ];

  const dummyLedgerAccounts = [
    { id: '1-10001', name: 'Kas', category: 'Aset', balance: 5000000 },
    { id: '1-10002', name: 'Bank', category: 'Aset', balance: 15000000 },
    { id: '2-10001', name: 'Hutang Dagang', category: 'Kewajiban', balance: 3500000 },
    { id: '3-10001', name: 'Modal', category: 'Ekuitas', balance: 25000000 },
    { id: '4-10001', name: 'Pendapatan Rawat Inap', category: 'Pendapatan', balance: 12500000 },
    { id: '4-10002', name: 'Pendapatan Rawat Jalan', category: 'Pendapatan', balance: 7500000 },
    { id: '4-10003', name: 'Pendapatan Laboratorium', category: 'Pendapatan', balance: 4250000 },
    { id: '5-10001', name: 'Biaya Farmasi', category: 'Biaya', balance: 1750000 },
    { id: '6-10001', name: 'Beban Gaji', category: 'Beban', balance: 35000000 },
  ];

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Akuntansi Umum</h1>
          <NewJournalEntryDialog />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Aset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                <div className="text-2xl font-bold">Rp 24.725.600.000</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Pendapatan (Bulan Ini)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold">Rp 1.457.300.000</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Pengeluaran (Bulan Ini)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calculator className="h-5 w-5 text-red-500 mr-2" />
                <div className="text-2xl font-bold">Rp 876.150.000</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="journal">
          <TabsList className="mb-6">
            <TabsTrigger value="journal">Jurnal</TabsTrigger>
            <TabsTrigger value="ledger">Buku Besar</TabsTrigger>
            <TabsTrigger value="balance">Neraca</TabsTrigger>
            <TabsTrigger value="income">Laba Rugi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="journal">
            <Card>
              <CardHeader>
                <CardTitle>Jurnal Transaksi</CardTitle>
              </CardHeader>
              <CardContent>
                <JournalSearch />
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Keterangan</TableHead>
                      <TableHead>Akun</TableHead>
                      <TableHead className="text-right">Debit</TableHead>
                      <TableHead className="text-right">Kredit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyJournals.map((journal) => (
                      <TableRow key={journal.id}>
                        <TableCell>{journal.date}</TableCell>
                        <TableCell>{journal.description}</TableCell>
                        <TableCell>
                          <div>{journal.account}</div>
                          <div className="text-xs text-gray-500">{journal.name}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          {journal.debit > 0 ? `Rp ${journal.debit.toLocaleString('id-ID')}` : '-'}
                        </TableCell>
                        <TableCell className="text-right">
                          {journal.credit > 0 ? `Rp ${journal.credit.toLocaleString('id-ID')}` : '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">
                    Menampilkan 8 dari 120 transaksi
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Sebelumnya
                    </Button>
                    <Button variant="outline" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Selanjutnya
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ledger">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Daftar Akun */}
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Daftar Akun</CardTitle>
                  <div className="relative mt-2">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Cari akun..." className="pl-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Daftar Kategori dan Akun */}
                  <div className="space-y-1 font-medium p-4 border-b">
                    <div className="text-blue-600">Aset</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">1-10001 - Kas</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">1-10002 - Bank</div>
                  </div>
                  <div className="space-y-1 font-medium p-4 border-b">
                    <div className="text-blue-600">Kewajiban</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">2-10001 - Hutang Dagang</div>
                  </div>
                  <div className="space-y-1 font-medium p-4 border-b">
                    <div className="text-blue-600">Ekuitas</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">3-10001 - Modal</div>
                  </div>
                  <div className="space-y-1 font-medium p-4 border-b">
                    <div className="text-blue-600">Pendapatan</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">4-10001 - Pendapatan Rawat Inap</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">4-10002 - Pendapatan Rawat Jalan</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">4-10003 - Pendapatan Laboratorium</div>
                  </div>
                  <div className="space-y-1 font-medium p-4 border-b">
                    <div className="text-blue-600">Biaya</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded">5-10001 - Biaya Farmasi</div>
                  </div>
                  <div className="space-y-1 font-medium p-4">
                    <div className="text-blue-600">Beban</div>
                    <div className="pl-4 py-1 hover:bg-blue-50 cursor-pointer rounded bg-blue-50">6-10001 - Beban Gaji</div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Detail Buku Besar */}
              <Card className="md:col-span-3">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>6-10001 - Beban Gaji</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">Kategori: Beban</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">Saldo: Rp 35.000.000</div>
                    <p className="text-sm text-gray-500">Per 14 April 2025</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2 items-center">
                      <Label>Periode:</Label>
                      <Select defaultValue="this-month">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Pilih periode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="this-month">Bulan Ini</SelectItem>
                          <SelectItem value="last-month">Bulan Lalu</SelectItem>
                          <SelectItem value="this-quarter">Triwulan Ini</SelectItem>
                          <SelectItem value="this-year">Tahun Ini</SelectItem>
                          <SelectItem value="custom">Kustom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Referensi</TableHead>
                        <TableHead>Keterangan</TableHead>
                        <TableHead className="text-right">Debit</TableHead>
                        <TableHead className="text-right">Kredit</TableHead>
                        <TableHead className="text-right">Saldo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-gray-500 font-medium" colSpan={5}>Saldo Awal</TableCell>
                        <TableCell className="text-right">Rp 0</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-04-12</TableCell>
                        <TableCell>JV-2025-04-002</TableCell>
                        <TableCell>Pembayaran gaji karyawan</TableCell>
                        <TableCell className="text-right">Rp 35.000.000</TableCell>
                        <TableCell className="text-right">-</TableCell>
                        <TableCell className="text-right">Rp 35.000.000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-gray-500 font-medium" colSpan={5}>Total</TableCell>
                        <TableCell className="text-right font-bold">Rp 35.000.000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="balance">
            <Card>
              <CardHeader className="flex justify-between items-start">
                <div>
                  <CardTitle>Neraca</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Per 14 April 2025</p>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="april-2025">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="april-2025">April 2025</SelectItem>
                      <SelectItem value="march-2025">Maret 2025</SelectItem>
                      <SelectItem value="february-2025">Februari 2025</SelectItem>
                      <SelectItem value="january-2025">Januari 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* ASET */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-600">ASET</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-2">Aset Lancar</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-1">
                          <span>Kas</span>
                          <span>Rp 5.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Bank</span>
                          <span>Rp 15.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Piutang</span>
                          <span>Rp 8.500.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Persediaan</span>
                          <span>Rp 12.750.000</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total Aset Lancar</span>
                          <span>Rp 41.250.000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-2">Aset Tetap</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-1">
                          <span>Gedung dan Bangunan</span>
                          <span>Rp 18.500.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Peralatan Medis</span>
                          <span>Rp 5.750.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Kendaraan</span>
                          <span>Rp 425.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Akumulasi Penyusutan</span>
                          <span>(Rp 3.750.000.000)</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total Aset Tetap</span>
                          <span>Rp 20.925.000.000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="font-bold text-lg border-t border-blue-600 pt-2 mt-4">
                      <div className="flex justify-between text-blue-600">
                        <span>TOTAL ASET</span>
                        <span>Rp 20.966.250.000</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* KEWAJIBAN & EKUITAS */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-600">KEWAJIBAN & EKUITAS</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-2">Kewajiban Lancar</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-1">
                          <span>Hutang Dagang</span>
                          <span>Rp 3.500.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Hutang Gaji</span>
                          <span>Rp 0</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total Kewajiban Lancar</span>
                          <span>Rp 3.500.000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-2">Kewajiban Jangka Panjang</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-1">
                          <span>Hutang Bank</span>
                          <span>Rp 2.500.000.000</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total Kewajiban Jangka Panjang</span>
                          <span>Rp 2.500.000.000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-md font-semibold mb-2">Ekuitas</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-1">
                          <span>Modal</span>
                          <span>Rp 17.892.500.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Laba Ditahan</span>
                          <span>Rp 250.000.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Laba Periode Berjalan</span>
                          <span>Rp 320.250.000</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total Ekuitas</span>
                          <span>Rp 18.462.750.000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="font-bold text-lg border-t border-blue-600 pt-2 mt-4">
                      <div className="flex justify-between text-blue-600">
                        <span>TOTAL KEWAJIBAN & EKUITAS</span>
                        <span>Rp 20.966.250.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="income">
            <Card>
              <CardHeader className="flex justify-between items-start">
                <div>
                  <CardTitle>Laporan Laba Rugi</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">1 April 2025 - 14 April 2025</p>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="april-2025">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih periode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="april-2025">April 2025</SelectItem>
                      <SelectItem value="march-2025">Maret 2025</SelectItem>
                      <SelectItem value="q1-2025">Q1 2025</SelectItem>
                      <SelectItem value="2025">Tahun 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 max-w-3xl mx-auto">
                  {/* Pendapatan */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-600">PENDAPATAN</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Rawat Inap</span>
                        <span>Rp 1.250.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Rawat Jalan</span>
                        <span>Rp 750.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Laboratorium</span>
                        <span>Rp 425.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Farmasi</span>
                        <span>Rp 278.500.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Lain-lain</span>
                        <span>Rp 55.000.000</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Pendapatan</span>
                        <span>Rp 2.758.500.000</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Biaya Operasional */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-600">BIAYA OPERASIONAL</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Gaji & Tenaga Kerja</span>
                        <span>Rp 1.350.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Farmasi & Medical Supplies</span>
                        <span>Rp 625.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Pemeliharaan</span>
                        <span>Rp 125.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Utilitas</span>
                        <span>Rp 85.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Administrasi</span>
                        <span>Rp 45.000.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Operasional Lainnya</span>
                        <span>Rp 65.000.000</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Biaya Operasional</span>
                        <span>Rp 2.295.000.000</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pendapatan Operasional */}
                  <div>
                    <div className="flex justify-between font-semibold border-t border-b py-2">
                      <span>LABA OPERASIONAL</span>
                      <span>Rp 463.500.000</span>
                    </div>
                  </div>
                  
                  {/* Pendapatan & Biaya Lain */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-600">PENDAPATAN & BIAYA LAIN</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between border-b pb-1">
                        <span>Pendapatan Bunga</span>
                        <span>Rp 12.500.000</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Biaya Bunga</span>
                        <span>(Rp 37.500.000)</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Pendapatan & Biaya Lain</span>
                        <span>(Rp 25.000.000)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laba Sebelum Pajak */}
                  <div>
                    <div className="flex justify-between font-semibold border-t border-b py-2">
                      <span>LABA SEBELUM PAJAK</span>
                      <span>Rp 438.500.000</span>
                    </div>
                  </div>
                  
                  {/* Pajak */}
                  <div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Pajak Penghasilan (22%)</span>
                      <span>(Rp 96.470.000)</span>
                    </div>
                  </div>
                  
                  {/* Laba Bersih */}
                  <div>
                    <div className="flex justify-between font-bold text-lg border-t border-blue-600 pt-2 text-blue-600">
                      <span>LABA BERSIH</span>
                      <span>Rp 342.030.000</span>
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

export default Accounting;