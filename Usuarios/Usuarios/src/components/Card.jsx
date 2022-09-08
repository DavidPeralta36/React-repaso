
const Card = ({usuario}) => {
  const {name, picture} = usuario

  return (
    <div>
      <img src={picture.medium} />
      <div className="">
        <p>{name.first}{name.last}</p>
      </div>
    </div>
  )
}

export default Card;
