/*----------Base imports----------*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Buttons/Button';
import ComponentError from 'components/Errors/ComponentError';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/

/*----------Component start----------*/
class Table extends Component {
    render() {
        const { status, head, body, className } = this.props;

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
                <div className={`Table${className ? ` ${className}` : ''}`}>
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

Table.propTypes = {
    className: PropTypes.string,
    status: PropTypes.oneOf([
        null,
        'loading',
        'error',
        'success'
    ]),
    head: PropTypes.arrayOf((array, key, componentName, location, propFullName) => {
        if (typeof array[key] !== 'object') return new Error('Each item in the "head" prop must be an object');
        if (array[key].type && array[key].type !== 'actions') return new Error('head[index].type can either be ommitted, or passed as "actions"');
        if (array[key].heading && typeof array[key].heading !== 'string') return new Error('head[index].heading must be a string if it is passed');
    }),
    body: PropTypes.arrayOf((array, key, componentName, location, propFullName) => {
        const errors = [];
        Object.entries(array[key]).forEach(([rowKey, rowValue]) => {
            if (rowKey === 'actions') {
                rowValue.forEach(action => {
                    if (!['solid button', 'outline button', 'icon'].includes(action.buttonStyle)) errors.push(new Error('Table action buttonStyle must be one of ["solid button", "outline button", "icon"]'));
                    if (!action.onClick || typeof action.onClick !== 'function') errors.push(new Error('Action onClick must be a function'));
                    if (action.buttonStyle === 'icon') {
                        if (!action.icon || typeof action.icon !== 'string') errors.push(new Error('If action buttonStyle is "icon", you must pass a string (className) as the icon property'));

                    } else {
                        if (action.text || typeof action.text !== 'string') errors.push(new Error('If action buttonStyle is not "icon", you must pass a string as the text property'));
                    }
                })
            } else {
                if (!(typeof rowValue === 'string' || React.isValidElement(rowValue))) errors.push(new Error('Value of each key on a table row must be a string or a valid React element'));
            }
        })
        if (errors.length > 0) return errors[0];
    })
};