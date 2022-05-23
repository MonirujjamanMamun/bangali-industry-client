import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-7'>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Improve the performance of a React Application</h1>
                <p>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p>
            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Different ways to manage a state in a React application</h1>
                <p>1. <span>Local state - Local state is data we manage in one or another component.</span></p>
                <p>2. <span>Global state - Global state is data we manage across multiple components.</span></p>
                <p>3. <span>Server state - Data that comes from an external server that must be integrated with our UI state.</span></p>
                <p>4. <span>URL state - Data that exists on our URLs, including the pathname and query parameters.</span></p>
            </div>

            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Prototypical inheritance work</h1>
                <p> <span>Every object with it's methods and properties contains an internal and hidden property known as prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.</span></p>
            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Why you do not set the state directly in React.</h1>
                <p> <span>We set the state const [products, setProducts] = useState([]). If we set the state directly, for example, const products = [...]. When we calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components.</span></p>
            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Find the products by useing name</h1>
                <p> <span>In the products array, to get product by name.If we fliter in the array we get the all product useing name. For example, products.filter(element=>element.name) </span></p>

            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Unit test</h1>
                <p> <span>In computer programming, unit testing is a software testing method by which individual units of source code sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures are tested to determine whether they are fit for use.</span></p>
                <p><span>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</span></p>
            </div>
        </div>);
};

export default Blog;