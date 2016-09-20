import React from 'react';
import Masonry from 'masonry-layout';
import SearchResultsLineItem from './search-results-line-item';

class SearchResults extends React.Component {
  componentDidUpdate() {
    new Masonry('.gif-list', {
      itemSelector: 'li.gif',
      columnWidth: 200
    });
  }

  render() {
    return(
      <div className="gif-list-container">
        <ul className='gif-list'>
          {this.props.gifs.map((gif, index) => {
            return(
              <SearchResultsLineItem key={index} gif={gif} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
