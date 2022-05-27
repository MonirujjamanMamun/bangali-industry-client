import React, { useEffect, useState } from 'react';

const PurchaseForm = ({ product, user }) => {
    const { minimum_quantity, available_quantity } = product;
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
    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Order Form</h2>
            <form className='flex flex-col gap-4'>
                <input type="text" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />
                <input type="email" value={user?.email} disabled class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                <input type="tel" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                <div class="form-control w-full max-w-xs">
                    <input type="nuymber" onChange={(e) => setQuantity(e.target.value)} value={quantity} class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt text-red-500">{quantityError}</span>
                    </label>
                </div>
                <input type="submit" value={'Order Now'} class="btn btn-primary max-w-xs "
                    disabled={quantityError && true}
                />
            </form>
        </div>
    );
};

export default PurchaseForm;