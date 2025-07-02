// src/lib/api.ts
export async function fetchUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
