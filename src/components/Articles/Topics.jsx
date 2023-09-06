import { useState, useEffect } from "react";
<<<<<<< HEAD
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTopics()
      .then((data) => {
=======
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
>>>>>>> main
        setTopics(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

<<<<<<< HEAD
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="topic">
      <Link to="/">All Articles </Link>
      {topics.map(({ slug }) => {
        return (
          <div key={slug}>
            <Link to={`/topics/${slug}`}>{slug} </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
=======

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
        <p>Options</p>

       {topics.map(({slug}) => {
        return (
          // grab slug to pass it as a value by destructuring slug from topic i.e. topic.slug
          // give user the option to choose a topic value
          <option key={slug} value={slug} >{slug}</option>    
              
          )})}
      </select>
      

    </div>
    
)

}


export default Topics;
>>>>>>> main
