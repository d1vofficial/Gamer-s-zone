var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true,useUnifiedTopology: true } );

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: 'https://support.activision.com/servlet/servlet.FileDownload?file=00PU000000Rq6tz',
        title: 'Call of Duty Video Game',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/2D0fSxmi24Zw7aaB3M_TViUavrc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15957232/0fe20042_0bb8_4781_82f4_7130f928b021.jpg',
        title: 'Minecraft Video Game',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!',
        price: 50
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71b6nZud5DL.jpg',
        title: 'GTA V',
        description: 'Best Seller!',
        price: 20
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/FcITAzKW3fY/maxresdefault.jpg',
        title: 'Fall Guys',
        description: 'Most Popular',
        price: 20
    }),
    new Product({
        imagePath: 'https://media.rawg.io/media/resize/1280/-/screenshots/ee4/ee40157d1cb5c1cee73fa5b6d630a082.jpg',
        title: 'Pacify',
        description: 'Trending !!',
        price: 18
    }),
    new Product({
        imagePath: 'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/nfs-most-wanted-2012-key-art.jpg.adapt.crop191x100.628p.jpg',
        title: 'NFS Most Wanted',
        description: 'On Demand !!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/3d/PlayerUnknown%27s_Battlegrounds_Steam_Logo.jpg',
        title: 'PUBG',
        description: '#1 in game list !',
        price: 20
    }),
    new Product({
        imagePath: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg',
        title: 'APEX Legends',
        description: 'Battle Royale Game',
        price: 30
    }),
    new Product({
        imagePath: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200602171212/71rVqrAy5QL._SL1500_.jpg',
        title: 'Counter-Strike: Global Offensive',
        description: 'Battle Royale Game',
        price: 30
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}