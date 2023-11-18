import best11 from '../img/best-1-1x.jpg';
import best12 from '../img/best-1-2x-min.jpg';
import best21 from '../img/best-2-1x-min.jpg';
import best22 from '../img/best-2-2x-min.jpg';
import best31 from '../img/best-min.jpg';
import best41 from '../img/catal-1-1x-min.jpg';
import best42 from '../img/catal-1-2x-min.jpg';
import best51 from '../img/catal-2-1x-min.jpg';
import best52 from '../img/catal-2-2x-min.jpg';
import best61 from '../img/catal-3-1x-min.jpg';
import best62 from '../img/catal-3-2x-min.jpg';
// -------------------------------------------------//

import choux1 from '../img/shy-min.jpg';
import choux2 from '../img/shy2-min.jpg';
import choux3 from '../img/shy3-min.jpg';
import choux4 from '../img/shy4-min.jpg';
import choux5 from '../img/best-3-1x-min.jpg';
import choux6 from '../img/tistechko4.png';

// -----------------------------------------------//

import tistechko1 from '../img/tistechko7-min.jpg';
import tistechko2 from '../img/tistechko6-min.jpg';
import tistechko3 from '../img/tistechko.png';
import tistechko4 from '../img/tistechko2.png';
import tistechko5 from '../img/tistechko3.png';
import tistechko6 from '../img/tistechko5.png';

// ------------------------------------------------//

import pizza1 from '../img/pizza1-min.jpeg';
import pizza2 from '../img/pizza2-min.jpg';
import pizza3 from '../img/pizza3-min.jpg'; 
import pizza4 from '../img/pizza4-min.jpeg';
import pizza5 from '../img/pizza6-min.jpg';
import pizza6 from '../img/pizza7-min.jpg';

// ---------------------------PIZZA--------------------------------------//

const responsePizza = [
    {
    src : pizza1,
    title : "Pizza 'Cezar'",
    price : "300UAH/1",
    },
    {
        src : pizza2,
        title : "Pizza '4-meat'",
        price : "400UAH/1",
     },
     {
        src : pizza3,
        title : "Pizza '4-chesse'",
        price : "350UAH/1",
     },
     {
        src : pizza4,
        title : "Pizza '4-seasons'",
        price : "400UAH/1",
     },
     {
        src : pizza5,
        title : "Hawaiian pizza",
        price : "300UAH/1",
     },
     {
        src : pizza6,
        title : "Viennese pizza",
        price : "300UAH/1",
     },
];

//------------------------CATALOG CHOUX PASTRY-------------------------------//

const responseChouxPastry = [
    {
      src : choux1,
      title : "Classic cream puff",
      price : "200UAH/5pcs",
    },
     {
        src : choux2,
        title : "Cream puff with strawberry filling",
        price : "300UAH/5pcs",
      },
      {
        src : choux3,
        title : "Cream puff with strawberry filling and chocolate topping",
        price : "500UAH/5pcs",
      },
      {
        src : choux4,
        title : "French-style cream puff",
        price : "500UAH/5pcs",
      },
      {
        src : choux5,
        title : "Choux pastry",
        price : "400UAH/4pcs",
    },
    {
        src : choux6,
        title : "Cream puff with nuts",
        price : "600UAH/4pcs",
    },
]

// -----------------------------BEST SELLERS RESPONSE ----------------------------------//

const responseBestSellers = [
    {
        src : best11,
        srcset : best12,
        title : "Mango-Passionfruit mousse cake",
        price : "1200UAH/3kg",
    },
    {
        src : best21,
        srcset : best22,
        title : "Chocolate brownie",
        price : "300UAH/3pcs",
    },
    {
        src : best41,
        srcset : best42,
        title : "Сhocolate cake with raspberries",
        price : "1000UAH/2kg",
    },
    {
        src : best51,
        srcset : best52,
        title : "Passionfruit kiwi cake",
        price : "1100UAH/1.5kg",
    },
    {
        src : best61,
        srcset : best62,
        title : "Snickers cake",
        price : "1400UAH/3kg",
    },
    {
        src : best31,
        srcset : best31,
        title : "Napoleon",
        price : "700UAH/2kg",
    },
]


// --------------------------------------------TISTECHKO----------------------------------//

const responseTistechko = [
    {
        src : tistechko1,
        title : "Pistachio-raspberry pastry",
        price : "100UAH/1pcs",
    }, 
    {
        src : tistechko2,
        title : "Waffle-nut pastry",
        price : "350UAH/2pcs",
    },
    {
        src : tistechko3,
        title : "Strawberry tart",
        price : "900UAH/5pcs",
    },
    {
        src : tistechko4,
        title : "Ecstasy pastry",
        price : "600UAH/3pcs",
    },
    {
        src : tistechko5,
        title : "Pastry with custard cream and strawberries",
        price : "600UAH/6pcs",
    },
    {
        src : tistechko6,
        title : "Berry cheesecake",
        price : "500UAH/3pcs",
    },
]

export {responseBestSellers , responseChouxPastry, responseTistechko, responsePizza};