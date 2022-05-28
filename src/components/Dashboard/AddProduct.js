import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const aquantity = e.target.aquantity.value;
        const mquantity = e.target.mquantity.value;
        const uprice = e.target.uprice.value;
        const img = e.target.img.value;
        const producInfo = { name, aquantity, mquantity, uprice, img }
        // console.log(producInfo)

        fetch('https://frozen-scrubland-19208.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(producInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully Placed Order!')
                    e.target.reset()
                }
            })

    }
    return (
        <div className='w-full'>
            <h2 className='text-3xl font-bold mb-4'>Add Product</h2>
            <form className='flex flex-col gap-4' onSubmit={handleForm}>
                <input type="text" name='name' placeholder='Product Name' className="input input-bordered w-full max-w-xs" />
                <input type="number" name='aquantity' placeholder='Available Quantity' className="input input-bordered w-full max-w-xs" />
                <input type="number" name='mquantity' placeholder='Minimum Quantity' className="input input-bordered w-full max-w-xs" />
                <input type="number" name='uprice' placeholder="Unit Price" className="input input-bordered w-full max-w-xs" required />
                <input type="text" name='img' placeholder="Give Image Link" className="input input-bordered w-full max-w-xs" required />


                <input type="submit" value={'Add Product'} className="btn btn-[#570df8] max-w-xs " />
            </form>
        </div>)
};

export default AddProduct;