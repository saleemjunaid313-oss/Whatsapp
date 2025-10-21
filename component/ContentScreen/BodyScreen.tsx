import HelloWord from "./helloword/img"


const BodyScreen = (props: { users: any; }) => {
  return (
    <div>
      {props.users.map((elem, idx)=>{
        return <HelloWord key={idx} id={idx} player={elem.player} status={elem.status} img={elem.img}/>
       })}
    </div>  
  )
}

export default BodyScreen
