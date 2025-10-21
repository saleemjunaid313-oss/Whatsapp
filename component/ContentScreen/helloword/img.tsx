import Textsworld from "./Contentfile"

const HelloWord = (props) => {
  return (
   <div className="p-3 flex border-b border-gray-700 hover:bg-gray-900 cursor-pointer">
    <img className="h-15 w-15 rounded-full flex align-middle mr-15" src={props.img} alt="User Avatar" /> 
    <Textsworld id={props.id} player={props.player} status={props.status} />
    
  </div>
  )
}

export default HelloWord
