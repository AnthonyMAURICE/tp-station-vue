import { reactive } from 'vue'

export const fuels = reactive ([
    {
        id: 0,
        name: 'Gasoil',
        liters: 10000,
        pricePerLiter : 1.879
    },
    {
        id: 1,
        name: 'SP95',
        liters: 10000,
        pricePerLiter : 1.959
    },
    {
        id: 2,
        name: 'SP98',
        liters: 10000,
        pricePerLiter : 1.997
    },
    {
        id: 3,
        name: 'E85',
        liters: 10000,
        pricePerLiter : 1.637
    },
    {
        id: 4,
        name: 'GPL',
        liters: 10000,
        pricePerLiter : 1.327
    }
])