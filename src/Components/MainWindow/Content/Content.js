import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContentFields } from '../../../redux/actions/contentActions';
import ContentItem from './ContentItem/ContentItem';

class Content extends React.Component {
  render() {
    const contentTypeString = `${this.props.currentContentType}s`;
    const contentTypeArray = contentTypeString.split('');
    contentTypeArray[0] = contentTypeArray[0].toUpperCase();
    const finalContentTypeNamePlural = contentTypeArray.join('');

    let firstField = 'No Data';
    if(this.props.firstField !== null) {
      const firstFieldLowercase = this.props.firstField.split('');
      firstFieldLowercase[0] = firstFieldLowercase[0].toUpperCase();
      firstField = firstFieldLowercase.join('');
    }

    return (
      // if fetching, show loading spinner
      this.props.fetchingContentData
        ? <p>Fetching Content Data</p>
        : <div className="content">
            <h1 className="content__heading">
              {
                finalContentTypeNamePlural
              }
            </h1>

            <button
              className="btn btn--primary"
              onClick={() => this.props.getContentFields('article', 'new content')} >
              Add New
            </button>
    
            <div className="content__container">

              {
                // nested terniary operator, if there are no content items of this type, show no data instead of the table
                firstField === 'No Data'
                ? <p>No Data</p>
                : <div>
                    <div className="content__table-headings">
                      <h3 className="content__table-heading">
                        {
                          firstField
                        }
                      </h3>
                      <h3 className="content__table-heading">Author</h3>
                      <h3 className="content__table-heading">Actions</h3>
                    </div>

                    <ul>
                      {
                        this.props.contentItems.map(item => {
                          return <ContentItem
                            key={this.props.contentItems.indexOf(item)}
                            item={item}
                          />;
                        })
                      }
                    </ul>
                  </div>
              }
            </div>
          </div>
    );
  }
}

Content.propTypes = {};

const mapStateToProps = (state) => ({
  fetchingContentData: state.content.fetchingContentData,
  contentItems: state.content.contentItems,
  currentContentType: state.content.currentContentType,
  firstField: state.content.firstField
});

const mapDispatchToProps = {
  getContentFields
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);