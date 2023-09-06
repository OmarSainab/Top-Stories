import { useParams } from 'react-router-dom'

const Topics = () => {

const [topics, setTopics] = useParams([])
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    getTopics()
    .then((data) => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

}


if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error</p>;
