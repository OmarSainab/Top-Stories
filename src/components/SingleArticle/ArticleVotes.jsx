import { patchArticleVotes } from '../../utils/api'
import { useState } from 'react'

const ArticleVotes = ({votes, article_id}) => {

    const [updatedVotes, setUpdatedVotes] = useState(votes);
    const [isError, setIsError] = useState(false);

    const handleUpVote = () => {
        setUpdatedVotes((currVote) => currVote + 1);
        patchArticleVotes(article_id, {inc_votes: +1})
        .catch(() => {
          setIsError(true);
        });
      };

      const handleDownVote= () => {
        setUpdatedVotes((currVote) => currVote - 1 );
        patchArticleVotes(article_id, {inc_votes: -1})
        .catch(() => {
            setIsError(true);
          });
      }

      if (isError) return <p>Oops, something went wrong, please try again!</p>;

      return (

        <section className='votes'>
             <h4>
        Current votes: {updatedVotes} {isError ? <i>{isError}</i> : null}
      </h4>
           <button onClick={() => handleUpVote()}>Up Vote 👍</button> 
           <button onClick={() => handleDownVote()}>Down Vote 👎</button>
        </section>
      )

}

export default ArticleVotes;