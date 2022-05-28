import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const PurchaseForm = ({ product, user }) => {
    const { minimum_quantity, available_quantity, unit_price, name } = product;
    const [quantity, setQuantity] = useState(minimum_quantity)
    const [quantityError, setQuantityError] = useState('')
    useEffect(() => {
        if (quantity < parseInt(minimum_quantity)) {
            setQuantityError(`Order at least ${minimum_quantity}`)
        } else if (quantity > parseInt(available_quantity)) {
            setQuantityError('Excced the available value')
        } else {
            setQuantityError('')
        }
    }, [quantity, minimum_quantity, available_quantity])
    const handleForm = (e) => {
        e.preventDefault()
        const email = user?.email;
        const totalPrice = parseInt(quantity) * parseInt(unit_price);
        const status = 'unpaid';
        const orderInfo = { name, email, totalPrice, status, quantity }
        fetch('https://frozen-scrubland-19208.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully Placed Order!')
                    e.target.reset()
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Order Form</h2>
            <form className='flex flex-col gap-4' onSubmit={handleForm}>
                <input type="text" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                <input type="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                <input type="tel" placeholder="Phone" className="input input-bordered w-full max-w-xs" required />
                <div className="form-control w-full max-w-xs">
                    <input type="nuymber" onChange={(e) => setQuantity(e.target.value)} value={quantity} className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt text-red-500">{quantityError}</span>
                    </label>
                </div>
                <input type="submit" value={'Order Now'} className="btn btn-[#570df8] max-w-xs "
                    disabled={quantityError && true}
                />
            </form>
        </div>
    );
};

export default PurchaseForm;