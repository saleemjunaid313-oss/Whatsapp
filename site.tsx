import Navbar from './component/Navbar'
import ContentScreen from './component/ContentScreen'

const Page1 = (props: { users: any; }) => {
  return (
    <div className=' w-80 bg-gray-900 rounded-3xl'>
    <Navbar/>
    <ContentScreen users={props.users}/>
    </div>

  )
}

export default Page1; 