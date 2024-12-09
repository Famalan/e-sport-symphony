import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          role: 'admin' | 'organizer' | 'player';
          created_at: string;
          updated_at: string;
        };
      };
      tournaments: {
        Row: {
          id: string;
          name: string;
          type: 'single' | 'double' | 'round';
          rules: string;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
      };
      teams: {
        Row: {
          id: string;
          name: string;
          captain_id: string;
          created_at: string;
          updated_at: string;
        };
      };
      players: {
        Row: {
          id: string;
          user_id: string;
          team_id: string;
        };
      };
      matches: {
        Row: {
          id: string;
          tournament_id: string;
          team1_id: string;
          team2_id: string;
          score_team1: number;
          score_team2: number;
          start_time: string;
          end_time: string;
        };
      };
      bracket: {
        Row: {
          id: string;
          tournament_id: string;
          match_id: string;
          round: number;
          position: number;
        };
      };
      backup: {
        Row: {
          id: string;
          file_path: string;
          created_by: string;
          created_at: string;
        };
      };
    };
  };
};