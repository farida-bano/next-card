import Card from "./components/Card"
import Styles from "./page.module.css"
export default function Home(){
  return(  
  <div>
      <Card name='Asharib' rollno="101" day="Monday" />
      <br />
      <Card name='Hassan' rollno="102" day="Tuesday" />
      <br />
      <Card name='Hasnain' rollno="103" day="Wednesday" />
  </div>

  )
}
