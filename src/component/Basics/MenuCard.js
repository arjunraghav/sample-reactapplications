import React from 'react'

const MenuCard = ({ propsData }) => {
    console.log(propsData)

    // css style as object inside func
    const myStyle = { color: "red" };

    return (
        <>

        <section className="main-card--container">
            {propsData.map((curElem) => {

                const {id, category, name, description, image} = curElem;



                return (
                    <>
                    <div className="card-container" key={curElem.id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number">{id}</span>
                                <span className="card-author subtile" style={myStyle}>{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtile">{description}</span>
                                <div className="card-read">Read</div>
                                <img src={image} alt="images" className="card-image" />
                                <span className="card-tag">Order</span>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </section>

        </>
    )
}

export default MenuCard
