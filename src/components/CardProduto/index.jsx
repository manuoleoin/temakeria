import './CardProduto.css';

export default function CardProduto({ imagem, titulo, preco, descricao}) {
    return (
        <div className='card_container'>
            <div>
                <img src={imagem} alt='foto'/>
            </div>

            <div>
                <h3>{titulo}</h3>
                <p className='preco'>{preco}</p>
                <p className='desc'>{descricao}</p>
            </div>
        </div>
    )
    
}