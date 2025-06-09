import { supabase } from '@/lib/supabaseClient';

export async function fetchCategories() {
  const { data: categories, error } = await supabase.from('categories').select('*').order('name');

  if (error) {
    console.error('Erreur fetching categories:', error);
    return [];
  }

  return categories || [];
}
export async function getPics(param) {
  const { data: photos, error } = await supabase
    .from('photos')
    .select('*, categories(name)')
    .eq('categories.name', param)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Erreur lors du chargement des photos:', error);
    return [];
  }

  return photos;
}
export async function getServices() {
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
  if (error) {
    console.error('Erreur lors du chargement des services:', error);
    return [];
  }

  return services;
}

