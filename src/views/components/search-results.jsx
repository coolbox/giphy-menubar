import React from 'react';
import Masonry from 'react-masonry-component';
import SearchResultsLineItem from './search-results-line-item';

const masonryOptions = {
  transitionDuration: 0,
  itemSelector: '.gif',
  columnWidth: 200,
  gutter: 8
};

class SearchResults extends React.Component {
  render() {
    return (
      <div className="gif-list-container">
        <Masonry
          elementType={'ul'}
          className="gif-list"
          options={masonryOptions}
        >
          {this.props.gifs.map((gif, index) => (
            <SearchResultsLineItem key={index} gif={gif} />
          ))}
        </Masonry>
      </div>
    );
  }
}

SearchResults.propTypes = {
  gifs: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default SearchResults;
