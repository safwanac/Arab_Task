import Navbar from '../Components/Navbar/Navbar'
import Body from '../Components/Body/Body'
import Sidebar from '../Components/Sidebar/Sidebar';


function Page() {
  return (
    <div style={{ backgroundColor: "#e0f2ff", height: "100vh" }}>
      <Navbar />
      <div className='d-flex'>
        <Sidebar/>
         <Body /> 
      </div>
    </div>
  );
}

export default Page