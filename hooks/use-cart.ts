"use client";
import {create} from 'zustand';
import {Product} from '@/types';
import {persist, createJSONStorage} from 'zustand/middleware';
import toast from 'react-hot-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) =>({
    items: [],

    addItem: (data: Product) => {
      const currentiItems = get().items;
      const existingItem = currentiItems.find(item => item.id === data.id);

      if (existingItem) {
        return toast("Item alredy in cart.");
      }
      set({items: [...get().items, data]});
      toast.success("Item added to cart.");
    },

    removeItem: (id: string) => {
      const items = get().items;
      set({items: [...get().items.filter((item) => item.id !== id)]});
      toast.success("Item removed from cart.");
    },
    removeAll: () => {
      set({items: []});
    }
  }), {
    name: 'cart-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // use localStorage
  }))


export default useCart;