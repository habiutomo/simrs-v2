import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Search, 
  PlusCircle, 
  Calendar, 
  Wrench, 
  Boxes,
  ArrowRight,
  FileUp
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// Komponen dialog untuk menambahkan aset baru
const AddAssetDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Aset Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Tambah Aset Baru</DialogTitle>
          <DialogDescription>
            Silahkan isi informasi untuk menambahkan aset baru ke dalam inventaris.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="asset-code">Kode Aset</Label>
              <Input id="asset-code" value="AST-MD-0125" disabled />
              <p className="text-sm text-gray-500 mt-1">Kode aset digenerate otomatis</p>
            </div>
            
            <div>
              <Label htmlFor="asset-name">Nama Aset</Label>
              <Input id="asset-name" placeholder="Nama aset" />
            </div>
            
            <div>
              <Label htmlFor="asset-category">Kategori</Label>
              <Select>
                <SelectTrigger id="asset-category">
                  <SelectValue placeholder="Pilih kategori aset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alat-medis">Alat Medis</SelectItem>
                  <SelectItem value="alat-non-medis">Alat Non-Medis</SelectItem>
                  <SelectItem value="kendaraan">Kendaraan</SelectItem>
                  <SelectItem value="gedung">Gedung & Bangunan</SelectItem>
                  <SelectItem value="tanah">Tanah</SelectItem>
                  <SelectItem value="komputer">Perangkat IT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="asset-brand">Merk/Model</Label>
              <Input id="asset-brand" placeholder="Merk/Model aset" />
            </div>
            
            <div>
              <Label htmlFor="asset-serial">Nomor Seri/IMEI</Label>
              <Input id="asset-serial" placeholder="Nomor seri/IMEI" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="asset-acquisition-date">Tanggal Perolehan</Label>
              <Input id="asset-acquisition-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
            </div>
            
            <div>
              <Label htmlFor="asset-acquisition-cost">Nilai Perolehan (Rp)</Label>
              <Input id="asset-acquisition-cost" type="number" min="0" />
            </div>
            
            <div>
              <Label htmlFor="asset-useful-life">Masa Manfaat (Tahun)</Label>
              <Input id="asset-useful-life" type="number" min="1" defaultValue="5" />
            </div>
            
            <div>
              <Label htmlFor="asset-location">Lokasi</Label>
              <Input id="asset-location" placeholder="Lokasi penempatan aset" />
            </div>
            
            <div>
              <Label htmlFor="asset-condition">Kondisi</Label>
              <Select defaultValue="good">
                <SelectTrigger id="asset-condition">
                  <SelectValue placeholder="Pilih kondisi aset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Baru</SelectItem>
                  <SelectItem value="good">Baik</SelectItem>
                  <SelectItem value="used">Bekas</SelectItem>
                  <SelectItem value="damaged">Rusak Ringan</SelectItem>
                  <SelectItem value="broken">Rusak Berat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-4">
          <div>
            <Label htmlFor="asset-description">Deskripsi/Spesifikasi</Label>
            <Textarea id="asset-description" placeholder="Deskripsi atau spesifikasi aset" rows={3} />
          </div>
          
          <div>
            <Label htmlFor="asset-attachment">Dokumen/Foto</Label>
            <div className="flex gap-2 mt-1">
              <Input id="asset-attachment" type="file" className="w-full" />
              <Button variant="outline" size="icon">
                <FileUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <Label>Informasi Penyusutan</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <Label htmlFor="asset-depreciation-method" className="text-xs">Metode Penyusutan</Label>
              <Select defaultValue="straight-line">
                <SelectTrigger id="asset-depreciation-method">
                  <SelectValue placeholder="Pilih metode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="straight-line">Garis Lurus</SelectItem>
                  <SelectItem value="double-declining">Double Declining</SelectItem>
                  <SelectItem value="sum-of-years">Sum of the Years' Digits</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="asset-salvage-value" className="text-xs">Nilai Residu (Rp)</Label>
              <Input id="asset-salvage-value" type="number" min="0" defaultValue="0" />
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-6">
          <Button variant="outline">Batal</Button>
          <Button>Simpan Aset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Inventory = () => {
  const dummyAssets = [
    {
      id: 'AST-MD-0123',
      name: 'MRI Scanner XL-2000',
      category: 'Alat Medis',
      location: 'Ruang Radiologi 02',
      acquisitionDate: '2023-05-15',
      acquisitionCost: 2750000000,
      currentValue: 2337500000,
      status: 'active'
    },
    {
      id: 'AST-MD-0124',
      name: 'ICU Bed Advanced Care',
      category: 'Alat Medis',
      location: 'ICU Room 03',
      acquisitionDate: '2023-10-22',
      acquisitionCost: 185000000,
      currentValue: 172050000,
      status: 'active'
    },
    {
      id: 'AST-VH-0056',
      name: 'Ambulance Toyota Hiace',
      category: 'Kendaraan',
      location: 'Parking Bay 01',
      acquisitionDate: '2022-08-10',
      acquisitionCost: 650000000,
      currentValue: 487500000,
      status: 'maintenance'
    }
  ];

  const dummyMaintenance = [
    {
      id: 'MNT-2025-0012',
      assetId: 'AST-VH-0056',
      assetName: 'Ambulance Toyota Hiace',
      scheduledDate: '2025-04-15',
      type: 'Regular Service',
      technician: 'PT Auto Service',
      status: 'scheduled'
    },
    {
      id: 'MNT-2025-0011',
      assetId: 'AST-MD-0123',
      assetName: 'MRI Scanner XL-2000',
      scheduledDate: '2025-04-25',
      type: 'Calibration',
      technician: 'PT Medika Engineering',
      status: 'scheduled'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
      disposed: 'bg-red-100 text-red-800',
      scheduled: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
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
          <h1 className="text-2xl font-bold text-gray-900">Inventaris & Aset Tetap</h1>
          <AddAssetDialog />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Aset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-blue-500 mr-2" />
                <div className="text-2xl font-bold">378 Unit</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Nilai Aset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 18.456.750.000</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Jadwal Pemeliharaan Bulan Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-amber-500 mr-2" />
                <div className="text-2xl font-bold">12 Jadwal</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Aset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari berdasarkan kode, nama, atau lokasi aset"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="assets">
          <TabsList className="mb-6">
            <TabsTrigger value="assets">Data Aset</TabsTrigger>
            <TabsTrigger value="maintenance">Jadwal Pemeliharaan</TabsTrigger>
            <TabsTrigger value="depreciation">Penyusutan</TabsTrigger>
            <TabsTrigger value="mutation">Mutasi Aset</TabsTrigger>
          </TabsList>
          
          <TabsContent value="assets">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Aset Tetap</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kode Aset</TableHead>
                      <TableHead>Nama Aset</TableHead>
                      <TableHead>Kategori</TableHead>
                      <TableHead>Lokasi</TableHead>
                      <TableHead>Nilai Aset</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyAssets.map((asset) => (
                      <TableRow key={asset.id}>
                        <TableCell className="font-medium">{asset.id}</TableCell>
                        <TableCell>{asset.name}</TableCell>
                        <TableCell>{asset.category}</TableCell>
                        <TableCell>{asset.location}</TableCell>
                        <TableCell>Rp {asset.currentValue.toLocaleString('id-ID')}</TableCell>
                        <TableCell>{getStatusBadge(asset.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Jadwal Pemeliharaan Aset</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Jadwal</TableHead>
                      <TableHead>Aset</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Jenis Pemeliharaan</TableHead>
                      <TableHead>Teknisi</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyMaintenance.map((schedule) => (
                      <TableRow key={schedule.id}>
                        <TableCell className="font-medium">{schedule.id}</TableCell>
                        <TableCell>
                          <div>{schedule.assetName}</div>
                          <div className="text-xs text-gray-500">{schedule.assetId}</div>
                        </TableCell>
                        <TableCell>{schedule.scheduledDate}</TableCell>
                        <TableCell>{schedule.type}</TableCell>
                        <TableCell>{schedule.technician}</TableCell>
                        <TableCell>{getStatusBadge(schedule.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="depreciation">
            <Card>
              <CardHeader>
                <CardTitle>Jadwal Penyusutan Aset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <ArrowRight className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Penyusutan Aset</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Silahkan pilih aset untuk melihat jadwal penyusutan
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mutation">
            <Card>
              <CardHeader>
                <CardTitle>Mutasi & Penghapusan Aset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Boxes className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada mutasi aset terbaru</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Belum ada mutasi atau penghapusan aset yang tercatat
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

export default Inventory;