import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    }, 
    orderItems:[{
        name:{type:String,require:true},
        qty:{type:Number,require:true},
        image:{type:String,require:true},
        price:{type:Number,require:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"Product",
        },
    }],
    shiping:{
        address:{
            type:String,
            require:true,
        },
        city:{
            type:String,
            require:true,
        },
        postalCode:{
            type:String,
            require:true,
        },
        country:{
            type:String,
            require:true,
        },


    },
    payementMethods:{
        type:String,
        require:true,
    },
    payementResult:{
        id:{type:String},
        status:{type:String},
        updateTime:{type:String},
        email_address:{type:String},

    },
    ItemsPrice:{
        type:Number,
        require:true,
        default:0.0,
    },
    taxPrice:{
        type:Number,
        require:true,
        default:0.0,
    },
    shippingPrice:{
        type:Number,
        require:true,
        default:0.0,
    },
    totalPrice:{
        type:Number,
        require:true,
        default:0.0,
    },
    paidAt:{type:String},
    isDelivered:{
        type:Boolean,
        require:true,
        default:false,
    },
    delivered:{
        type:Date,
    },
},{
    timestamps:true,
})

const Order=mongoose.model("Order",orderSchema);

export default Order