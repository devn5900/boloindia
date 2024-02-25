
export interface BlogType{
    author:String,
    category:string,
    content:String,
    createdAt:string,
    createdBy:createdByType
    dislike:Number,
    image:string,
    isPublished:Boolean,
    likes:Number,
    tags?:Array<String>,
    title:string,
    comments?:Array<commentType>|[]
    updatedAt:String,
    _id:String
}
export interface commentType{
    blogId:string,
    commentedAt:string,
    comment:commentBy,
    comments:Array<commentType>,
    _id:string
}
export interface commentBy{
    comment:string,
    image:string,
    name:string
}
export type Blog=Array<BlogType>
export type responseBlogType={
    msg:string,
    data:Blog,
    status:boolean,
    totalData:number
}
export interface createdByType{
    name:string,
    image:string,
    userId:string
}

export type categoryQueryType=Array<string>|string;
export type categoryType=Array<string>

export interface SingleBlogType{
    isLoad:boolean,
    isErr:boolean,
    data:BlogType
}


export interface queryType{
    q?:string,
    type?:string,
    page?:number,
    category?:string|categoryQueryType
}



export interface loginCredenType{
    email:string,
    password:string
}