// lib/api.ts

// =======================
// Tipuri TypeScript
// =======================
export interface Store {
  id: string
  name: string
  description: string
  // adaugă câmpurile relevante din admin
}

export interface Bilboard {
  id: string
  title: string
  imageUrl: string
  // adaugă câmpuri suplimentare dacă e nevoie
}

// =======================
// URL admin
// =======================
const ADMIN_URL = 'http://localhost:3001'

// =======================
// Fetch store by storeId
// =======================
export const getStore = async (storeId: string): Promise<Store> => {
  try {
    const res = await fetch(`${ADMIN_URL}/api/${storeId}`)
    if (!res.ok) throw new Error(`Failed to fetch store ${storeId}`)
    const data: Store = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

// =======================
// Fetch bilboard by bilboardId
// =======================
export const getBilboard = async (bilboardId: string): Promise<Bilboard> => {
  try {
    const res = await fetch(`${ADMIN_URL}/api/bilboards/${bilboardId}`)
    if (!res.ok) throw new Error(`Failed to fetch bilboard ${bilboardId}`)
    const data: Bilboard = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

