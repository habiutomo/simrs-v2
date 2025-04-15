
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Physiotherapy = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Rehabilitasi Medik (Fisioterapi)</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Tambah Jadwal Terapi
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tambah Jadwal Terapi</DialogTitle>
                <DialogDescription>
                  Buat jadwal terapi baru untuk pasien
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Pasien
                  </Label>
                  <Input
                    id="name"
                    placeholder="Cari nama pasien"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="therapy" className="text-right">
                    Jenis Terapi
                  </Label>
                  <select className="col-span-3 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Pilih jenis terapi</option>
                    <option value="okupasi">Terapi Okupasi</option>
                    <option value="fisik">Terapi Fisik</option>
                    <option value="wicara">Terapi Wicara</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Tanggal
                  </Label>
                  <Input
                    type="datetime-local"
                    id="date"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="therapist" className="text-right">
                    Terapis
                  </Label>
                  <select className="col-span-3 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Pilih terapis</option>
                    <option value="1">Dr. Sari</option>
                    <option value="2">Dr. Budi</option>
                    <option value="3">Dr. Andi</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="notes" className="text-right">
                    Catatan
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Tambahkan catatan jika diperlukan"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Simpan Jadwal</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          Sedang Terapi
                        </span>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Detail
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Detail Terapi</DialogTitle>
                              <DialogDescription>
                                Informasi lengkap jadwal terapi
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Pasien:</Label>
                                <div className="col-span-3">Ahmad Yani</div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">  
                                <Label className="text-right font-medium">No. RM:</Label>
                                <div className="col-span-3">RM-2024-001</div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Jadwal:</Label>
                                <div className="col-span-3">12 Feb 2024 09:00</div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Jenis:</Label>
                                <div className="col-span-3">Terapi Okupasi</div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Terapis:</Label>
                                <div className="col-span-3">Dr. Sari</div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Status:</Label>
                                <div className="col-span-3">
                                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                                    Terjadwal
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Catatan:</Label>
                                <div className="col-span-3">Pasien perlu latihan motorik halus</div>
                              </div>
                            </div>
                            <DialogFooter>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" type="button">
                                    Edit Jadwal
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Edit Jadwal Terapi</DialogTitle>
                                    <DialogDescription>
                                      Ubah jadwal terapi pasien
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="date" className="text-right">
                                        Tanggal
                                      </Label>
                                      <Input
                                        type="datetime-local"
                                        id="date"
                                        defaultValue="2024-02-12T09:00"
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="therapist" className="text-right">
                                        Terapis
                                      </Label>
                                      <select className="col-span-3 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors">
                                        <option value="1">Dr. Sari</option>
                                        <option value="2">Dr. Budi</option>
                                        <option value="3">Dr. Andi</option>
                                      </select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="notes" className="text-right">
                                        Catatan
                                      </Label>
                                      <Textarea
                                        id="notes"
                                        defaultValue="Pasien perlu latihan motorik halus"
                                        className="col-span-3"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button type="submit">Simpan Perubahan</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button type="button">
                                    Mulai Terapi
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Mulai Sesi Terapi</DialogTitle>
                                    <DialogDescription>
                                      Konfirmasi untuk memulai sesi terapi
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <p className="text-sm text-gray-500">
                                      Anda akan memulai sesi terapi untuk:
                                    </p>
                                    <div className="mt-2 space-y-2">
                                      <p className="text-sm"><span className="font-medium">Pasien:</span> Ahmad Yani</p>
                                      <p className="text-sm"><span className="font-medium">Jenis Terapi:</span> Terapi Okupasi</p>
                                      <p className="text-sm"><span className="font-medium">Terapis:</span> Dr. Sari</p>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline" type="button" onClick={() => {
                                      // Handle close dialog
                                    }}>
                                      Batal
                                    </Button>
                                    <Button type="submit" onClick={() => {
                                      // Handle session start
                                      const updatedRow = {
                                        status: "in-progress",
                                        startTime: new Date().toISOString()
                                      };
                                      // Update status in table
                                      // Close dialog
                                    }}>
                                      Mulai Sesi
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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
