
import monstera from '../assets/plants/monstera.webp'
import lyrata from '../assets/plants/lyrata.webp'
import pothos from '../assets/plants/pothos.webp'
import succulent from '../assets/plants/succulent.webp'
import olive from '../assets/plants/olive.webp'
import basil from '../assets/plants/basil.webp'
import mint from '../assets/plants/mint.webp'
import calathea from '../assets/plants/calathea.webp'
import cactus from '../assets/plants/cactus.webp'

export const plantList = [
    {
        name: 'monstera',
        category: 'classic',
        id: '1ed',
        isBestSale: false,
        isSpecialOffer: false,
        light: 2,
        water: 3,
        cover: monstera,
        price: 15
    },
    {
        name: 'ficus lyrata',
        category: 'classic',
        id: '2ab',
        isBestSale: false,
        isSpecialOffer: false,
        light: 3,
        water: 1,
        cover: lyrata,
        price: 16
    },
    {
        name: 'silver pothos',
        category: 'classic',
        id: '3sd',
        isBestSale: true,
        isSpecialOffer: true,
        light: 1,
        water: 2,
        cover: pothos,
        price: 9
    },
    {
        name: 'yucca',
        category: 'classic',
        id: '4kk',
        isBestSale: false,
        isSpecialOffer: false,
        light: 3,
        water: 1,
        cover: calathea,
        price: 20
    },
    {
        name: 'olive tree',
        category: 'exterior',
        id: '5pl',
        isBestSale: false,
        isSpecialOffer: false,
        light: 3,
        water: 1,
        cover: olive,
        price: 25
    },
    {
        name: 'geranium',
        category: 'exterior',
        id: '6uo',
        isBestSale: true,
        isSpecialOffer: false,
        light: 2,
        water: 2,
        cover: cactus,
        price: 6
    },
    {
        name: 'basil',
        category: 'exterior',
        id: '7ie',
        isBestSale: false,
        isSpecialOffer: true,
        light: 2,
        water: 3,
        cover: basil,
        price: 5
    },
    {
        name: 'aloe',
        category: 'succulent',
        id: '8fp',
        isBestSale: true,
        isSpecialOffer: true,
        light: 2,
        water: 1,
        cover: mint,
        price: 8
    },
    {
        name: 'succulent',
        category: 'succulent',
        id: '9vn',
        isBestSale: false,
        isSpecialOffer: false,
        light: 2,
        water: 1,
        cover: succulent,
        price: 4
    }
]