import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart,
  ClipboardCheck, 
  PackageCheck, 
  Receipt, 
  Search,
  Filter,
  Plus,
  FileUp,
  Download,
  Eye,
  Building2,
  Calendar,
  BarChart,
  FileText,
  Truck,
  Pencil,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  DollarSign,
  Users
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

// Komponen dialog Create PR
const CreatePRDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ClipboardCheck className="mr-2 h-4 w-4" />
          Buat PR
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Buat Purchase Request Baru</DialogTitle>
          <DialogDescription>
            Silahkan isi informasi untuk pembuatan permintaan pembelian.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="pr-number">No. PR</Label>
              <Input id="pr-number" value="PR-2025-0043" disabled />
              <p className="text-sm text-gray-500 mt-1">Nomor PR digenerate otomatis</p>
            </div>
            
            <div>
              <Label htmlFor="pr-date">Tanggal PR</Label>
              <Input id="pr-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
            </div>
            
            <div>
              <Label htmlFor="pr-department">Departemen</Label>
              <Select>
                <SelectTrigger id="pr-department">
                  <SelectValue placeholder="Pilih departemen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmasi">Farmasi</SelectItem>
                  <SelectItem value="laboratorium">Laboratorium</SelectItem>
                  <SelectItem value="radiologi">Radiologi</SelectItem>
                  <SelectItem value="icu">ICU</SelectItem>
                  <SelectItem value="ugd">UGD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="pr-requester">Pemohon</Label>
              <Input id="pr-requester" placeholder="Nama pemohon" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="pr-priority">Prioritas</Label>
              <Select>
                <SelectTrigger id="pr-priority">
                  <SelectValue placeholder="Pilih prioritas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="pr-required-date">Tanggal Dibutuhkan</Label>
              <Input id="pr-required-date" type="date" />
            </div>
            
            <div>
              <Label htmlFor="pr-notes">Catatan</Label>
              <Input id="pr-notes" placeholder="Catatan tambahan (opsional)" />
            </div>
            
            <div>
              <Label htmlFor="pr-attachment">Lampiran</Label>
              <div className="flex gap-2 mt-1">
                <Input id="pr-attachment" type="file" className="w-full" />
                <Button variant="outline" size="icon">
                  <FileUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Label>Item Permintaan</Label>
          <div className="rounded-md border mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Satuan</TableHead>
                  <TableHead>Catatan Item</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Input placeholder="Nama item" />
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" min="1" className="w-20" />
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Satuan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="box">Box</SelectItem>
                        <SelectItem value="pcs">Pcs</SelectItem>
                        <SelectItem value="unit">Unit</SelectItem>
                        <SelectItem value="botol">Botol</SelectItem>
                        <SelectItem value="roll">Roll</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Catatan khusus" />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Input placeholder="Nama item" />
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" min="1" className="w-20" />
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Satuan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="box">Box</SelectItem>
                        <SelectItem value="pcs">Pcs</SelectItem>
                        <SelectItem value="unit">Unit</SelectItem>
                        <SelectItem value="botol">Botol</SelectItem>
                        <SelectItem value="roll">Roll</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Catatan khusus" />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <Button variant="outline" className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Item
          </Button>
        </div>
        
        <DialogFooter className="mt-6">
          <Button variant="outline">Simpan Draft</Button>
          <Button>Kirim PR</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Komponen dialog Create PO
const CreatePODialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buat PO
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Buat Purchase Order Baru</DialogTitle>
          <DialogDescription>
            Silahkan isi informasi untuk pembuatan Purchase Order baru.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="po-number">No. PO</Label>
              <Input id="po-number" value="PO-2025-0102" disabled />
              <p className="text-sm text-gray-500 mt-1">Nomor PO digenerate otomatis</p>
            </div>
            
            <div>
              <Label htmlFor="po-date">Tanggal PO</Label>
              <Input id="po-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
            </div>
            
            <div>
              <Label htmlFor="po-vendor">Supplier</Label>
              <Select>
                <SelectTrigger id="po-vendor">
                  <SelectValue placeholder="Pilih supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-meditama">PT Meditama</SelectItem>
                  <SelectItem value="cv-medika-utama">CV Medika Utama</SelectItem>
                  <SelectItem value="pt-farma-abadi">PT Farma Abadi</SelectItem>
                  <SelectItem value="cv-alkes-prima">CV Alkes Prima</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="po-delivery-date">Tanggal Pengiriman</Label>
              <Input id="po-delivery-date" type="date" />
            </div>
            
            <div>
              <Label htmlFor="po-department">Departemen Tujuan</Label>
              <Select>
                <SelectTrigger id="po-department">
                  <SelectValue placeholder="Pilih departemen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmasi">Farmasi</SelectItem>
                  <SelectItem value="laboratorium">Laboratorium</SelectItem>
                  <SelectItem value="radiologi">Radiologi</SelectItem>
                  <SelectItem value="icu">ICU</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="po-reference">Referensi PR</Label>
              <Select>
                <SelectTrigger id="po-reference">
                  <SelectValue placeholder="Pilih Purchase Request" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PR-2025-0042">PR-2025-0042 - Farmasi</SelectItem>
                  <SelectItem value="PR-2025-0041">PR-2025-0041 - Laboratorium</SelectItem>
                  <SelectItem value="PR-2025-0040">PR-2025-0040 - Radiologi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="po-payment-terms">Syarat Pembayaran</Label>
              <Select defaultValue="14-days">
                <SelectTrigger id="po-payment-terms">
                  <SelectValue placeholder="Pilih syarat pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cod">Cash On Delivery</SelectItem>
                  <SelectItem value="7-days">Net 7 Days</SelectItem>
                  <SelectItem value="14-days">Net 14 Days</SelectItem>
                  <SelectItem value="30-days">Net 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="po-shipping-method">Metode Pengiriman</Label>
              <Select>
                <SelectTrigger id="po-shipping-method">
                  <SelectValue placeholder="Pilih metode pengiriman" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor-delivery">Pengiriman oleh Supplier</SelectItem>
                  <SelectItem value="pickup">Diambil Sendiri</SelectItem>
                  <SelectItem value="3rd-party">Kurir Pihak Ketiga</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="po-notes">Catatan</Label>
              <Input id="po-notes" placeholder="Catatan tambahan (opsional)" />
            </div>
            
            <div>
              <Label htmlFor="po-attachment">Lampiran</Label>
              <div className="flex gap-2 mt-1">
                <Input id="po-attachment" type="file" className="w-full" />
                <Button variant="outline" size="icon">
                  <FileUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Label>Item Purchase Order</Label>
          <div className="rounded-md border mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Satuan</TableHead>
                  <TableHead>Harga Satuan (Rp)</TableHead>
                  <TableHead>Subtotal (Rp)</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Input placeholder="Nama item" />
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" min="1" className="w-20" />
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Satuan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="box">Box</SelectItem>
                        <SelectItem value="pcs">Pcs</SelectItem>
                        <SelectItem value="unit">Unit</SelectItem>
                        <SelectItem value="botol">Botol</SelectItem>
                        <SelectItem value="roll">Roll</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="0" min="0" />
                  </TableCell>
                  <TableCell>
                    <Input value="0" disabled />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Input placeholder="Nama item" />
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" min="1" className="w-20" />
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Satuan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="box">Box</SelectItem>
                        <SelectItem value="pcs">Pcs</SelectItem>
                        <SelectItem value="unit">Unit</SelectItem>
                        <SelectItem value="botol">Botol</SelectItem>
                        <SelectItem value="roll">Roll</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="0" min="0" />
                  </TableCell>
                  <TableCell>
                    <Input value="0" disabled />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Item
            </Button>
            <div className="space-y-2 text-right">
              <div className="flex justify-end gap-4">
                <span className="font-medium">Subtotal:</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-end gap-4">
                <span className="font-medium">PPN (11%):</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-end gap-4 text-lg font-bold">
                <span>Total:</span>
                <span>Rp 0</span>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-6">
          <Button variant="outline">Simpan Draft</Button>
          <Button>Kirim PO</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

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
            <CreatePRDialog />
            <CreatePODialog />
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