import PhotoForm from './PhotoForm';
import { fetchCategories } from '@/lib/actions/fetch';

export default async function AddData() {
  const categories = await fetchCategories();

  return <PhotoForm categories={categories} />;
}
