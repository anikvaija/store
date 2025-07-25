/**
 * Category data for different sections
 * Separated from components to avoid import conflicts
 */

export interface CategoryItem {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

export const mensCategories: CategoryItem[] = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    description: 'Casual and comfortable tees',
    icon: '/assets/men-catagerory--icon/t-shirts.png',
    count: 12
  },
  {
    id: 'polo-shirts',
    name: 'Polo Shirts',
    description: 'Classic polo shirts for smart casual look',
    icon: '/assets/men-catagerory--icon/polo.jpg',
    count: 8
  },
  {
    id: 'shirts',
    name: 'Shirts (Formal, Casual)',
    description: 'Classic and contemporary shirt styles',
    icon: '/assets/men-catagerory--icon/shirts-formal-casual.jpg',
    count: 15
  },
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    description: 'Comfortable hoodies and sweatshirts',
    icon: '/assets/men-catagerory--icon/hoodies-sweatshirts.png',
    count: 10
  },
  {
    id: 'jackets',
    name: 'Jackets & Coats',
    description: 'Premium jackets and coats for every season',
    icon: '/assets/men-catagerory--icon/jackets-coats.jpg',
    count: 14
  },
  {
    id: 'sweaters',
    name: 'Sweaters & Cardigans',
    description: 'Warm and stylish knitwear',
    icon: '/assets/men-catagerory--icon/sweaters-cardigans.jpg',
    count: 9
  },
  {
    id: 'jeans',
    name: 'Jeans',
    description: 'Premium denim jeans collection',
    icon: '/assets/men-catagerory--icon/jeans.jpg',
    count: 18
  },
  {
    id: 'trousers',
    name: 'Trousers',
    description: 'Formal and casual trousers',
    icon: '/assets/men-catagerory--icon/trousers.jpg',
    count: 16
  },
  {
    id: 'shorts',
    name: 'Shorts',
    description: 'Comfortable shorts for casual wear',
    icon: '/assets/men-catagerory--icon/shorts.png',
    count: 11
  },
  {
    id: 'cargo-pants',
    name: 'Cargo Pants',
    description: 'Functional and stylish cargo pants',
    icon: '/assets/men-catagerory--icon/cargo-pants.jpg',
    count: 7
  },
  {
    id: 'undergarments',
    name: 'Undergarments',
    description: 'Essential undergarments and basics',
    icon: '/assets/men-catagerory--icon/undergarments.png',
    count: 20
  }
]

export const womensCategories: CategoryItem[] = [
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    description: 'Comfortable and stylish hoodies for casual wear',
    icon: '/assets/women/Hoodies & Sweatshirts.jpg',
    count: 8
  },
  {
    id: 'sweaters',
    name: 'Sweaters & Cardigans',
    description: 'Elegant knitwear for sophisticated style',
    icon: '/assets/women/Sweaters & Cardigans.png',
    count: 6
  },
  {
    id: 'tops',
    name: 'Tops & Blouses',
    description: 'Feminine tops and elegant blouses',
    icon: '/assets/women/Tops.jpg',
    count: 12
  },
  {
    id: 'tunics',
    name: 'Tunics & Kurtis',
    description: 'Traditional and contemporary tunics',
    icon: '/assets/women/Tunics & Kurtis.jpg',
    count: 9
  },
  {
    id: 'shorts',
    name: 'Shorts',
    description: 'Comfortable shorts for casual and active wear',
    icon: '/assets/women/Shorts.jpg',
    count: 7
  },
  {
    id: 'bras',
    name: 'Bras & Lingerie',
    description: 'Essential undergarments and intimate wear',
    icon: '/assets/women/Bras.png',
    count: 15
  },
  {
    id: 'panties',
    name: 'Panties & Underwear',
    description: 'Comfortable and stylish underwear collection',
    icon: '/assets/women/Panties.jpg',
    count: 18
  }
]

export const kidsCategories: CategoryItem[] = [
  {
    id: 't-shirts',
    name: 'Kids T-Shirts',
    description: 'Fun and comfortable t-shirts for kids',
    icon: '/assets/men-catagerory--icon/t-shirts.png',
    count: 15
  },
  {
    id: 'hoodies',
    name: 'Kids Hoodies & Sweatshirts',
    description: 'Cozy hoodies and sweatshirts for little ones',
    icon: '/assets/men-catagerory--icon/hoodies-sweatshirts.png',
    count: 12
  },
  {
    id: 'jeans',
    name: 'Kids Jeans',
    description: 'Durable and stylish jeans for active kids',
    icon: '/assets/men-catagerory--icon/jeans.jpg',
    count: 10
  },
  {
    id: 'shorts',
    name: 'Kids Shorts',
    description: 'Comfortable shorts for play and casual wear',
    icon: '/assets/men-catagerory--icon/shorts.png',
    count: 8
  },
  {
    id: 'dresses',
    name: 'Kids Dresses',
    description: 'Beautiful dresses for special occasions',
    icon: '/assets/men-catagerory--icon/polo.jpg',
    count: 9
  },
  {
    id: 'jackets',
    name: 'Kids Jackets & Coats',
    description: 'Warm and stylish outerwear for kids',
    icon: '/assets/men-catagerory--icon/jackets-coats.jpg',
    count: 7
  },
  {
    id: 'accessories',
    name: 'Kids Accessories',
    description: 'Fashion accessories for stylish kids',
    icon: '/assets/men-catagerory--icon/sweaters-cardigans.jpg',
    count: 6
  }
]