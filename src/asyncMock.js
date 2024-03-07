const products = [
    {
        id: "1",
        name: "CATAN",
        price: 100,
        category: "juegoMesa",
        img: "https://diadejuegos.com/10782-large_default/catan.jpg",
        stock: 25,
        description: "En Catan, los jugadores intentan ser la fuerza dominante en la isla de Catan mediante la construcción de asentamientos, ciudades y carreteras. En cada turno se lanzan los dados para determinar qué recursos produce la isla. Los jugadores recolectan estos recursos (cartas) —madera, trigo, ladrillo, oveja o piedra con el fin de construir sus civilizaciones para llegar a 10 puntos de victoria y ganar el juego.",
    },
    {
        id: "2",
        name: "ALQUIMISTAS",
        price: 139,
        category: "juegoMesa",
        img: "https://diadejuegos.com/299-large_default/alquimistas.jpg",
        stock: 16,
        description: "A lo largo de 6 rondas, los jugadores, convertidos en alquimistas, intentarán ganar prestigio descubrliendo las propiedades mágicas de sus ingredientes. Podrán transmutar materia, comprar artefactos, refutar teorías o beber pociones para demostrar sus grandes conocimiento.",
    },
    {
        id: "3",
        name: "ELDRITCH HORROR",
        price: 120,
        category: "juegoMesa",
        img: "https://diadejuegos.com/102-large_default/eldritch-horror.jpg",
        stock: 5,
        description: "El mundo está al borde de la catástrofe. Estamos en 1926 y un ser de increíble poder amenaza con despertar de su largo letargo trayendo muerte y destrucción. Extrañas sectas y terribles monstruos siembran el caos en todos los continentes mientras el tejido de la realidad se desgarra, abriendo portales a extraños mundos.",
    },
    {
        id: "4",
        name: "Puzzle 1000 pzs OESTERLE Rocket Launch",
        price: 80,
        category: "rompecabezas",
        img: "https://diadejuegos.com/2681-large_default/puzzle-1000-pzs-oesterle-rocket-launch.jpg",
        stock: 6,
        description: "Uli Oesterle se dedica a la exploración espacial en su primer motivo de rompecabezas y reúne todo lo que tiene rango y nombre en este divertido lanzamiento de cohete.",
    },
    {
        id: "5",
        name: "Puzzle 1000 pzs DEGANO Flowers Life",
        price: 80,
        category: "rompecabezas",
        img: "https://diadejuegos.com/2679-large_default/puzzle-1000-pzs-degano-flower-s-life.jpg",
        stock: 3,
        description: "No solo en los animales, también en las plantas, hay todo tipo de pequeñas vidas por descubrir. ¡Marino Degano ha alojado medio universo en un ramo de flores!",
    },
    {
        id: "6",
        name: "SET DE 7 DADOS GEMINI NEGRO-GRIS CVERDE",
        price: 40,
        category: "rol",
        img: "https://diadejuegos.com/8172-large_default/set-de-7-dados-gemini-negro-gris-cverde.jpg",
        stock: 8,
        description: "Set de 7 dados  en caja de plástico",
    },
    {
        id: "7",
        name: "SET DE 7 DADOS GEMINI NEGRO-LUZ DE ESTRELLA CROJO",
        price: 50,
        category: "rol",
        img: "https://diadejuegos.com/8174-large_default/set-de-7-dados-gemini-negro-luz-de-estrella-crojo.jpg",
        stock: 12,
        description: "Set de 7 dados  en caja de plástico",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 500);
    });
};