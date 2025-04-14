
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CalendarDays, ClipboardList, ActivitySquare } from "lucide-react";

const Rehabilitation = () => {
  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Rehabilitasi Medik (Fisioterapi)</h1>
        
        <Tabs defaultValue="schedule" className="space-y-4">
          <TabsList>
            <TabsTrigger value="schedule">
              <CalendarDays className="h-4 w-4 mr-2" />
              Jadwal Terapi
            </TabsTrigger>
            <TabsTrigger value="treatment">
              <ClipboardList className="h-4 w-4 mr-2" />
              Catatan Tindakan
            </TabsTrigger>
            <TabsTrigger value="evaluation">
              <ActivitySquare className="h-4 w-4 mr-2" />
              Evaluasi Pasien
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Jadwal Terapi Hari Ini</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Waktu</TableHead>
                      <TableHead>Nama Pasien</TableHead>
                      <TableHead>Jenis Terapi</TableHead>
                      <TableHead>Terapis</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>08:00</TableCell>
                      <TableCell>Ahmad Yani</TableCell>
                      <TableCell>Terapi Stroke</TableCell>
                      <TableCell>Dr. Sari</TableCell>
                      <TableCell>Menunggu</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Detail</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treatment">
            <Card>
              <CardHeader>
                <CardTitle>Catatan Tindakan Terapi</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Pasien</TableHead>
                      <TableHead>Tindakan</TableHead>
                      <TableHead>Catatan</TableHead>
                      <TableHead>Terapis</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-17</TableCell>
                      <TableCell>Ahmad Yani</TableCell>
                      <TableCell>Terapi Stroke</TableCell>
                      <TableCell>Pasien menunjukkan kemajuan</TableCell>
                      <TableCell>Dr. Sari</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Detail</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evaluation">
            <Card>
              <CardHeader>
                <CardTitle>Evaluasi Kondisi Pasien</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Pasien</TableHead>
                      <TableHead>Kondisi</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Rekomendasi</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-17</TableCell>
                      <TableCell>Ahmad Yani</TableCell>
                      <TableCell>Stabil</TableCell>
                      <TableCell>75%</TableCell>
                      <TableCell>Lanjutkan terapi 2x seminggu</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Detail</Button>
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

export default Rehabilitation;
