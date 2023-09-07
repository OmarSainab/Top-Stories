import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SortCard = ({ sort, setSort, order, setOrder }) => {
  const navigate = useNavigate();

 const handleSort = (event) => {
  setSort(event.target.value)
 }

 const handleOrder = (event) => {
  setOrder(event.target.value)
 }

 useEffect(() => {
  if (sort !== "" || order !== "") {
    const queryParams = []
    if (sort !== ""){
      queryParams.push(`?sort_by=${sort}`)
    }
    if (order !== ""){
      queryParams.push(`?order=${order}`)
    }

    const newUrl = queryParams.length > 0 ? `${queryParams.join("&")}` : '/'

    navigate(newUrl)
    
  }
 }, [sort, order, navigate])

  return (
    <div className="sortArticles">
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" onChange={handleSort}>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>

      <label htmlFor="order"> Order: </label>
      <select name="order" onChange={handleOrder}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortCard;
