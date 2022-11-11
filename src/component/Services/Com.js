import React from 'react';

const Com = ({ name, src }) => {
    const handleuser = event => {
        event.preventDefault();
        const name = event.target.name
        console.log(name)

    }
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{name}</span>
            </label>
            <label className="input-group">
                <span> <img src={src} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="" /></span>
                <form onSubmit={handleuser}>
                    <input type="text" name="name" placeholder="Enter Review" className="input input-bordered" />
                    <button className='btn btn-primary' type="submit">Post</button>
                </form>
            </label>
        </div>
    );
};

export default Com;