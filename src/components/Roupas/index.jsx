export function Roupas({
  src,
  titulo,
  preco
}) {
  return (
    <div className="col-4">
      <img src={src} alt={titulo} />
      <h4>{titulo}</h4>
      <p>R$ {preco}</p>
    </div>
  )
}