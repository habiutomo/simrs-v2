import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RefreshCw, Zap, Database } from "lucide-react";

const IntegrationStatus = ({ name, connected }: { name: string; connected: boolean }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <Database className="h-5 w-5 mr-3 text-gray-400" />
        <span>{name}</span>
      </div>
      {connected ? (
        <div className="flex items-center text-green-600">
          <Check className="h-5 w-5 mr-1" />
          <span>Terhubung</span>
        </div>
      ) : (
        <div className="flex items-center text-red-600">
          <X className="h-5 w-5 mr-1" />
          <span>Terputus</span>
        </div>
      )}
    </div>
  );
};

const SystemIntegration = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Integrasi Sistem</h1>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrasi Eksternal</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <IntegrationStatus name="BPJS Kesehatan" connected={true} />
              <IntegrationStatus name="BPJS Ketenagakerjaan" connected={false} />
              <IntegrationStatus name="Sistem Rujukan Nasional" connected={true} />
              <IntegrationStatus name="Kementerian Kesehatan" connected={false} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Integrasi Internal</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <IntegrationStatus name="Sistem Keuangan" connected={true} />
              <IntegrationStatus name="Sistem Inventaris" connected={true} />
              <IntegrationStatus name="Sistem Kepegawaian" connected={true} />
              <IntegrationStatus name="Sistem Gudang" connected={true} />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Log Aktivitas Integrasi</CardTitle>
            <Zap className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                <p className="text-sm font-medium">Sinkronisasi dengan BPJS Kesehatan berhasil</p>
                <p className="text-xs text-green-600 mt-1">2 jam yang lalu</p>
              </div>
              
              <div className="p-4 bg-blue-50 text-blue-700 rounded-md">
                <p className="text-sm font-medium">Data kunjungan pasien berhasil dikirim ke Sistem Rujukan Nasional</p>
                <p className="text-xs text-blue-600 mt-1">4 jam yang lalu</p>
              </div>
              
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                <p className="text-sm font-medium">Gagal terhubung dengan BPJS Ketenagakerjaan</p>
                <p className="text-xs text-red-600 mt-1">5 jam yang lalu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemIntegration;
