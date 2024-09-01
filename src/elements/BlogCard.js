import React from 'react'

const BlogCard = ({tag,title,date,img,tagcolor,content}) => {
  return (
    <div className='row border'>
        <div className='col-lg-7 p-4 order-2 order-lg-1'>
            <p className={`${tagcolor}`}>{tag}</p>
            <h3 className='blogname'>{title}</h3>
            <p className='blogdate'>{date}</p>
            <p className='blogdes' dangerouslySetInnerHTML={{__html:content.substring(0,80)+"..."}}></p>
            <p className='blogref text-start text-primary'>Continue reading...</p>
        </div>
        <div className='col-lg-5 p-0 order-1 order-lg-2'>
            <img src={img} className='blogimg' alt='blog_Image'/>
        </div>
    </div>
  )
}

export default BlogCard