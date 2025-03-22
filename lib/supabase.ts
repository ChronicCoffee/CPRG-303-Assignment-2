
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://caailgyvpzdiujoojrqk.supabase.co'; // Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhYWlsZ3l2cHpkaXVqb29qcnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MTU3MTksImV4cCI6MjA1ODE5MTcxOX0.4pejlGLchwyW-VXe4oBXml5Re0Q8AQ1IHYjKdlYPBQY'; // Supabase API Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
