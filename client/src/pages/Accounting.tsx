import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, DollarSign, Calculator, BarChart2 } from "lucide-react";

const Accounting = () => {
  const dummyJournals = [
    { id: 1, date: '2025-04-10', description: 'Pembayaran rawat inap pasien HR-1023', debit: 2500000, credit: 0, account: '1-10001' },
    { id: 2, date: '2025-04-10', description: 'Pembayaran rawat inap pasien HR-1023', debit: 0, credit: 2500000, account: '4-10001' },
    { id: 3, date: '2025-04-11', description: 'Pembelian obat apotek', debit: 0, credit: 1750000, account: '1-10001' },
    { id: 4, date: '2025-04-11', description: 'Pembelian obat apotek', debit: 1750000, credit: 0, account: '5-10001' },
  ];

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Akuntansi Umum</h1>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Buat Jurnal Baru
          </Button>
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
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Keterangan</TableHead>
                      <TableHead>Kode Akun</TableHead>
                      <TableHead className="text-right">Debit</TableHead>
                      <TableHead className="text-right">Kredit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyJournals.map((journal) => (
                      <TableRow key={journal.id}>
                        <TableCell>{journal.date}</TableCell>
                        <TableCell>{journal.description}</TableCell>
                        <TableCell>{journal.account}</TableCell>
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
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ledger">
            <Card>
              <CardHeader>
                <CardTitle>Buku Besar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Silahkan pilih akun untuk melihat detail buku besar
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="balance">
            <Card>
              <CardHeader>
                <CardTitle>Neraca</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Laporan neraca belum tersedia untuk periode ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="income">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Laba Rugi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Laporan laba rugi belum tersedia untuk periode ini
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