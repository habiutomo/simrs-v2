import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Beaker } from "lucide-react";

const Laboratory = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Laboratorium</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Permintaan Baru
          </Button>
        </div>
        
        <Tabs defaultValue="pending">
          <TabsList className="mb-6">
            <TabsTrigger value="pending">Permintaan Baru</TabsTrigger>
            <TabsTrigger value="processing">Dalam Proses</TabsTrigger>
            <TabsTrigger value="completed">Hasil Selesai</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Permintaan Pemeriksaan Baru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Beaker className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada permintaan baru</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua permintaan pemeriksaan sudah diproses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="processing">
            <Card>
              <CardHeader>
                <CardTitle>Pemeriksaan Dalam Proses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada pemeriksaan yang sedang diproses
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Hasil Pemeriksaan Selesai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Belum ada hasil pemeriksaan yang selesai hari ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Laboratory;
