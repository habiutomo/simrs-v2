
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Physiotherapy = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Rehabilitasi Medik (Fisioterapi)</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah Jadwal Terapi
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pencarian Jadwal Terapi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari berdasarkan nama pasien atau nomor RM"
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="scheduled">
          <TabsList className="mb-6">
            <TabsTrigger value="scheduled">Terjadwal</TabsTrigger>
            <TabsTrigger value="in-progress">Sedang Terapi</TabsTrigger>
            <TabsTrigger value="completed">Selesai</TabsTrigger>
          </TabsList>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Jadwal Terapi</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal & Waktu</TableHead>
                      <TableHead>No. RM</TableHead>
                      <TableHead>Nama Pasien</TableHead>
                      <TableHead>Jenis Terapi</TableHead>
                      <TableHead>Terapis</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>12 Feb 2024 09:00</TableCell>
                      <TableCell>RM-2024-001</TableCell>
                      <TableCell>Ahmad Yani</TableCell>
                      <TableCell>Terapi Okupasi</TableCell>
                      <TableCell>Dr. Sari</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                          Terjadwal
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Physiotherapy;
