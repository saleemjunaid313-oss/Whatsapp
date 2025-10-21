const Textsworld = (props) => {
  return (
    <div>        
      <h1 className="pt-2.5 -ml-10 text-sm">{props.player}</h1>
      <span className="text-white/50 pb-5 pt-1 -ml-10 text-xs">{props.status}</span>
   </div>
  )
}

export default Textsworld
