import { useState, useEffect } from "react";
import { getTopics } from '../../utils/api'

const Topics = () => {

const [topics, setTopics] = useState([])
const [topic, setTopic] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    getTopics()
    .then((data) => {
        console.log(data)
        setTopics(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);


if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error</p>;

return (
    <div>
        <label htmlFor="Topic">Topic </label> 

     <select
      value={topic}
      onChange={(event)=> {
        setTopic(event.target.value)
      }}
      >
        <option value={""}>All topics</option>


       {topics.map(({slug}) => {
        return (
          // grab slug to pass it as a value by destructuring slug from topic i.e. topic.slug
          // give user the option to choose a topic value
          <option key={slug} value={slug} >{slug}</option>         
          )})}
      </select>
      
      {/* {items.map((item) => {
        return (
          <Link to={`/items/${item.item_id}`}>
            <h2>{item.item_name}</h2>
          </Link>
        );
      })} */}
    </div>
    
)

}


export default Topics;