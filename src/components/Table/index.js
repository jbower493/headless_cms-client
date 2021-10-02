/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Buttons/Button';
import ComponentError from 'components/Errors/ComponentError';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/

/*----------Component start----------*/
class Table extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { status, head, body } = this.props;

    const renderHead = () => {
      return head
        ? (
            <div className={`Table__head`}>
              {head.map((item, index) => {
                return (
                  <div className={`Table__heading${item.type === 'actions' ? ' Table__heading--actions' : ''}`} key={index}>{item.heading}</div>
                );
              })}
            </div>
        )
        : ''
    };

    const renderOneAction = (action, index) => {
      const { buttonStyle, text, onClick, icon } = action;
      if (buttonStyle === 'solid button') {
        return (
          <Button
            key={index || 1}
            type='onClick'
            onClick={onClick}
            text={text} />
        );
      }
      if (buttonStyle === 'outline button') {
        return (
          <Button
            key={index || 1}
            type='onClick'
            buttonStyle='outline'
            onClick={onClick}
            text={text} />
        );
      }
      if (buttonStyle === 'icon') {
        return <i key={index || 1} className={icon} onClick={onClick} />
      }
    };

    const renderActions = (actions) => {
      return Array.isArray(actions)
        ? actions.map((action, index) => renderOneAction(action, index + 1))
        : renderOneAction(actions)
    };

    const renderColumn = (row, key, index) => {
      return (
        <div className={`Table__column ${key === 'actions' ? 'Table__column--actions' : key}`} key={index}>
          {key === 'actions' ? renderActions(row[key]) : row[key]}
        </div>
      );
    }

    const renderRow = (row, index) => {
      return (
        <div className={`Table__row`} key={index}>
          {Object.keys(row).map((key, index) => renderColumn(row, key, index))}
        </div>
      )
    };

    const renderBody = () => {
      return (
        <div className={`Table__body`}>
          {body.map((row, index) => renderRow(row, index))}
        </div>
      )
    };

    const renderTable = () => {
      return (
        <div className={`Table`}>
          {renderHead()}
          {renderBody()}
        </div>
      );
    };

    /*----------Render component----------*/
    switch (status) {
      case 'success': return renderTable();
      case 'loading': return <RequestLoader />;
      case 'error':
      default: return <ComponentError />;
    }
  }
};

/*----------Component end----------*/

export default Table;