# 💖 La Tiendita 2.0 ✨ - Brainrots Store

Una página web moderna y elegante para mostrar tu catálogo de brainrots con precios en diferentes monedas.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🌍 Soporte para múltiples monedas (USD, ARS, CLP, MXN, COP)
- 📱 Compatible con móviles y tablets
- 🎨 Interfaz limpia y atractiva
- ⚡ Carga rápida y animaciones suaves
- 🖼️ Imágenes de brainrots para cada producto
- 🎭 Animaciones interactivas y efectos hover

## 📁 Estructura del Proyecto

```
tienda-brainrots/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

## 🛠️ Cómo Modificar Productos y Precios

### 🎯 **Sistema Automático de Precios**

Ahora solo necesitas poner los precios en **USD** y se calculan automáticamente para todas las otras monedas usando las tasas de cambio configuradas.

### 1. Agregar Nuevos Productos

**Opción A: Usando funciones automáticas (Recomendado)**
```javascript
// Agregar nuevo producto (solo en USD, se calcula automáticamente para otras monedas)
addNewProduct("ballerino lolo", "ballerino lolo nuevo", 5, "🆕");
```

**Opción B: Edición manual**
```javascript
// Solo agrega en USD, las otras monedas se generan automáticamente
"ballerino lolo": [
    { name: "ballerino lolo oro", price: 3 },
    { name: "ballerino lolo 1.4M/s", price: 3 },
    { name: "ballerino lolo nuevo", price: 4 } // ← Solo en USD
],
```

### 2. Cambiar Precios

**Opción A: Usando funciones automáticas (Recomendado)**
```javascript
// Actualizar precio (solo en USD, se actualiza automáticamente en todas las monedas)
updateProductPriceUSD("ballerino lolo", "ballerino lolo oro", 4);
```

**Opción B: Edición manual**
```javascript
// Solo cambia en USD, las otras monedas se actualizan automáticamente
{ name: "ballerino lolo oro", price: 3.5 }, // ← Solo en USD
```

### 3. Agregar Nuevas Categorías

Para agregar una nueva categoría:

1. Agrega la categoría en `storeData` para ambas monedas (USD y CLP)
2. Agrega un ícono en `categoryIcons`:

```javascript
// En storeData
"nueva categoria": [
    { name: "producto 1", price: 10 },
    { name: "producto 2", price: 15 }
],

// En categoryIcons
"nueva categoria": "fas fa-rocket", // Ícono de FontAwesome
```

### 4. Agregar Nuevas Monedas

Para agregar una nueva moneda (por ejemplo, EUR):

1. Agrega la nueva moneda en `storeData`:

```javascript
EUR: {
    currency: "EUR",
    symbol: "€",
    products: {
        // Copia la estructura de USD y ajusta los precios
    }
}
```

2. Agrega la opción en el HTML (`index.html`):

```html
<option value="EUR">🇪🇺 Europa (EUR)</option>
```

3. Actualiza la función `formatPrice` en `script.js`:

```javascript
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
        case 'EUR':
            return `€${price.toLocaleString('es-ES')}`;
        case 'USD':
        default:
            return `$${price}`;
    }
}
```

### 3. Actualizar Tasas de Cambio

Para actualizar las tasas de cambio y recalcular todos los precios:

```javascript
// Actualizar tasas de cambio (ejemplo)
updateExchangeRates({
    ARS: 1100,  // 1 USD = 1100 ARS
    CLP: 950,   // 1 USD = 950 CLP
    MXN: 22,    // 1 USD = 22 MXN
    COP: 4200   // 1 USD = 4200 COP
});
```

### 4. Agregar Imágenes de Brainrots

Para agregar imágenes a nuevos productos, edita el objeto `brainrotImages` en `script.js`:

```javascript
const brainrotImages = {
    "nuevo brainrot": "🦄", // Emoji o imagen
    // ... otros productos
};
```

### 5. Tasas de Cambio Actuales

Las tasas de cambio están configuradas en el objeto `exchangeRates`:

```javascript
const exchangeRates = {
    USD: 1,     // Moneda base
    ARS: 1000,  // 1 USD = 1000 ARS
    CLP: 909,   // 1 USD = 909 CLP
    MXN: 20,    // 1 USD = 20 MXN
    COP: 4000   // 1 USD = 4000 COP
};
```

## 🎨 Personalización del Diseño

### Cambiar Colores

Edita el archivo `styles.css`:

```css
/* Cambiar el gradiente de fondo */
body {
    background: linear-gradient(135deg, #tu-color-1 0%, #tu-color-2 100%);
}

/* Cambiar color principal */
.product-price {
    color: #tu-color;
}
```

### Cambiar Fuentes

En `index.html`, cambia la fuente de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Tu-Fuente:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Y en `styles.css`:

```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

## 📱 Cómo Usar

1. Abre `index.html` en tu navegador
2. Selecciona tu país/moneda
3. Explora los productos por categoría
4. Los precios se mostrarán automáticamente en la moneda seleccionada

## 🔧 Funciones JavaScript Disponibles

El archivo `script.js` incluye funciones útiles para modificar productos programáticamente:

```javascript
// Agregar producto
addProduct('USD', 'ballerino lolo', 'nuevo producto', 5);

// Actualizar precio
updateProductPrice('USD', 'ballerino lolo', 'ballerino lolo oro', 4);

// Eliminar producto
removeProduct('USD', 'ballerino lolo', 'ballerino lolo oro');
```

## 🌐 Publicar en la Web

Para hacer tu tienda pública:

1. **GitHub Pages**: Sube los archivos a un repositorio de GitHub y activa GitHub Pages
2. **Netlify**: Arrastra la carpeta del proyecto a Netlify
3. **Vercel**: Conecta tu repositorio de GitHub a Vercel
4. **Hosting tradicional**: Sube los archivos a tu servidor web

## 💡 Consejos

- Mantén los nombres de productos consistentes entre monedas
- Usa íconos de FontAwesome para las categorías
- Prueba la página en diferentes dispositivos
- Actualiza regularmente los precios según el mercado

## 🆘 Soporte

Si necesitas ayuda para modificar algo específico, revisa:
- La estructura de datos en `script.js`
- Los estilos en `styles.css`
- La estructura HTML en `index.html`

¡Tu tienda está lista para conquistar el mundo de los brainrots! 💖✨ 