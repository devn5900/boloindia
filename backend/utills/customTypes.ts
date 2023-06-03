
export type authType={
    _id:String
    isUser:Boolean,
    isAdmin:Boolean,
    iat?:Number,
    exp:Number
    ,userName?:String,
    userImg?:String
}

export type updateType={
    name?:String,
    image?:String,
    phone?:Number,
    email?:Number
}

export type mailType={
    from:String,
    to:String,
    subject:String,
    text?:String,
    html?:String
}


export type resetPass={
    _id:String,
    iat?:Number,
    exp:Number
}

export type blogData={
    title:String,
    image?:String,
    author:String,
    content:String,
    createdBy:Object,
    category:String,
    isPublished?:Boolean,
    likes?:Number,
    tags?:Array<tagsType>,      
}

export type tagsType={
    name:String,
    image:String
}

export type queryType= {
    isPublished:Boolean,
    $or?:Array<q>,
    category?:qType,
    title?:qType,
    author?:qType,
    content?:qType
}
export type q={
    title?:qType,author?:qType,
    content?:qType,tags?:qType,category?:qType
}
export type qType={
    $regex?:String,$options?:String
}
export type catType={
    category:qType
}

export type toBeUpdatedType={
    title?:String,
    image?:String,
    author?:String,
    content?:String,
    tags?:Array<tagsType>
}