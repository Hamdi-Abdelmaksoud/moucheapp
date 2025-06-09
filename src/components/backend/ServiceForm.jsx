'use client';
import { addService } from '@/lib/actions/addService';
export default function ServiceForm( ) {
  return (
    <form action={addService} className='mt-28'>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="image">Photo</label>
      <input type="file" id="image" name="image" accept="image/png, image/jpeg" required />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" required />
      <button type="submit">Ajouter</button>
    </form>
  );
}
