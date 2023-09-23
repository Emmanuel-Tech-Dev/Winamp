/* eslint-disable react/prop-types */


const Card = ({item}) => {

 const MAX_TITLE_LENGTH = 18

 const titleShortner = item.title.length > MAX_TITLE_LENGTH
? `${item.title.slice(0 , MAX_TITLE_LENGTH)}...`
: item.title

  return (
    <div className="font-bold">
      <img src="./images/Jw.png" />
      <h1 className=" text-[20px] my-2">{titleShortner}</h1>
      <h3 className="mb-1">{item.artistName}</h3>
      <span>{item.year}</span>
    </div>
  );
}

export default Card
