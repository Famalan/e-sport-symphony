import { createClient } from '@supabase/supabase-js';

// Используем тестовые значения для разработки
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseAnonKey = 'public-anon-key';

// Выводим предупреждение, если не настроены переменные окружения
console.warn('Пожалуйста, настройте подключение к Supabase через меню Supabase в правом верхнем углу.');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);