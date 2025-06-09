'use server';
import cloudinary from '@/lib/cloudinary';
import { supabase } from '@/lib/supabaseClient';
import { writeFile, unlink } from 'fs/promises';
import { randomUUID } from 'crypto';
import { redirect } from 'next/navigation';
import os from 'os';
import path from 'path';

export async function addService(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const file = formData.get('image'); // 👈 input name="image"

  if (!file || !title || !description) {
    throw new Error('Champs manquants');
  }

  // Convertir le fichier en buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Chemin temporaire
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, `${randomUUID()}-${file.name}`);
  await writeFile(filePath, buffer);

  // Upload vers Cloudinary
  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'moucheapp/services', // tu peux adapter le dossier ici
  });

  // Nettoyage du fichier temporaire
  await unlink(filePath);

  // Enregistrement dans la table services
  const { error } = await supabase.from('services').insert([
    {
      title,
      description,
      url: result.secure_url,
    },
  ]);

  if (error) {
    console.error('Erreur Supabase :', error);
    throw new Error('Erreur enregistrement');
  }

  redirect('/admin');
}
