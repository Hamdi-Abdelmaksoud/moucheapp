'use server';
import cloudinary from '@/lib/cloudinary';
import { supabase } from '@/lib/supabaseClient';
import { writeFile, unlink } from 'fs/promises';
import { randomUUID } from 'crypto';
import { redirect } from 'next/navigation';
import os from 'os';
import path from 'path';

export async function addPhoto(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const file = formData.get('image');
  const categoryId = formData.get('category_id');

  if (!file || !title || !description || !categoryId) {
    throw new Error('Champs manquants');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, `${randomUUID()}-${file.name}`);
  await writeFile(filePath, buffer);

  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'moucheapp',
  });

  await unlink(filePath);

  const { error } = await supabase.from('photos').insert([
    {
      title,
      description,
      url: result.secure_url,
      category_id: Number(categoryId),
    },
  ]);

  if (error) {
    console.error('Erreur Supabase :', error);
    throw new Error('Erreur enregistrement');
  }

  redirect('/admin');
}
