import BodyScreen from "./ContentScreens/bodyScreen"


const ContentScreen = (props: { users: any; }) => {
  return (
    <div className="border-0.5 h-150 rounded-b-3xl text-white flex flex-col overflow-y-scroll">
      <BodyScreen users={props.users} />
    </div>
  )
}

export default ContentScreen
