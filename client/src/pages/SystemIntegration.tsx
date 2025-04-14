import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RefreshCw, Zap, Database, Settings, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Konfigurasi
            </Button>
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </Button>
          </div>
        </div>

        <Tabs defaultValue="status" className="mb-6">
          <TabsList>
            <TabsTrigger value="status">Status Integrasi</TabsTrigger>
            <TabsTrigger value="config">Konfigurasi</TabsTrigger>
            <TabsTrigger value="logs">Log Aktivitas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="status">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Integrasi Eksternal</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <IntegrationStatus name="BPJS Kesehatan" connected={true} />
                  <IntegrationStatus name="BPJS Ketenagakerjaan" connected={false} />
                  <IntegrationStatus name="Sistem Rujukan Nasional" connected={true} />
                  <IntegrationStatus name="Kementerian Kesehatan" connected={false} />
                  <IntegrationStatus name="Kementerian Kesehatan" connected={false} />
                  <IntegrationStatus name="Prudential" connected={false} />
                  <IntegrationStatus name="Allianz" connected={false} />
                  <IntegrationStatus name="AXA Insurance" connected={false} />
                  <IntegrationStatus name="Cigna" connected={false} />
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
          </TabsContent>
          
          <TabsContent value="config">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Konfigurasi Asuransi</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="bpjs">
                    <TabsList className="mb-4">
                      <TabsTrigger value="bpjs">BPJS</TabsTrigger>
                      <TabsTrigger value="prudential">Prudential</TabsTrigger>
                      <TabsTrigger value="allianz">Allianz</TabsTrigger>
                      <TabsTrigger value="axa">AXA</TabsTrigger>
                      <TabsTrigger value="cigna">Cigna</TabsTrigger>
                    </TabsList>

                    <TabsContent value="bpjs">
                      <div className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="bpjs-consumer-id">Consumer ID</Label>
                          <Input id="bpjs-consumer-id" placeholder="Masukkan Consumer ID BPJS" defaultValue="xxxxxxxxxxx" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="bpjs-consumer-secret">Consumer Secret</Label>
                          <Input id="bpjs-consumer-secret" type="password" placeholder="Masukkan Consumer Secret BPJS" defaultValue="••••••••••••" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="bpjs-url">URL Endpoint</Label>
                          <Input id="bpjs-url" placeholder="URL API BPJS" defaultValue="https://api.bpjs-kesehatan.go.id/vclaim" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="bpjs-active" defaultChecked />
                          <Label htmlFor="bpjs-active">Aktifkan Integrasi</Label>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="prudential">
                      <div className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="prudential-api-key">API Key</Label>
                          <Input id="prudential-api-key" placeholder="Masukkan API Key Prudential" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="prudential-secret">API Secret</Label>
                          <Input id="prudential-secret" type="password" placeholder="Masukkan API Secret Prudential" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="prudential-url">URL Endpoint</Label>
                          <Input id="prudential-url" placeholder="URL API Prudential" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="prudential-active" />
                          <Label htmlFor="prudential-active">Aktifkan Integrasi</Label>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="allianz">
                      <div className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="allianz-client-id">Client ID</Label>
                          <Input id="allianz-client-id" placeholder="Masukkan Client ID Allianz" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="allianz-client-secret">Client Secret</Label>
                          <Input id="allianz-client-secret" type="password" placeholder="Masukkan Client Secret Allianz" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="allianz-url">URL Endpoint</Label>
                          <Input id="allianz-url" placeholder="URL API Allianz" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="allianz-active" />
                          <Label htmlFor="allianz-active">Aktifkan Integrasi</Label>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="axa">
                      <div className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="axa-api-key">API Key</Label>
                          <Input id="axa-api-key" placeholder="Masukkan API Key AXA" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="axa-api-secret">API Secret</Label>
                          <Input id="axa-api-secret" type="password" placeholder="Masukkan API Secret AXA" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="axa-url">URL Endpoint</Label>
                          <Input id="axa-url" placeholder="URL API AXA" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="axa-active" />
                          <Label htmlFor="axa-active">Aktifkan Integrasi</Label>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="cigna">
                      <div className="space-y-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="cigna-client-id">Client ID</Label>
                          <Input id="cigna-client-id" placeholder="Masukkan Client ID Cigna" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="cigna-client-secret">Client Secret</Label>
                          <Input id="cigna-client-secret" type="password" placeholder="Masukkan Client Secret Cigna" />
                        </div>
                        
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="cigna-url">URL Endpoint</Label>
                          <Input id="cigna-url" placeholder="URL API Cigna" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="cigna-active" />
                          <Label htmlFor="cigna-active">Aktifkan Integrasi</Label>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>CMS Properti</CardTitle>
                  <Button onClick={() => window.open('/cms/properties', '_blank')} variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Buka CMS
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="cms-api-key">API Key</Label>
                      <Input id="cms-api-key" placeholder="Masukkan API Key CMS" />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="cms-url">URL Endpoint</Label>
                      <Input id="cms-url" placeholder="URL API CMS" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="cms-active" />
                      <Label htmlFor="cms-active">Aktifkan Integrasi CMS</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Konfigurasi Sistem Rujukan Nasional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="sisrute-api-key">API Key</Label>
                      <Input id="sisrute-api-key" placeholder="Masukkan API Key Sisrute" defaultValue="xxxxxxxxxxx" />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="sisrute-url">URL Endpoint</Label>
                      <Input id="sisrute-url" placeholder="URL API Sisrute" defaultValue="https://api.sisrute.kemkes.go.id/v1" />
                    </div>
                    
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="kode-ppk">Kode PPK</Label>
                      <Input id="kode-ppk" placeholder="Kode PPK Rumah Sakit" defaultValue="R3200123" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="sisrute-active" defaultChecked />
                      <Label htmlFor="sisrute-active">Aktifkan Integrasi</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="md:col-span-2 flex justify-end">
                <Button className="mt-4">
                  <Save className="mr-2 h-4 w-4" />
                  Simpan Konfigurasi
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="logs">
            <Card className="mt-6">
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
                  
                  <div className="p-4 bg-yellow-50 text-yellow-700 rounded-md">
                    <p className="text-sm font-medium">Konfigurasi BPJS Kesehatan diperbarui</p>
                    <p className="text-xs text-yellow-600 mt-1">1 hari yang lalu</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    <p className="text-sm font-medium">Pengiriman data laporan regulasi RL 1.2 berhasil</p>
                    <p className="text-xs text-green-600 mt-1">1 hari yang lalu</p>
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

export default SystemIntegration;
