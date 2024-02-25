import React, { memo, useState } from 'react'
import CommentChild from './CommentChild'
import { commentType } from '@/helper/types'

const CommentMain = ({cmnt}:{cmnt:Array<commentType>|[]}) => {
  const [restChild,setRestChild]= useState<boolean>(false);
  const [show,setShow]= useState(4);
  const handleshowMore=()=>{
      if(show==cmnt.length){
        setShow(4)
      }else{
        setShow(cmnt.length);
      }
        setRestChild(!restChild);
  }
  return (
    <div>
         {
                cmnt&&cmnt.length>0&&cmnt.slice(0,show).map((el,i)=>{
                  if(typeof el == 'string') return ;
                    return <CommentChild key={i*5} parentId={el._id} border="" comment={el}  />
                })
             }
            {cmnt.length>=4&& <div>
              {<button onClick={handleshowMore} className=' text-blue-800 hover:underline' >{!restChild?"Show More":"Show Less"}</button>}
             </div>}
    </div> 
  )
}

export default memo(CommentMain)