import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, PackageOpen, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

const Pharmacy = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Farmasi</h1>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Lihat Stok Obat
          </Button>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Resep</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari resep berdasarkan Nomor RM atau Nama Pasien"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="pending">
          <TabsList className="mb-6">
            <TabsTrigger value="pending">Menunggu</TabsTrigger>
            <TabsTrigger value="prepared">Disiapkan</TabsTrigger>
            <TabsTrigger value="completed">Diserahkan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Resep Menunggu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PackageOpen className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada resep yang menunggu</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua resep sudah ditangani.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="prepared">
            <Card>
              <CardHeader>
                <CardTitle>Resep Disiapkan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada resep yang sedang disiapkan
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Resep Diserahkan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Belum ada resep yang diserahkan hari ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Pharmacy;
