// import Body from "./component/Body-part"
import Page1 from "./site"

function App() {

const users = [{
  player: "Contact 1",
  status: "Available",
  img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
},{
  player: "Contact 2",
  status: "Bussy",
  img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"

},{
  player: "Contact 3",
  status: "Do not Disturb",
  img: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 4",
  status: "At School",
  img: "https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" 
},
{
  player: "Contact 5",
  status: "At School",
  img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 6",
  status: "At School",
  img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 7",
  status: "At School",
  img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 8",
  status: "At School",
  img: "https://media.istockphoto.com/id/2166802703/photo/confident-businessman-standing-by-car-with-smartphone-in-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=89c1WkGt-6QH_0_LxG_L_UMcLRFjuqXx1fKEZC4HXdg="
},
{
  player: "Contact 9",
  status: "At School",
  img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 10",
  status: "At School",
  img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"  
},
{
  player: "Contact 11",
  status: "At the Gym",
  img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 12",
  status: "At the Gym",
  img: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 13",
  status: "At the Gym",
  img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 14",
  status: "At the Gym",
  img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 15",
  status: "At the Gym",
  img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 16",
  status: "At the Gym",
  img: "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
},
{
  player: "Contact 17",
  status: "At the Gym",
  img: "https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
}]

  return (
    <div >
      <Page1 users={users}/>
    </div>
  )
}

export default App
