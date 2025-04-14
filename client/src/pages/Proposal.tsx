
import React from 'react';
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const generateProposal = () => {
  const doc = new jsPDF();
  const lineHeight = 7;
  let y = 20;

  // Letterhead
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('PT CLOUD SYSTEM INDONESIA', 20, y);
  
  y += lineHeight * 2;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Jl. Teknologi No. 123, Palembang', 20, y);
  
  y += lineHeight;
  doc.text('Email: info@cloudsystem.co.id', 20, y);
  doc.text('Tel: (0711) 123456', 20, y + lineHeight);

  // Date
  y += lineHeight * 3;
  const date = new Date().toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  doc.text(date, 20, y);

  // Recipient
  y += lineHeight * 2;
  doc.text('Kepada Yth,', 20, y);
  y += lineHeight;
  doc.text('Direktur Rumah Sakit Pusri', 20, y);
  y += lineHeight;
  doc.text('Palembang', 20, y);

  // Subject
  y += lineHeight * 2;
  doc.setFont('helvetica', 'bold');
  doc.text('Perihal: Penawaran Sistem Informasi Manajemen Rumah Sakit (SIMRS)', 20, y);

  // Content
  y += lineHeight * 2;
  doc.setFont('helvetica', 'normal');
  const content = [
    'Dengan hormat,',
    '',
    'Bersama surat ini kami sampaikan penawaran Sistem Informasi Manajemen Rumah Sakit (SIMRS) dengan spesifikasi sebagai berikut:',
    '',
    '1. Modul-modul yang tersedia:',
    '   - Pendaftaran & Registrasi Pasien',
    '   - Rawat Jalan & Rawat Inap',
    '   - Farmasi & Inventory',
    '   - Laboratorium & Radiologi',
    '   - Billing & Keuangan',
    '   - Kepegawaian & Penggajian',
    '   - Pelaporan & Analitik',
    '',
    '2. Fitur unggulan:',
    '   - Terintegrasi dengan BPJS Kesehatan',
    '   - Sistem Antrian Digital',
    '   - Dashboard Analitik Real-time',
    '   - Backup Data Otomatis',
    '',
    '3. Layanan yang disediakan:',
    '   - Instalasi & Setup System',
    '   - Training Staff',
    '   - Maintenance & Support 24/7',
    '   - Update System Berkala',
    '',
    'Nilai investasi yang kami tawarkan: Rp. 450.000.000',
    'Termasuk lisensi perpetual dan maintenance selama 1 tahun.',
    '',
    'Demikian penawaran ini kami sampaikan. Kami berharap dapat berkontribusi dalam pengembangan sistem informasi RS Pusri Palembang.',
    '',
    'Hormat kami,',
    '',
    'Direktur PT Cloud System Indonesia'
  ];

  doc.setFontSize(10);
  content.forEach(text => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(text, 20, y);
    y += lineHeight;
  });

  doc.save('Penawaran-SIMRS-RS-Pusri.pdf');
};

const ProposalPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Generator Dokumen Penawaran</h1>
      <Button onClick={generateProposal}>
        <FileText className="mr-2 h-4 w-4" />
        Generate Penawaran SIMRS
      </Button>
    </div>
  );
};

export default ProposalPage;
