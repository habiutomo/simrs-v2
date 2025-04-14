import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Users } from "lucide-react";

const Outpatient = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Rawat Jalan</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Pendaftaran Baru
          </Button>
        </div>
        
        <Tabs defaultValue="waiting">
          <TabsList className="mb-6">
            <TabsTrigger value="waiting">Menunggu</TabsTrigger>
            <TabsTrigger value="in-progress">Sedang Ditangani</TabsTrigger>
            <TabsTrigger value="completed">Selesai</TabsTrigger>
          </TabsList>
          
          <TabsContent value="waiting">
            <Card>
              <CardHeader>
                <CardTitle>Pasien Menunggu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada pasien menunggu</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Semua pasien telah dilayani atau belum ada pendaftaran.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="in-progress">
            <Card>
              <CardHeader>
                <CardTitle>Pasien Sedang Ditangani</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Tidak ada pasien yang sedang ditangani
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Pasien Selesai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Belum ada pasien yang selesai hari ini
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Outpatient;
