import { useState } from "react";
import StarRating from "./StarRating";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <StarRating value={rating} setValue={setRating} max={5} />
    </div>
  );
}
