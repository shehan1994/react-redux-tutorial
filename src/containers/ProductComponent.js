import React from 'react'
import { useSelector } from 'react-redux'

function ProductComponent() {
    const products = useSelector((state) => state)
    return (
        <div className='four colum wide'>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'>
                        <div className='content'>
                            <div className='header'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent