function Clothes({itemForSale}){
    return(
       <div className="products">
            {itemForSale.map((item =>{
                const{id, name, searchTerm, price, image}= item;
        return <div className="product-card" key={id}>
        <img src={image} alt='pic'width='400px' height='500px'/>
        <div className="info">
        <h3>{id} {name}</h3>
        <h4>{searchTerm}</h4>
        <h2>${price}</h2>

        </div>
    </div>
            }))}
        </div>
    )
}

export default Clothes;