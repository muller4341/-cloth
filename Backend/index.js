import  Express  from "express";
import  Jwt  from "jsonwebtoken";
import  cors  from "cors";
import  path  from "path";
import mongoose from "mongoose";
import multer from "multer";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv";
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Express();
app.use(cors());
app.use(Express.json());



/*database*/
const port = process.env.PORT || 6000;
if (!process.env.MONGO_URL) {
  console.error('MongoDB URI is not defined. Please set the MONGO_URL environment variable.');
  process.exit(1); // Exit the application if the MongoDB URI is not defined.
}
mongoose.connect(process.env.MONGO_URL, {
     
  }).then(() => {
    console.log("connected to mongo db");
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
        
})})
.catch((err) => {
  console.log(`${err}  did not connect`);  
}) 
//API creation
app.get("/", (req, res) => {
    res.send("Hello from the server side");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: path.join(__dirname, './upload/images'),

    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});
const upload = multer({ storage: storage });

// Creating upload endpoint for image
app.use('/images', Express.static(path.join(__dirname, './upload/images')));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://cloth-1.onrender.com/images/${req.file.filename}`
    }); 
});
    // creating database sheema

    const  Product= mongoose.model('product', {
        id:{
            type: Number,
            required: true,

        },
        name:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        newprice:{
            type: Number,
            required: true,
        },
        oldprice:{
            type: Number,
            required: true,
        },
        date:{
            type: Date,
            default: Date.now,
        },
        available:{
            type: Boolean,
            default: true,
        },
    });

    app.post('/addproduct', async (req, res) => {
        let lastProduct = await Product.findOne({}).sort('-id');
            let id;
            if (lastProduct) {
                id = lastProduct.id + 1;
            } else {
                id = 1;
            }

        const product = new Product({
            id:id, 
            name: req.body.name, 
            image: req.body.image, 
            category: req.body.category,
             newprice: req.body.newprice, 
             oldprice: req.body.oldprice, 
             available: req.body.available});

             console.log(product);
                await product.save();
                console.log('saved');
                res.json({success: 1,
                    name: req.body.name,
                });


    }
    );
    // creating APi  for delating product

    app.post('/removeproduct', async (req, res) => {
        await Product.findOneAndDelete({id:req.body.id});
        console.log('Removed');
        res.json({
            sucess:true,
            name: req.body.name
        })

    }
    );
    //creating API for getting all products
    app.get('/allproducts', async (req, res) => {
        let products= await Product.find({});
        console.log('all products are fetched');
        res.json( products );
    }
    );

    // creating model schema for users
    const Users = mongoose.model('Users', {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            uniuqe: true,
        },
        password: {
            type: String,
            required: true,
        },
        cartData: {
            type: Object,
            
        },

        date: {
            type: Date,
            default: Date.now,
        },
    });
    // creating API for adding user
    app.post('/signup', async (req, res) => {
        let check= await Users.findOne({email: req.body.email});
        if (check) {

            return res.status(400).json({success:false, message: 'Email already exist'});
        } 
        let cart={};

        for (let i=0; i < 300; i++) {
            
            cart[i]=0;
        }
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });
        await user.save();
        console.log('user saved');
        const data= {
            user: {
                id: user.id,
            }
        };
        const token = Jwt.sign(data, 'secret');

        res.json({success: true, token});




    }
    );
    //creating API for login
    app.post('/login', async (req, res) => {
        let user = await Users.findOne({email: req.body.email});
        if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data= {
                user: {
                    id: user.id,
                }
            };
            const token = Jwt.sign(data, 'secret');
            res.json({success: true, token});

        }
        else {
            res.json({success: false, message: 'Password is incorrect'});
        }
    }
    else {
        res.json({success: false, message: 'Email is not registered'});
    }
    }
    );

    // api creation for new colection
    app.get('/newcollection', async (req, res) => {

        let products= await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log('new collection fetched', newcollection);

        res.send(newcollection);
    }
    );

    //creating API for popular in women
    app.get('/popular', async (req, res) => {
        let products= await Product.find({ category:"women"});
        let popular = products.slice(1,5);
        console.log('popular in women fetched', popular);
        res.send(popular);
    }
    );

    // creating middleware to fetch the user
const fechUser = async (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({ message: 'Please authenticate using a valid token' });
    }
    try {
        const decoded = Jwt.verify(token, 'secret');
        req.user = decoded.user;
        next();
    } catch (error) {

        res.status(401).json({ message: 'Invalid token' });
        
    }
}

// creating API for adding product into the cart
app.post('/addtocart',fechUser, async (req, res) => {

         console.log('Add product',req.body.itemId);
    
        let userData = await Users.findOne({ _id:req.user.id });
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({ _id:req.user.id }, { cartData: userData.cartData });
        
        res.send('Added');
    
});

//creating API for removing product from the cart
app.post('/removefromcart',fechUser, async (req, res) => {
    console.log('removed product',req.body.itemId);
    let userData = await Users.findOne({ _id:req.user.id });
    if(userData.cartData[req.body.itemId]>0){
    userData.cartData[req.body.itemId] -= 1;
    await Users
    .findOneAndUpdate({ _id:req.user.id }, { cartData: userData.cartData });
    res.send('Removed');
}
else {
    res.send('Item is not in the cart');

}
}
)
// creatiing Api to get cart data
app.post('/getcart',fechUser, async (req, res) => {
    console.log('Get cart');
    let userData = await Users.findOne({ _id:req.user.id });
    res.json(userData.cartData);
}
);
//creating API for total cart amount







