import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type CartItem = {
  productId: number
  name: string
  price: number
  image_url: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (productId: number) => void
  setQuantity: (productId: number, quantity: number) => void
  clear: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, quantity = 1) => {
        const q = Math.max(1, Math.floor(quantity))
        const items = get().items
        const existing = items.find((x) => x.productId === item.productId)
        if (existing) {
          set({
            items: items.map((x) =>
              x.productId === item.productId
                ? { ...x, quantity: x.quantity + q }
                : x
            ),
          })
          return
        }
        set({ items: [...items, { ...item, quantity: q }] })
      },
      removeItem: (productId) =>
        set({ items: get().items.filter((x) => x.productId !== productId) }),
      setQuantity: (productId, quantity) => {
        const q = Math.max(1, Math.floor(quantity))
        set({
          items: get().items.map((x) =>
            x.productId === productId ? { ...x, quantity: q } : x
          ),
        })
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "handcraft_cart_v1",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export function getCartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.quantity, 0)
}

export function getCartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0)
}

