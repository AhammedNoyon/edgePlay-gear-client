import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const CategoryProduct = ({ loadedData }) => {
  console.log(loadedData);
  const [equipments, setEquipments] = useState(loadedData);
  const [Category, setCategory] = useState("");
  useEffect(() => {
    const categoryName = equipments.map((equipment) => {
      setCategory(equipment.categoryName);
    });
    // fetch(`http://localhost:5000/equipments/${Category}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, [equipments, Category]);
  return <div>Category</div>;
};

export default CategoryProduct;
