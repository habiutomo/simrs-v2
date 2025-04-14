import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  ClipboardCheck, 
  PackageCheck, 
  Receipt, 
  Search 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Procurement = () => {
  const dummyPurchaseRequests = [
    { 
      id: 'PR-2025-0042', 
      date: '2025-04-12', 
      department: 'Farmasi', 
      items: 12, 
      status: 'pending', 
      requestor: 'Dr. Anisa'
    },
    { 
      id: 'PR-2025-0041', 
      date: '2025-04-10', 
      department: 'Laboratorium', 
      items: 5, 
      status: 'approved', 
      requestor: 'Dr. Budi'
    },
    { 
      id: 'PR-2025-0040', 
      date: '2025-04-08', 
      department: 'Radiologi', 
      items: 2, 
      status: 'completed', 
      requestor: 'Dr. Citra'
    },
  ];

  const dummyPurchaseOrders = [
    { 
      id: 'PO-2025-0101', 
      date: '2025-04-11', 
      supplier: 'PT Meditama', 
      items: 5, 
      status: 'ordered', 
      value: 12500000
    },
    { 
      id: 'PO-2025-0100', 
      date: '2025-04-06', 
      supplier: 'CV Medika Utama', 
      items: 8, 
      status: 'received', 
      value: 8750000
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      ordered: 'bg-purple-100 text-purple-800',
      received: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
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
          <h1 className="text-2xl font-bold text-gray-900">Pembelian & Pengadaan</h1>
          <div className="flex space-x-2">
            <Button variant="outline">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Buat PR
            </Button>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buat PO
            </Button>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Dokumen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari PR, PO, Penerimaan atau Invoice"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="pr">
          <TabsList className="mb-6">
            <TabsTrigger value="pr">Permintaan Barang (PR)</TabsTrigger>
            <TabsTrigger value="po">Purchase Order (PO)</TabsTrigger>
            <TabsTrigger value="grn">Penerimaan Barang</TabsTrigger>
            <TabsTrigger value="invoice">Invoice & Pembayaran</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pr">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Permintaan Pembelian (PR)</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No. PR</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Jumlah Item</TableHead>
                      <TableHead>Pemohon</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyPurchaseRequests.map((pr) => (
                      <TableRow key={pr.id}>
                        <TableCell className="font-medium">{pr.id}</TableCell>
                        <TableCell>{pr.date}</TableCell>
                        <TableCell>{pr.department}</TableCell>
                        <TableCell>{pr.items}</TableCell>
                        <TableCell>{pr.requestor}</TableCell>
                        <TableCell>{getStatusBadge(pr.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="po">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Purchase Order (PO)</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No. PO</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Jumlah Item</TableHead>
                      <TableHead>Nilai PO</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyPurchaseOrders.map((po) => (
                      <TableRow key={po.id}>
                        <TableCell className="font-medium">{po.id}</TableCell>
                        <TableCell>{po.date}</TableCell>
                        <TableCell>{po.supplier}</TableCell>
                        <TableCell>{po.items}</TableCell>
                        <TableCell>Rp {po.value.toLocaleString('id-ID')}</TableCell>
                        <TableCell>{getStatusBadge(po.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="grn">
            <Card>
              <CardHeader>
                <CardTitle>Penerimaan Barang (GRN)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PackageCheck className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada penerimaan barang terbaru</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua barang telah diterima, atau tidak ada pesanan baru.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="invoice">
            <Card>
              <CardHeader>
                <CardTitle>Invoice & Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Receipt className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada invoice yang menunggu</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua invoice telah dibayar atau belum ada invoice baru.
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

export default Procurement;