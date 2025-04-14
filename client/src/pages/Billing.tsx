import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, CreditCard, Receipt } from "lucide-react";
import { Input } from "@/components/ui/input";

const Billing = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
          <Button>
            <Receipt className="mr-2 h-4 w-4" />
            Buat Tagihan Baru
          </Button>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Tagihan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari tagihan berdasarkan No. RM atau Nama Pasien"
                  className="pl-8"
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="unpaid">
          <TabsList className="mb-6">
            <TabsTrigger value="unpaid">Belum Dibayar</TabsTrigger>
            <TabsTrigger value="paid">Sudah Dibayar</TabsTrigger>
            <TabsTrigger value="insurance">Asuransi/BPJS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="unpaid">
            <Card>
              <CardHeader>
                <CardTitle>Tagihan Belum Dibayar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada tagihan yang belum dibayar</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua tagihan sudah diselesaikan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="paid">
            <Card>
              <CardHeader>
                <CardTitle>Tagihan Sudah Dibayar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Belum ada tagihan yang dibayar hari ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <CardTitle>Tagihan Asuransi/BPJS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada tagihan asuransi yang perlu diproses
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Billing;
