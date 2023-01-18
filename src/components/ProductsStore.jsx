
const productArray = [
    {
        id: "1",
        name: "Alaska",
        imageurl: require("../assets/images/alaska.jpg"),
        price: '10'
    },
    {
        id: "2",
        name: "Blue",
        imageurl: require("../assets/images/blue.jpg"),
        price: '10'
    },
    {
        id: "3",
        name: "Classic Black and Gold",
        imageurl: require("../assets/images/classicblackandgold.jpg"),
        price: '10'
    },
    {
        id: "4",
        name: "Drawstring Solar System",
        imageurl: require("../assets/images/drawstringSS.jpg"),
        price: '10'
    },
    {
        id: "5",
        name: "Earth",
        imageurl: require("../assets/images/earth.jpg"),
        price: '10'
    },
    {
        id: "6",
        name: "Fall",
        imageurl: require("../assets/images/fall.jpg"),
        price: '10'
    },
    {
        id: "7",
        name: "Fall2",
        imageurl: require("../assets/images/fall2.jpg"),
        price: '10'
    },
    {
        id: "8",
        name: "Frosted Green",
        imageurl: require("../assets/images/frostedgreen.jpg"),
        price: '10'
    },
    {
        id: "9",
        name: "Galaxy",
        imageurl: require("../assets/images/galaxy.jpg"),
        price: '10'
    },
    {
        id: "10",
        name: "Green Tea",
        imageurl: require("../assets/images/greentea.jpg"),
        price: '10'
    },
    {
        id: "11",
        name: "Jade",
        imageurl: require("../assets/images/jade.jpg"),
        price: '10'
    },
    {
        id: "12",
        name: "Jasper",
        imageurl: require("../assets/images/jasper.jpg"),
        price: '10'
    },
    {
        id: "13",
        name: "Jodeci",
        imageurl: require("../assets/images/jodeci.jpg"),
        price: '10'
    },
    {
        id: "14",
        name: "Mars",
        imageurl: require("../assets/images/mars.jpg"),
        price: '10'
    },
    {
        id: "15",
        name: "Moss",
        imageurl: require("../assets/images/mossgreen.jpg"),
        price: '10'
    },
    {
        id: "16",
        name: "Orginal Solar System",
        imageurl: require("../assets/images/OGSS.jpg"),
        price: '10'
    },
    {
        id: "17",
        name: "Orange Lotus Flower",
        imageurl: require("../assets/images/orangelotus.jpg"),
        price: '10'
    },
    {
        id: "18",
        name: "Oxy",
        imageurl: require("../assets/images/oxy.jpg"),
        price: '10'
    },
    {
        id: "19",
        name: "Peace",
        imageurl: require("../assets/images/peace.jpg"),
        price: '10'
    },
    {
        id: "20",
        name: "Pearlicious",
        imageurl: require("../assets/images/pearlicious.jpg"),
        price: '10'
    },
    {
        id: "21",
        name: "Protection",
        imageurl: require("../assets/images/protection.jpg"),
        price: '10'
    },
    {
        id: "22",
        name: "Protection1",
        imageurl: require("../assets/images/protection1.jpg"),
        price: '10'
    },
    {
        id: "23",
        name: "Protection2",
        imageurl: require("../assets/images/protection2.jpg"),
        price: '10'
    },
    {
        id: "24",
        name: "Purple",
        imageurl: require("../assets/images/purple.jpg"),
        price: '10'
    },
    {
        id: "25",
        name: "Purple Lotus Flower",
        imageurl: require("../assets/images/purplelotus.jpg"),
        price: '10'
    },
    {
        id: "26",
        name: "Purple Protection",
        imageurl: require("../assets/images/purpleprotection.jpg"),
        price: '10'
    },
    {
        id: "27",
        name: "Queendom",
        imageurl: require("../assets/images/Queendom.jpg"),
        price: '40'
    },
    {
        id: "28",
        name: "Red Lotus Flower",
        imageurl: require("../assets/images/redlotus.jpg"),
        price: '10'
    },
    {
        id: "29",
        name: "Strawberry Cream",
        imageurl: require("../assets/images/strawberrycream.jpg"),
        price: '10'
    },
    {
        id: "30",
        name: "Summer Blues",
        imageurl: require("../assets/images/summerblues.jpg"),
        price: '10'
    },
    {
        id: "31",
        name: "Summer Rays",
        imageurl: require("../assets/images/summerrays.jpg"),
        price: '10'
    },
    {
        id: "32",
        name: "Summer Shells",
        imageurl: require("../assets/images/summershells.jpg"),
        price: '10'
    },
    {
        id: "33",
        name: "Summer Sunset",
        imageurl: require("../assets/images/summersunset.jpg"),
        price: '10'
    },
    {
        id: "34",
        name: "Sundial",
        imageurl: require("../assets/images/sundial.jpg"),
        price: '10'
    },
    {
        id: "35",
        name: "Tiger Lotus Flower",
        imageurl: require("../assets/images/alaska.jpg"),
        price: '10'
    },
    {
        id: "36",
        name: "Unicorn",
        imageurl: require("../assets/images/unicorn.jpg"),
        price: '10'
    },
    {
        id: "37",
        name: "Vixen",
        imageurl: require("../assets/images/vixen.jpg"),
        price: '10'
    },
    {
        id: "38",
        name: "Wyseria",
        imageurl: require("../assets/images/wysteria.jpg"),
        price: '40'
    },
    {
        id: "39",
        name: "Yellow Lotus Flower",
        imageurl: require("../assets/images/yellowlotus.jpg"),
        price: '10'
    },

]

function getProductData(id){
    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product does not exist');
    }
    return productData;

}

export { productArray, getProductData };