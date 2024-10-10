import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCard({ title, description, src, alt,  linkText}) {
  return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-6">
            <Link href={linkText} className="m-2"> <Image src={src} alt={alt} className=' h-[175px] rounded-[10px]' /></Link>
            <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">{title}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
            <div className="flex mt-4 md:mt-6">
              <Link href={linkText} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard
