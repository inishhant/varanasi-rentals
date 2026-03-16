import Navbar from "../../components/Navbar"
import BikeCard from "../../components/BikeCard"

const bikes = [
  {
    name: "Royal Enfield Meteor 350",
    price: 1200,
    image: "/images/bike1.png"
  },
  {
    name: "Honda Activa",
    price: 500,
    image: "/images/bike2.png"
  },
  {
    name: "Honda Activa",
    price: 500,
    image: "/images/bike3.png"
  }
]

export default function Bikes() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3 gap-6 p-10 bg-white">
        {bikes.map((bike,index)=>(
          <BikeCard bike={bike} key={index}/>
        ))}
      </div>

    </>
  )
}