'use client';

import { addPhoto } from '@/lib/actions/addPhoto';

export default function PhotoForm({ categories }) {
  return (
    <form action={addPhoto} className='mt-28'>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="image">Photo</label>
      <input type="file" id="image" name="image" accept="image/png, image/jpeg" required />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" required />

      <label htmlFor="category">Catégorie</label>
      <select id="category" name="category_id" required>
        <option value="">-- Choisissez une catégorie --</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <button type="submit">Ajouter</button>
    </form>
  );
}
