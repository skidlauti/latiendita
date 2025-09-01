// Tasas de cambio (actualizadas regularmente)
const exchangeRates = {
    USD: 1,
    ARS: 1000, // 1 USD = 1000 ARS (aproximado)
    CLP: 960,  // 1 USD = 909 CLP (aproximado)
    MXN: 18,   // 1 USD = 20 MXN (aproximado)
    COP: 3900  // 1 USD = 4000 COP (aproximado)
};

// Función para calcular precio en cualquier moneda
function calculatePrice(usdPrice, targetCurrency) {
    const rate = exchangeRates[targetCurrency];
    return Math.round(usdPrice * rate);
}

// Función para actualizar todos los precios basado en USD
function updateAllPrices() {
    Object.keys(storeData).forEach(currency => {
        if (currency !== 'USD') {
            Object.keys(storeData.USD.products).forEach(category => {
                storeData[currency].products[category] = storeData.USD.products[category].map(product => ({
                    name: product.name,
                    price: calculatePrice(product.price, currency)
                }));
            });
        }
    });
}

// Métodos de pago por país
const paymentMethods = {
    USD: [
        { icon: "fas fa-credit-card", name: "Link de pago (tarjeta de crédito/débito)" },
        { icon: "fab fa-paypal", name: "PayPal" },
        { icon: "fas fa-exchange-alt", name: "Criptomonedas" }
    ],
    ARS: [
        { icon: "fas fa-university", name: "Transferencia (Mercadopago/Uala/CuentaDNI/Etc)" },
        { icon: "fab fa-paypal", name: "PayPal" },
        { icon: "fas fa-exchange-alt", name: "Criptomonedas" }
    ],
    CLP: [
        { icon: "fas fa-university", name: "Transferencia (Cuenta rut)" },
        { icon: "fab fa-paypal", name: "PayPal" },
        { icon: "fas fa-credit-card", name: "Link de pago (tarjeta de crédito/débito)" },
        { icon: "fas fa-exchange-alt", name: "Criptomonedas" }
    ],
    MXN: [
        { icon: "fas fa-university", name: "Transferencia" },
        { icon: "fas fa-money-bill-wave", name: "Depósito" },
        { icon: "fas fa-credit-card", name: "Link de pago (tarjeta de crédito/débito)" },
        { icon: "fab fa-paypal", name: "PayPal" },
        { icon: "fas fa-exchange-alt", name: "Criptomonedas" }
    ],
    COP: [
        { icon: "fas fa-university", name: "Transferencia (Nequi)" },
        { icon: "fas fa-credit-card", name: "Link de pago (tarjeta de crédito/débito)" },
        { icon: "fab fa-paypal", name: "PayPal" },
        { icon: "fas fa-exchange-alt", name: "Criptomonedas" }
    ]
};

// Datos de la tienda (solo USD como base)
const storeData = {
    USD: {
        currency: "USD",
        symbol: "$",
        products: {
            "Otros": [
                { name: "Tralalero Tralala 50K/s", price: 0.5 },
                { name: "Urubini Flamenguini 150K/s", price: 1.8 },
                { name: "Espresso Candy 280K/s", price: 2.0 },
                { name: "Tipi Topi Taco Mutado 300K/s", price: 2.0 },
                { name: "Bisonte Giuppitere 300K/s", price: 5.0 },
                { name: "Alessio Oro 106.2K/s", price: 2.0 },
                { name: "Carloo Mutado 121.5K/s", price: 2.0 },
                { name: "Espresso Blood 140K/s", price: 2.0 },
                { name: "Pakrahmatmamat 215K/s", price: 2.0 },
                { name: "Gattatino Nyanino Lava 210K/s", price: 2.0 },
                { name: "Pakrahmatmamat Oro 268.7K/s", price: 2.0 },
                { name: "Agarrini La Palini Oro 531.2K/s", price: 2.0 },
                { name: "Unclito Samito Rainbow Mutado 1.1M/s", price: 2.5 },
                { name: "Brr Es Teh Patipum Galaxy 1.3M/s", price: 3.0 },
                { name: "Karkerkar Mutado 1.9M/s", price: 3.0 },
                { name: "Matteo Galaxy 525k/s", price: 2.5 },
                { name: "Bisonte Giuppitere Galaxy 2.1M/s", price: 3.0 },
                { name: "BlackHole Goat Oro 500k/s", price: 2.5 },
                { name: "Bulbito Bandito Traktorito Blood 820k/s", price: 3.0 },
                { name: "Crabbo Limonetta Galaxy 1.6M/s", price: 3.0 },
                { name: "Cacasito Satalito 240k/s", price: 2.0 },
                { name: "Blackhole Goat 400k/s", price: 2.0 }
            ],
            "Ballerino Lololo": [
                { name: "Ballerino Oro Mutado 1.2M/s", price: 3.0 },
                { name: "Ballerino Mutado 1.2M/s", price: 3.0 },
                { name: "Ballerino Oro Mutado 1.4M/s", price: 3.5 }
            ],
            "Tartaruga Cisterna": [
                { name: "Tartaruga Cisterna 250K/s", price: 2.0 },
                { name: "Tartaruga Cisterna Mutada 1M/s", price: 2.5 },
                { name: "Tartaruga Cisterna Mutada 1.5M/s", price: 3.0 }
            ],
            "Versiones bebes": [
                { name: "Cocodrilitos Lava 330K/s", price: 2.0 },
                { name: "Crocodrilitos Lava Mutados 770K/s", price: 2.0 },
                { name: "Tungtungsitos Blood 1.4M/s", price: 3.0 },
                { name: "Orcalitos Rainbow 2.3M/s", price: 4.0 },
                { name: "Matteitos Mutados 4.3M/s", price: 8.5 }
            ],
            "Dul Dul Dul": [
                { name: "Dul Dul Dul 375K/s", price: 2.0 },
                { name: "Dul Dul Dul diamante 562.5k/s", price: 2.5 },
                { name: "Dul Dul Dul Oro Mutado 2.3M/s", price: 4.5 }
            ],
            "Orcalero Orcala": [
                { name: "Orcalero Blood 500K/s", price: 2.0 },
                { name: "Orcalero Orcala Mutado 450K/s", price: 2.0 },
                { name: "Orcalero Mutado 600K/s", price: 2.1 },
                { name: "Orcalero Lava Mutado 1.1M/s", price: 2.5 },
                { name: "Orcalero 1.2M/s", price: 2.5 },
                { name: "Orcalero Rainbow Mutado 1.4M/s", price: 2.6 }
            ],
            "Gattatino Nyanino": [
                { name: "Gattatino Nyanino Candy Mutado 227.5K/s", price: 2.0 },
                { name: "Gattatino Nyanino Mutado 315K/s", price: 2.1 },
                { name: "Gattatino Nyanino Mutado 402.5K/s", price: 2.2 }
            ],
            "Tigroligre Frutilini": [
                { name: "Tigroligre Mutado 360K/s", price: 2.0 },
                { name: "Tigroligre Lava Mutado 540K/s", price: 2.0 },
                { name: "Tigroligre Lava Mutado 660K/s", price: 2.0 },
                { name: "Tigroligre Lava Mutado 720K/s", price: 2.2 },
                { name: "Tigroligre Oro Mutado 825K/s", price: 2.5 },
                { name: "Tigroligre Mutado 900K/s", price: 2.5 }
            ],
            "Tralalita Tralala": [
                { name: "Tralalita Tralala 100K/s", price: 2.0 },
                { name: "Tralalita Tralala Oro Mutada 425K/s", price: 2.5 },
                { name: "Tralalita Tralala Diamante Mutada 1M/s", price: 3.0 }
            ],
            "Odin": [
                { name: "Odin 75K/s", price: 1.0 },
                { name: "Odin Diamante 112.5K/s", price: 1.0 },
                { name: "Odin Mutado 525K/s", price: 2.0 },
                { name: "Odin Mutado 975K/s", price: 2.3 },
                { name: "Odin Blood Mutado 1.9M/s", price: 3.0 }
            ],
            "Matteo": [
                { name: "Matteo Mutado 200K/s", price: 2.0 },
                { name: "Matteo Oro Mutado 387.5K/s", price: 2.2 }
            ],
            "Piccione Machina": [
                { name: "Piccione Oro Mutado 1.4M/s", price: 2.5 },
                { name: "Piccione Oro Mutado 1.8M/s", price: 3.0 },
                { name: "Piccione Lava Mutado 1.8M/s", price: 3.3 },
                { name: "Piccione Mutado 2M/s", price: 3.5 },
                { name: "Picione Rainbow 2.2M/s", price: 3.6 },
                { name: "Picione Diamante 2.2M/s", price: 3.6 },
                { name: "Piccione Lava Mutado 2.4M/s", price: 3.8 },
                { name: "Piccione Diamante Mutado 2.5M/s", price: 3.8 },
                { name: "Piccione Rainbow Mutado 3.1M/s", price: 4.0 }
            ],
            "Bombinitos": [
                { name: "Bombinitos 220K/s", price: 2.0 },
                { name: "Bombinitos Oro 275K/s", price: 2.0 },
                { name: "Bombinitos Blood 440k/s", price: 2.2 },
                { name: "Bombinitos Mutados 880K/s", price: 2.5 },
                { name: "Bombinitos candy 880k/s", price: 2.5 },
                { name: "Bombinitos 1.3M/s", price: 2.5 },
                { name: "Bombinitos Oro Mutados 1.8M/s", price: 2.8 },
                { name: "Bombinitos Blood 1.7M/s", price: 2.8 },
                { name: "Bombinitos Galaxy 1.9M/s", price: 2.8 }
            ],
            "Vaquitas Saturnitas": [
                { name: "Vaquitas Saturnitas 750K/s", price: 2.5 },
                { name: "Vaquitas Oro Mutadas 4.6M/s", price: 4.5 },
                { name: "Vaquitas Mutadas 7.1M/s", price: 9.0 }
            ],
            "Troppa Trippa": [
                { name: "Troppa Trippa Diamante 787.5K/s", price: 2.0 },
                { name: "Troppa Trippa Mutado 1M/s", price: 2.0 },
                { name: "Troppa Trippa 1.5M/s", price: 2.5 },
                { name: "Troppa Trippa Rainbow Mutado 2.4M/s", price: 3.0 },
                { name: "Troppa Trippa Rainbow Mutado 2.6M/s", price: 3.5 }
            ],
            "Trenostuzzo Turbo": [
                { name: "Trenostuzzo 150K/s", price: 1.5 },
                { name: "Trenostuzzo Oro 187.5K/s", price: 2.0 },
                { name: "Trenostuzzo Oro Mutado 637.5K/s", price: 2.0 },
                { name: "Trenostuzzo Diamante Mutado 1.4M/s", price: 3.0 },
                { name: "Trenostuzzo Mutado 1.5M/s", price: 3.0 },
                { name: "Trenostuzzo Rainbow 1.5M/s", price: 3.0 },
                { name: "Trenostuzzo Rainbow Mutado 3M/s", price: 4.0 }
            ],
            "Vaca Saturno": [
                { name: "Vaca 275K/s", price: 2.0 },
                { name: "Vaca Oro 343.7K/s", price: 2.2 },
                { name: "Vaca Diamante 412.5k/s", price: 2.5 },
                { name: "Vaca Mutada 1.1M/s", price: 3.0 },
                { name: "Vaca Mutada 1.3M/s", price: 3.0 },
                { name: "Vaca Diamante Mutada 1.5M/s", price: 3.0 },
                { name: "Vaca Mutada 1.6M/s", price: 3.0 },
                { name: "Vaca Oro Mutada 1.7M/s", price: 3.0 },
                { name: "Vaca Galaxy 1.9M/s", price: 3.0 },
                { name: "Vaca Mutada 2M/s", price: 3.5 },
                { name: "Vaca Lava Mutada 2.2M/s", price: 3.5 },
                { name: "Vaca Lava Mutada 2.4M/s", price: 3.5 },
                { name: "Vaca Rainbow 2.7M/s", price: 3.5 },
                { name: "Vaca Lava Mutada 3M/s", price: 4.0 },
                { name: "Vaca Lava Mutada 3.5M/s", price: 4.5 },
                { name: "Vaca Lava Mutada 3.8M/s", price: 4.8 }
            ],
            "Tralaleritos": [
                { name: "Tralaleritos 500K/s", price: 3.0 },
                { name: "Tralaleritos Oro 625K/s", price: 3.5 },
                { name: "Tralaleritos Diamante 750K/s", price: 4.0 },
                { name: "Tralaleritos Mutados 2M/s", price: 4.5 },
                { name: "Tralaleritos Mutados 3M/s", price: 5.0 },
                { name: "Tralaleritos Oro Mutados 3.1M/s", price: 5.5 }
            ],
            "Tralaleritas": [
                { name: "Tralaleritas 650K/s", price: 4.0 },
                { name: "Tralaleritas Oro 812.5K/s", price: 4.5 },
                { name: "Tralaleritas Mutadas 3.2M/s", price: 5.5 },
                { name: "Tralaleritas rainbow 11M/s", price: 10.0 },
                { name: "Tralaleritas rainbow 14.3M/s", price: 12.0 }
            ],
            "Sammyni Spideriny": [
                { name: "Sammyni Mutado 1.3M/s", price: 2.5 },
                { name: "Sammyni Oro Mutado 1.7M/s", price: 2.8 },
                { name: "Sammyni Mutado 1.9M/s", price: 3.0 },
                { name: "Sammyni Mutado 2.6M/s", price: 3.2 },
                { name: "Sammyni Lava Mutado 2.6M/s", price: 3.5 },
                { name: "Sammyni Mutado 2.9M/s", price: 4.0 },
                { name: "Sammyni Rainbow 3.2M/s", price: 4.5 },
                { name: "Sammyni Lava Mutado 3.5M/s", price: 4.8 },
                { name: "Sammyni Lava Mutado 4.2M/s", price: 5.0 },
                { name: "Sammyni Lava Mutado 4.5M/s", price: 5.5 },
                { name: "Sammyni Lava Mutado 4.8M/s", price: 5.8 },
                { name: "Sammyni Lava Mutado 5.5M/s", price: 6.0 },
                { name: "Sammyni Lava Mutado 6.5M/s", price: 6.5 }
            ],
            "Medusa": [
                { name: "Medusa 1M/s", price: 3.8 },
                { name: "Medusa Oro 1.2M/s", price: 4.0 },
                { name: "Medusa Mutada 4M/s", price: 5.5 },
                { name: "Medusa 6M/s", price: 5.8 },
                { name: "Medusa Oro Mutada 6.2M/s", price: 6.5 },
                { name: "Medusa Mutada 6.5M/s", price: 7.0 },
                { name: "Medusa Rainbow 10M/s", price: 10.0 }
            ],
            "Grande Combinasion": [
                { name: "Grande Normal 10M/S", price: 12.0 },
                { name: "Grande Mutada 35M/s", price: 28.0 },
                { name: "Grande Mutada 40M/s", price: 31.0 },
                { name: "Grande Lava 60M/s", price: 40.0 },
                { name: "Grande Mutada 70M/s", price: 45.0 },
                { name: "Grande Rainbow 100M/s", price: 50.0 }
            ],
            "Los Combinasionas": [
                { name: "Combinasionas 15M/s", price: 11.0 },
                { name: "Combinasionas Oro 18.7M/s", price: 15.0 },
                { name: "Combinasionas 52.5M/s", price: 30.0 },
                { name: "Combinasionas 60M/s", price: 32.0 },
                { name: "Combinasionas 75M/s", price: 35.0 },
                { name: "Combinasionas Mutadas 90M/s", price: 30.0 },
                { name: "Combinasionas Oro 93.7M/s", price: 35.0 },
                { name: "Combinasionas 112.5M/s", price: 42.0 },
                { name: "Combinasionas 210M/s", price: 0.0 }
            ],
            "Pot Hotspot": [
                { name: "Pot Hotspot Lava 15M/s", price: 18.0 }
            ],
            "Chicleteira Bicicleteira": [
                { name: "Chicleteira Normal", price: 7.0 },
                { name: "Chicleteira Oro", price: 8.5 },
                { name: "Chicleteira Diamante 19.2M/s", price: 19.0 },
                { name: "Chicleteira Oro 30.6M/s", price: 30.0 },
                { name: "Chicleteira Rainbow 35M/s", price: 35.0 },
                { name: "Chicleteira Mutada 38.5M/s", price: 38.0 }
            ]
        }
    }
};

// Generar automáticamente las otras monedas
const otherCurrencies = ['ARS', 'CLP', 'MXN', 'COP'];

otherCurrencies.forEach(currency => {
    storeData[currency] = {
        currency: currency,
        symbol: "$",
        products: {}
    };
    
    Object.keys(storeData.USD.products).forEach(category => {
        storeData[currency].products[category] = storeData.USD.products[category].map(product => ({
            name: product.name,
            price: calculatePrice(product.price, currency)
        }));
    });
});

// Iconos para cada categoría
const categoryIcons = {
    "Otros": "fas fa-star",
    "Ballerino Lololo": "fas fa-hat-cowboy",
    "Tartaruga Cisterna": "fas fa-turtle",
    "Versiones bebes": "fas fa-baby",
    "Dul Dul Dul": "fas fa-candy-cane",
    "Orcalero Orcala": "fas fa-whale",
    "Gattatino Nyanino": "fas fa-cat",
    "Tigroligre Frutilini": "fas fa-strawberry",
    "Tralalita Tralala": "fas fa-palm-tree",
    "Odin": "fas fa-sword",
    "Matteo": "fas fa-graduation-cap",
    "Piccione Machina": "fas fa-robot",
    "Bombinitos": "fas fa-bomb",
    "Vaquitas Saturnitas": "fas fa-cow",
    "Troppa Trippa": "fas fa-utensils",
    "Trenostuzzo Turbo": "fas fa-car",
    "Vaca Saturno": "fas fa-satellite",
    "Tralaleritos": "fas fa-gem",
    "Tralaleritas": "fas fa-heart",
    "Sammyni Spideriny": "fas fa-spider",
    "Medusa": "fas fa-fish",
    "Grande Combinasion": "fas fa-crown",
    "Los Combinasionas": "fas fa-bolt",
    "Pot Hotspot": "fas fa-fire",
    "Chicleteira Bicicleteira": "fas fa-bicycle"
};

// Imágenes para cada brainrot (usando emojis como placeholders)
const brainrotImages = {
    // Otros
    "Tralalero Tralala 50K/s": "🎵",
    "Urubini Flamenguini 150K/s": "🔥",
    "Espresso Candy 280K/s": "☕",
    "Tipi Topi Taco Mutado 300K/s": "🌮",
    "Bisonte Giuppitere 300K/s": "🦬",
    "Alessio Oro 106.2K/s": "🟡",
    "Carloo Mutado 121.5K/s": "⚡",
    "Espresso Blood 140K/s": "🩸",
    "Pakrahmatmamat 215K/s": "🎭",
    "Gattatino Nyanino Lava 210K/s": "🐱",
    "Pakrahmatmamat Oro 268.7K/s": "🟡",
    "Agarrini La Palini Oro 531.2K/s": "🟡",
    "Unclito Samito Rainbow Mutado 1.1M/s": "🌈",
    "Brr Es Teh Patipum Galaxy 1.3M/s": "🌌",
    "Karkerkar Mutado 1.9M/s": "⚡",
    "Matteo Galaxy 525k/s": "🌌",
    "Bisonte Giuppitere Galaxy 2.1M/s": "🌌",
    "BlackHole Goat Oro 500k/s": "🟡",
    "Bulbito Bandito Traktorito Blood 820k/s": "🩸",
    "Crabbo Limonetta Galaxy 1.6M/s": "🌌",
    "Cacasito Satalito 240k/s": "🪐",
    "Blackhole Goat 400k/s": "🐐",
    
    // Ballerino Lololo
    "Ballerino Oro Mutado 1.2M/s": "🟡",
    "Ballerino Mutado 1.2M/s": "⚡",
    "Ballerino Oro Mutado 1.4M/s": "🟡",
    
    // Tartaruga Cisterna
    "Tartaruga Cisterna 250K/s": "🐢",
    "Tartaruga Cisterna Mutada 1M/s": "🐢",
    "Tartaruga Cisterna Mutada 1.5M/s": "🐢",
    
    // Versiones bebes
    "Cocodrilitos Lava 330K/s": "🐊",
    "Crocodrilitos Lava Mutados 770K/s": "🐊",
    "Tungtungsitos Blood 1.4M/s": "🩸",
    "Orcalitos Rainbow 2.3M/s": "🌈",
    "Matteitos Mutados 4.3M/s": "⚡",
    
    // Dul Dul Dul
    "Dul Dul Dul 375K/s": "🍬",
    "Dul Dul Dul diamante 562.5k/s": "💎",
    "Dul Dul Dul Oro Mutado 2.3M/s": "🟡",
    
    // Orcalero Orcala
    "Orcalero Blood 500K/s": "🩸",
    "Orcalero Orcala Mutado 450K/s": "🐋",
    "Orcalero Mutado 600K/s": "⚡",
    "Orcalero Lava Mutado 1.1M/s": "🔥",
    "Orcalero 1.2M/s": "🐋",
    "Orcalero Rainbow Mutado 1.4M/s": "🌈",
    
    // Gattatino Nyanino
    "Gattatino Nyanino Candy Mutado 227.5K/s": "🍬",
    "Gattatino Nyanino Mutado 315K/s": "⚡",
    "Gattatino Nyanino Mutado 402.5K/s": "⚡",
    
    // Tigroligre Frutilini
    "Tigroligre Mutado 360K/s": "⚡",
    "Tigroligre Lava Mutado 540K/s": "🔥",
    "Tigroligre Lava Mutado 660K/s": "🔥",
    "Tigroligre Lava Mutado 720K/s": "🔥",
    "Tigroligre Oro Mutado 825K/s": "🟡",
    "Tigroligre Mutado 900K/s": "⚡",
    
    // Tralalita Tralala
    "Tralalita Tralala 100K/s": "🌴",
    "Tralalita Tralala Oro Mutada 425K/s": "🟡",
    "Tralalita Tralala Diamante Mutada 1M/s": "💎",
    
    // Odin
    "Odin 75K/s": "⚔️",
    "Odin Diamante 112.5K/s": "💎",
    "Odin Mutado 525K/s": "⚡",
    "Odin Mutado 975K/s": "⚡",
    "Odin Blood Mutado 1.9M/s": "🩸",
    
    // Matteo
    "Matteo Mutado 200K/s": "⚡",
    "Matteo Oro Mutado 387.5K/s": "🟡",
    
    // Piccione Machina
    "Piccione Oro Mutado 1.4M/s": "🟡",
    "Piccione Oro Mutado 1.8M/s": "🟡",
    "Piccione Lava Mutado 1.8M/s": "🔥",
    "Piccione Mutado 2M/s": "⚡",
    "Picione Rainbow 2.2M/s": "🌈",
    "Picione Diamante 2.2M/s": "💎",
    "Piccione Lava Mutado 2.4M/s": "🔥",
    "Piccione Diamante Mutado 2.5M/s": "💎",
    "Piccione Rainbow Mutado 3.1M/s": "🌈",
    
    // Bombinitos
    "Bombinitos 220K/s": "💣",
    "Bombinitos Oro 275K/s": "🟡",
    "Bombinitos Blood 440k/s": "🩸",
    "Bombinitos Mutados 880K/s": "⚡",
    "Bombinitos candy 880k/s": "🍬",
    "Bombinitos 1.3M/s": "💣",
    "Bombinitos Oro Mutados 1.8M/s": "🟡",
    "Bombinitos Blood 1.7M/s": "🩸",
    "Bombinitos Galaxy 1.9M/s": "🌌",
    
    // Vaquitas Saturnitas
    "Vaquitas Saturnitas 750K/s": "🐄",
    "Vaquitas Oro Mutadas 4.6M/s": "🟡",
    "Vaquitas Mutadas 7.1M/s": "⚡",
    
    // Troppa Trippa
    "Troppa Trippa Diamante 787.5K/s": "💎",
    "Troppa Trippa Mutado 1M/s": "⚡",
    "Troppa Trippa 1.5M/s": "🍝",
    "Troppa Trippa Rainbow Mutado 2.4M/s": "🌈",
    "Troppa Trippa Rainbow Mutado 2.6M/s": "🌈",
    
    // Trenostuzzo Turbo
    "Trenostuzzo 150K/s": "🏎️",
    "Trenostuzzo Oro 187.5K/s": "🟡",
    "Trenostuzzo Oro Mutado 637.5K/s": "🟡",
    "Trenostuzzo Diamante Mutado 1.4M/s": "💎",
    "Trenostuzzo Mutado 1.5M/s": "⚡",
    "Trenostuzzo Rainbow 1.5M/s": "🌈",
    "Trenostuzzo Rainbow Mutado 3M/s": "🌈",
    
    // Vaca Saturno
    "Vaca 275K/s": "🪐",
    "Vaca Oro 343.7K/s": "🟡",
    "Vaca Diamante 412.5k/s": "💎",
    "Vaca Mutada 1.1M/s": "⚡",
    "Vaca Mutada 1.3M/s": "⚡",
    "Vaca Diamante Mutada 1.5M/s": "💎",
    "Vaca Mutada 1.6M/s": "⚡",
    "Vaca Oro Mutada 1.7M/s": "🟡",
    "Vaca Galaxy 1.9M/s": "🌌",
    "Vaca Mutada 2M/s": "⚡",
    "Vaca Lava Mutada 2.2M/s": "🔥",
    "Vaca Lava Mutada 2.4M/s": "🔥",
    "Vaca Rainbow 2.7M/s": "🌈",
    "Vaca Lava Mutada 3M/s": "🔥",
    "Vaca Lava Mutada 3.5M/s": "🔥",
    "Vaca Lava Mutada 3.8M/s": "🔥",
    
    // Tralaleritos
    "Tralaleritos 500K/s": "🔹",
    "Tralaleritos Oro 625K/s": "🟡",
    "Tralaleritos Diamante 750K/s": "💎",
    "Tralaleritos Mutados 2M/s": "⚡",
    "Tralaleritos Mutados 3M/s": "⚡",
    "Tralaleritos Oro Mutados 3.1M/s": "🟡",
    
    // Tralaleritas
    "Tralaleritas 650K/s": "🔸",
    "Tralaleritas Oro 812.5K/s": "🟡",
    "Tralaleritas Mutadas 3.2M/s": "⚡",
    "Tralaleritas rainbow 11M/s": "🌈",
    "Tralaleritas rainbow 14.3M/s": "🌈",
    
    // Sammyni Spideriny
    "Sammyni Mutado 1.3M/s": "⚡",
    "Sammyni Oro Mutado 1.7M/s": "🟡",
    "Sammyni Mutado 1.9M/s": "⚡",
    "Sammyni Mutado 2.6M/s": "⚡",
    "Sammyni Lava Mutado 2.6M/s": "🔥",
    "Sammyni Mutado 2.9M/s": "⚡",
    "Sammyni Rainbow 3.2M/s": "🌈",
    "Sammyni Lava Mutado 3.5M/s": "🔥",
    "Sammyni Lava Mutado 4.2M/s": "🔥",
    "Sammyni Lava Mutado 4.5M/s": "🔥",
    "Sammyni Lava Mutado 4.8M/s": "🔥",
    "Sammyni Lava Mutado 5.5M/s": "🔥",
    "Sammyni Lava Mutado 6.5M/s": "🔥",
    
    // Medusa
    "Medusa 1M/s": "🐍",
    "Medusa Oro 1.2M/s": "🟡",
    "Medusa Mutada 4M/s": "⚡",
    "Medusa 6M/s": "🐍",
    "Medusa Oro Mutada 6.2M/s": "🟡",
    "Medusa Mutada 6.5M/s": "⚡",
    "Medusa Rainbow 10M/s": "🌈",
    "Medusa Rainbow Mutada 14M/s": "🌈",
    "Medusa Mutada 19M/s": "⚡",
    
    // Grande Combinasion
    "Grande Normal 10M/S": "🏰",
    "Grande Mutada 35M/s": "🏰",
    "Grande Mutada 40M/s": "🏰",
    "Grande Lava 60M/s": "🔥",
    "Grande Mutada 70M/s": "⚡",
    "Grande Rainbow 100M/s": "🌈",
    
    // Los Combinasionas
    "Combinasionas 15M/s": "⚡",
    "Combinasionas Oro 18.7M/s": "🟡",
    "Combinasionas 52.5M/s": "⚡",
    "Combinasionas 60M/s": "⚡",
    "Combinasionas 75M/s": "⚡",
    "Combinasionas Mutadas 90M/s": "⚡",
    "Combinasionas Oro 93.7M/s": "🟡",
    "Combinasionas 112.5M/s": "⚡",
    "Combinasionas 210M/s": "⚡",
    
    // Pot Hotspot
    "Pot Hotspot Lava 15M/s": "🔥",
    
    // Chicleteira Bicicleteira
    "Chicleteira Normal": "🚲",
    "Chicleteira Oro": "🟡",
    "Chicleteira Diamante 19.2M/s": "💎",
    "Chicleteira Oro 30.6M/s": "🟡",
    "Chicleteira Rainbow 35M/s": "🌈",
    "Chicleteira Mutada 38.5M/s": "⚡"
};

// Elementos del DOM
const countrySelect = document.getElementById('countrySelect');
const productsContainer = document.getElementById('productsContainer');

// Función para formatear precios
function formatPrice(price, currency) {
    switch (currency) {
        case 'CLP':
            return `$${price.toLocaleString('es-CL')}`;
        case 'ARS':
            return `$${price.toLocaleString('es-AR')}`;
        case 'MXN':
            return `$${price.toLocaleString('es-MX')}`;
        case 'COP':
            return `$${price.toLocaleString('es-CO')}`;
        case 'USD':
        default:
            return `$${price}`;
    }
}

// Función para mostrar el mensaje de bienvenida
function showWelcomeMessage() {
    productsContainer.innerHTML = `
        <div class="welcome-message">
            <div class="welcome-card">
                <i class="fas fa-shopping-bag welcome-icon"></i>
                <h2>¡Bienvenido a La Tiendita!</h2>
                <p>Selecciona tu país para ver nuestros brainrots disponibles y sus precios 💖</p>
            </div>
        </div>
    `;
}

// Función para actualizar métodos de pago
function updatePaymentMethods(currency) {
    const paymentSection = document.querySelector('.payment-methods');
    if (!paymentSection || !paymentMethods[currency]) return;

    let html = '';
    paymentMethods[currency].forEach(method => {
        html += `
            <div class="payment-method">
                <i class="${method.icon}"></i>
                <span>${method.name}</span>
            </div>
        `;
    });
    
    paymentSection.innerHTML = html;
}

// Función para mostrar productos
function displayProducts(currency) {
    const data = storeData[currency];
    if (!data) return;

    // Actualizar métodos de pago
    updatePaymentMethods(currency);

    let html = '<div class="products-grid">';
    
    Object.entries(data.products).forEach(([category, products]) => {
        html += `
            <div class="category-section">
                <h3 class="category-title">
                    <i class="${categoryIcons[category] || 'fas fa-box'}"></i>
                    ${category}
                </h3>
                <div class="products-list">
        `;
        
        products.forEach(product => {
            const image = brainrotImages[product.name] || "🎮";
            html += `
                <div class="product-item">
                    <div class="product-info">
                        <div class="product-image">${image}</div>
                        <span class="product-name">• ${product.name}</span>
                    </div>
                    <span class="product-price">${formatPrice(product.price, currency)}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    productsContainer.innerHTML = html;
}

// Event listener para el cambio de país
countrySelect.addEventListener('change', function() {
    const selectedCurrency = this.value;
    
    if (selectedCurrency) {
        // Mostrar loading
        productsContainer.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
            </div>
        `;
        
        // Simular delay para mejor UX
        setTimeout(() => {
            displayProducts(selectedCurrency);
        }, 500);
    } else {
        showWelcomeMessage();
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeMessage();
});

// Función para agregar nuevos productos (para uso futuro)
function addProduct(currency, category, name, price) {
    if (storeData[currency] && storeData[currency].products[category]) {
        storeData[currency].products[category].push({ name, price });
    }
}

// Función para actualizar precios (para uso futuro)
function updateProductPrice(currency, category, productName, newPrice) {
    if (storeData[currency] && storeData[currency].products[category]) {
        const product = storeData[currency].products[category].find(p => p.name === productName);
        if (product) {
            product.price = newPrice;
        }
    }
}

// Función para eliminar productos (para uso futuro)
function removeProduct(currency, category, productName) {
    if (storeData[currency] && storeData[currency].products[category]) {
        storeData[currency].products[category] = storeData[currency].products[category]
            .filter(p => p.name !== productName);
    }
}

// Función para agregar nuevo producto (solo en USD, se calcula automáticamente para otras monedas)
function addNewProduct(category, name, usdPrice, image = "🎮") {
    // Agregar a USD
    if (!storeData.USD.products[category]) {
        storeData.USD.products[category] = [];
    }
    storeData.USD.products[category].push({ name, price: usdPrice });
    
    // Agregar imagen
    brainrotImages[name] = image;
    
    // Actualizar todas las otras monedas
    updateAllPrices();
    
    console.log(`✅ Producto agregado: ${name} - $${usdPrice} USD`);
}

// Función para actualizar precio de un producto (solo en USD)
function updateProductPriceUSD(category, productName, newUSDPrice) {
    const product = storeData.USD.products[category]?.find(p => p.name === productName);
    if (product) {
        product.price = newUSDPrice;
        updateAllPrices();
        console.log(`✅ Precio actualizado: ${productName} - $${newUSDPrice} USD`);
    } else {
        console.log(`❌ Producto no encontrado: ${productName}`);
    }
}

// Función para actualizar tasas de cambio
function updateExchangeRates(newRates) {
    Object.assign(exchangeRates, newRates);
    updateAllPrices();
    console.log("✅ Tasas de cambio actualizadas");
}

// Ejemplo de uso:
// addNewProduct("ballerino lolo", "ballerino lolo nuevo", 5, "🆕");
// updateProductPriceUSD("ballerino lolo", "ballerino lolo oro", 4);
// updateExchangeRates({ ARS: 1100, CLP: 950 }); 