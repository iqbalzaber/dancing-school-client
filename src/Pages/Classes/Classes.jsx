import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Classes = () => {
  const[,refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url = "http://localhost:5000/classes";
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setClasses(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  // select ar kaj baj
  const handleSelect = (cls) => {
    if (user && user.email) {
        const orderItem = {itemId:cls._id,email:user.email,name:cls.danceName, instructor:cls.instructorName,price:cls.price,image:cls.image ,       availableSeats:cls.availableSeats,};
        console.log('order item',orderItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body:JSON.stringify(orderItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch() //cart update to update 
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }

    // console.log("okay selected", cls);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-16 gap-6">
      {classes.map((cls) => (
        <ClassCard handleSelect={handleSelect} key={cls._id} cls={cls} />
      ))}
    </div>
  );
};

export default Classes;
