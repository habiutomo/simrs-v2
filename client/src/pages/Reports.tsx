import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart as BarChartIcon, Download, FileText } from "lucide-react";

const Reports = () => {
  const dummyVisitData = [
    { name: "Jan", count: 120 },
    { name: "Feb", count: 135 },
    { name: "Mar", count: 143 },
    { name: "Apr", count: 127 },
    { name: "May", count: 132 },
    { name: "Jun", count: 143 },
  ];

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Laporan
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Jenis Laporan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Kategori</h3>
                <Select defaultValue="patient">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Pasien</SelectItem>
                    <SelectItem value="finance">Keuangan</SelectItem>
                    <SelectItem value="operation">Operasional</SelectItem>
                    <SelectItem value="pharmacy">Farmasi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Periode</h3>
                <Select defaultValue="month">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih periode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Harian</SelectItem>
                    <SelectItem value="week">Mingguan</SelectItem>
                    <SelectItem value="month">Bulanan</SelectItem>
                    <SelectItem value="quarter">Triwulan</SelectItem>
                    <SelectItem value="year">Tahunan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Format</h3>
                <Select defaultValue="pdf">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Generate Laporan
              </Button>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Kunjungan Pasien 6 Bulan Terakhir</CardTitle>
              <BarChartIcon className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dummyVisitData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#0078D4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Laporan Terakhir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              Belum ada laporan yang digenerate
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
