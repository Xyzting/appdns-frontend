export interface Students {
  id: number;
  nomor_induk: string;
  nama: string;
  alamat: string;
  tanggal_lahir: Date;
  created_at: Date;
  grades: {
    nilai: number;
    jenis_nilai: string;
  }[];
}

export interface PayloadStudents {
  id?: number;
  nomor_induk: string;
  nama: string;
  alamat: string;
  tanggal_lahir: string;
}