
export interface contextType{
        theme:Boolean,
        setTheme:Function
}


export interface blogResType{
        _id:String,
        title:String,
        author:String,
        content:String,
        createdAt:String,
        createdBy:Object,
        dislikes:Number;
        image?:String,
        category:String,
        isPublished:Boolean,
        likes:Number,
        tags?:Array<String|null>
        updatedAt:String
        num?:Number,
        color?:String
}
export type bannerType= Array<blogResType>