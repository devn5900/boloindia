import { BlogType } from '@/helper/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RelatedChild = ({image,title,content,_id}:BlogType) => {
  return (
    <article className="max-w-xs">
              <Link href={`/blogs/${title.split(" ").join("-")}/${_id}`}>
                  <Image src={image} loading='lazy' className=" aspect-square mb-5 rounded-lg w-full object-cover object-center" alt={title} width={100} height={100} />
           
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  {title.toLocaleUpperCase()}
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                {content.split(" ").splice(0,15).join(" ")}
              </p>
              </Link>
          </article>
  )
}

export default RelatedChild