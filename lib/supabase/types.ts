export type Database = {
  public: {
    Tables: {
      cotizaciones: {
        Row: {
          id: string;
          nombre: string;
          comuna: string;
          lugar: string;
          medidas: string;
          mensaje: string | null;
          telefono: string | null;
          origen: 'web' | 'whatsapp' | 'admin';
          estado: 'nueva' | 'contactada' | 'agendada' | 'cerrada' | 'perdida';
          created_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          comuna: string;
          lugar: string;
          medidas: string;
          mensaje?: string | null;
          telefono?: string | null;
          origen?: 'web' | 'whatsapp' | 'admin';
          estado?: 'nueva' | 'contactada' | 'agendada' | 'cerrada' | 'perdida';
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['cotizaciones']['Insert']>;
      };
    };
  };
};
