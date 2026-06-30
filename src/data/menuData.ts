export interface PriceVariant {
  label: string;
  price: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  variants?: PriceVariant[];
  notes?: string;
  category?: string;
  separatorType?: 'divider' | 'none';
}

export const menuData: MenuItem[] = [
  // Birria Orden
  {
    id: 'birria-orden-chivo',
    name: 'Birria de Chivo',
    price: '$190',
    notes: 'Seca o Consomé. Acompañada c/Frijoles Puercos o Arroz.',
    category: 'Birria',
    separatorType: 'none'
  },
  {
    id: 'birria-orden-res',
    name: 'Birria de Res',
    price: '$150',
    notes: 'Seca o Consomé. Acompañada c/Frijoles Puercos o Arroz.',
    category: 'Birria',
    separatorType: 'none'
  },
  {
    id: 'birria-orden-puerco',
    name: 'Birria de Puerco',
    price: '$110',
    notes: 'Seca o Consomé. Acompañada c/Frijoles Puercos o Arroz.',
    category: 'Birria',
    separatorType: 'none'
  },
  {
    id: 'birria-orden-pollo',
    name: 'Birria de Pollo',
    price: '$100',
    notes: 'Seca o Consomé. Acompañada c/Frijoles Puercos o Arroz.',
    category: 'Birria',
    separatorType: 'divider'
  },

  // Acompañamientos
  {
    id: 'acompanamiento-frijoles',
    name: 'Orden Frijoles Puercos',
    price: '$100',
    description: '(4 personas)',
    category: 'Acompañamientos',
    separatorType: 'none'
  },
  {
    id: 'acompanamiento-arroz',
    name: 'Orden Arroz',
    price: '$60',
    description: '(4 personas)',
    category: 'Acompañamientos',
    separatorType: 'none'
  },
  {
    id: 'chamorros-puerco-media',
    name: 'Chamorros de Puerco (Media orden)',
    price: '$95',
    notes: 'c/Arroz o Frijoles Puercos',
    category: 'Chamorros',
    separatorType: 'none'
  },
  {
    id: 'chamorros-puerco-completa',
    name: 'Chamorros de Puerco (Orden completa)',
    price: '$150',
    notes: 'c/Arroz o Frijoles Puercos',
    category: 'Chamorros',
    separatorType: 'divider'
  },

  // Quesa birria
  {
    id: 'quesa-birria',
    name: 'Quesa birria',
    price: '$120',
    description: 'Orden de 3pzs, c/consomé',
    notes: 'Carne a elegir: Chivo, Res, Puerco, y Pollo',
    category: 'Quesa Birria',
    separatorType: 'none'
  },
  {
    id: 'torta',
    name: 'Torta',
    price: '$60',
    description: 'Birria, Chivo, Res, Puerco, y Pollo',
    category: 'Antojitos',
    separatorType: 'none'
  },
  {
    id: 'burrito',
    name: 'Burrito',
    price: '$60',
    description: 'Birria, Chivo, Res, Puerco y Pollo',
    category: 'Antojitos',
    separatorType: 'none'
  },

  // Complementos
  {
    id: 'comp-quesadilla',
    name: 'Quesadillas Blanditas',
    price: '$30',
    category: 'Complementos',
    separatorType: 'none'
  },
  {
    id: 'comp-taco-cabeza',
    name: 'Taco de Cabeza c/u',
    price: '$20',
    category: 'Complementos',
    separatorType: 'none'
  },
  {
    id: 'comp-consome-chico',
    name: 'Consomé chico',
    price: '$10',
    category: 'Complementos',
    separatorType: 'none'
  },
  {
    id: 'comp-consome-grande',
    name: 'Consomé Grande',
    price: '$20',
    category: 'Complementos',
    separatorType: 'divider'
  },

  // Birria Kilo
  {
    id: 'birria-kilo-chivo',
    name: 'Birria de Chivo (Kilo)',
    price: '$700',
    notes: 'Se entrega con cebolla, limón, chile y Consome.',
    category: 'Birria Kilo',
    separatorType: 'none'
  },
  {
    id: 'birria-kilo-res',
    name: 'Birria de Res (Kilo)',
    price: '$370',
    notes: 'Se entrega con cebolla, limón, chile y Consome.',
    category: 'Birria Kilo',
    separatorType: 'none'
  },
  {
    id: 'birria-kilo-puerco',
    name: 'Birria de Puerco (Kilo)',
    price: '$250',
    notes: 'Se entrega con cebolla, limón, chile y Consome.',
    category: 'Birria Kilo',
    separatorType: 'none'
  },
  {
    id: 'birria-kilo-pollo',
    name: 'Birria de Pollo (Kilo)',
    price: '$220',
    notes: 'Se entrega con cebolla, limón, chile y Consome.',
    category: 'Birria Kilo',
    separatorType: 'divider'
  },

  // Tostadas Raspadas
  {
    id: 'tostadas-1-carne',
    name: 'Tostadas Raspadas (1 Carne)',
    variants: [
      { label: 'M', price: '$60' },
      { label: 'G', price: '$70' }
    ],
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tostadas Raspadas',
    separatorType: 'none'
  },
  {
    id: 'tostadas-2-carnes',
    name: 'Tostadas Raspadas (2 Carnes)',
    variants: [
      { label: 'M', price: '$70' },
      { label: 'G', price: '$80' }
    ],
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tostadas Raspadas',
    separatorType: 'none'
  },
  {
    id: 'tostadas-3-carnes',
    name: 'Tostadas Raspadas (3 Carnes)',
    variants: [
      { label: 'M', price: '$80' },
      { label: 'G', price: '$90' }
    ],
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tostadas Raspadas',
    separatorType: 'none'
  },
  {
    id: 'tostadas-4-carnes',
    name: 'Tostadas Raspadas (4 Carnes)',
    variants: [
      { label: 'M', price: '$90' },
      { label: 'G', price: '$100' }
    ],
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tostadas Raspadas',
    separatorType: 'none'
  },
  {
    id: 'tostadas-campechana',
    name: 'Tostadas Raspadas (Campechana)',
    variants: [
      { label: 'M', price: '$110' },
      { label: 'G', price: '$130' }
    ],
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tostadas Raspadas',
    separatorType: 'divider'
  },

  // Tacos Dorados Raspados
  {
    id: 'tacos-dorados-pollo',
    name: 'Tacos Dorados Raspados (Pollo)',
    price: '$25 c/u',
    category: 'Tacos Dorados',
    separatorType: 'none'
  },
  {
    id: 'tacos-dorados-papa',
    name: 'Tacos Dorados Raspados (Papa)',
    price: '$25 c/u',
    category: 'Tacos Dorados',
    separatorType: 'none'
  },
  {
    id: 'tacos-dorados-carne',
    name: 'Tacos Dorados Raspados (Con carne)',
    price: '$35 c/u',
    notes: 'Carnes a elegir: Trompa, Cuero, Pata, Hígado, Lengua, Todo Cerdo. (Incluye Repollo, Cebolla, Jitomate, Queso, Salsas Dulce o Salada.)',
    category: 'Tacos Dorados',
    separatorType: 'divider'
  },

  // Bebidas - Tequila
  {
    id: 'tequila-1800',
    name: '1800 Cristalino',
    price: '$150',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-don-julio',
    name: 'Don Julio 70',
    price: '$180',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-maestro-dobel',
    name: 'Maestro Dobel',
    price: '$190',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-centenario-plata',
    name: 'Centenario Plata',
    price: '$70',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-centenario-reposado',
    name: 'Centenario Reposado',
    price: '$70',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-centenario-anejo',
    name: 'Centenario Añejo',
    price: '$130',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-herradura-reposado',
    name: 'Herradura Reposado',
    price: '$130',
    category: 'Tequila',
    separatorType: 'none'
  },
  {
    id: 'tequila-herradura-anejo',
    name: 'Herradura Añejo',
    price: '$200',
    category: 'Tequila',
    separatorType: 'divider'
  },

  // Bebidas - Ron
  {
    id: 'ron-bacardi-blanco',
    name: 'Bacardi Blanco',
    price: '$80',
    category: 'Ron',
    separatorType: 'none'
  },
  {
    id: 'ron-bacardi-solera',
    name: 'Bacardi Solera',
    price: '$70',
    category: 'Ron',
    separatorType: 'divider'
  },

  // Bebidas - Brandy
  {
    id: 'brandy-torres-10',
    name: 'Torres 10',
    price: '$70',
    category: 'Brandy',
    separatorType: 'none'
  },
  {
    id: 'brandy-torres-15',
    name: 'Torres 15',
    price: '$100',
    category: 'Brandy',
    separatorType: 'divider'
  },

  // Bebidas - Vodka
  {
    id: 'vodka-absolut',
    name: 'Absolut',
    price: '$60',
    category: 'Vodka',
    separatorType: 'none'
  },
  {
    id: 'vodka-smirnoff',
    name: 'Smirnoff',
    price: '$50',
    category: 'Vodka',
    separatorType: 'divider'
  },

  // Bebidas - Cognac
  {
    id: 'cognac-martell',
    name: 'Martell VSOP',
    price: '$180',
    category: 'Cognac',
    separatorType: 'none'
  },
  {
    id: 'cognac-hennessy',
    name: 'Hennessey',
    price: '$180',
    category: 'Cognac',
    separatorType: 'divider'
  },

  // Bebidas - Mezcal
  {
    id: 'mezcal-400-conejos',
    name: '400 Conejos',
    price: '$80',
    category: 'Mezcal',
    separatorType: 'none'
  },
  {
    id: 'mezcal-monte-lobos',
    name: 'Monte Lobos',
    price: '$100',
    category: 'Mezcal',
    separatorType: 'divider'
  },

  // Bebidas - Whisky
  {
    id: 'whisky-buchanans',
    name: 'Buchanans',
    price: '$150',
    category: 'Whisky',
    separatorType: 'none'
  },
  {
    id: 'whisky-chivas',
    name: 'Chivas',
    price: '$140',
    category: 'Whisky',
    separatorType: 'none'
  },
];
