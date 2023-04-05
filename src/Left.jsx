import React from 'react'

import './Left.css'
const Left = () => {
  return (
    <div className='left'>
        <div className='lefttextcontainer'>
        <h1>A complete </h1>
        </div>
        <div className='txtcontainer'>
          <h2>Who is this book for?</h2>
          <div>
          <p className='paracontainer'>This book is suitable for anyone who wants to learn JavaScript, 
            whether you're a complete beginner or have some experience with programming. 
            It starts with the basics of JavaScript, including variables, data types, functions, and control structures, and gradually progresses to more advanced topics like object-oriented programming, regular expressions, and asynchronous programming. 
            The book is designed to be accessible to those who have never written a line of code before,
             but also provides enough depth and detail to be useful for experienced programmers looking to learn or improve their JavaScript skills. 
             If you're looking for a comprehensive guide to JavaScript that covers both the basics and advanced topics, this book is an excellent choice.</p>
             </div>
        </div>
    </div>
  )
}

export default Left