import React, {Component} from 'react';

import {passFailDict,billNbDict} from '../utils/utils';

class ExpandableRow extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            expandedRows: [],
            sortBy: 'category',
            ascending:false,
        };
    }

    componentDidMount() {
        const sortBy = this.state.sortBy;
        const sorted = this.props.data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
        const firstRow = sorted[0]["_id"];
        this.setState({data: sorted, expandedRows: [firstRow]});
    }

    componentWillReceiveProps(nextProps) {
        const sortBy = nextProps.sortBy;
        if (this.state.ascending) {
            this.setState({
                data: this.props.data.sort((a,b) => a[sortBy].localeCompare(b[sortBy])),
                sortBy: sortBy,
                ascending:false
            });
        }
        else {
            this.setState({
                data: this.props.data.sort((a,b) => b[sortBy].localeCompare(a[sortBy])),
                sortBy: sortBy,
                ascending:true
            });
        }

    }

    isRowExpanded(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        return isRowCurrentlyExpanded;
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;

        const newExpandedRows = this.isRowExpanded(rowId) ?
        currentExpandedRows.filter(id => id !== rowId) :
        currentExpandedRows.concat(rowId);

        this.setState({expandedRows: newExpandedRows});
    }

    handleIcon(rowId) {
        const icon = this.isRowExpanded(rowId) ?
        'sort-down' :
        'caret-right';

        return icon;
    }

    renderExpandedRow(item) {
        let expandedItem;
        let houseVote;
        let senateVote;

        if (item['house-yea'] !== '') {
            const stringVotes = item['house-yea'] === "no roll call" ?
            `Passed by voice vote` :
            `${item['house-yea']}Y - ${item['house-nay']}N`;

            houseVote = <div className={'vote-line'}>
                <span>{"House vote:"}</span>
                <span className={'badge'}>{stringVotes}</span>
            </div>;
        }

        if (item['senate-yea'] !== '') {
            const stringVotes = item['senate-yea'] === "no roll call" ?
            `Passed by voice vote` :
            `${item['senate-yea']}Y - ${item['senate-nay']}N`;

            senateVote = <div className={'vote-line'}>
                <span>{"Senate vote:"}</span>
                <span className={'badge'}>{stringVotes}</span>
            </div>;
        }

        expandedItem = <tr className={"table-row-expansion"} key={`row-data-expansion-${item._id}`}>
                <td>{''}</td>
                <td colSpan={3}>
                    <p className={'summary-text'}>
                        {`${item["summary-text"]}  --`} <em className="summary-author">{`by ${item["summary-author"]}`}</em>
                    </p>

                    <p>
                        <a href={item['vtd-url']} target={"_blank"}>{"Read more"}</a>
                    </p>

                </td>
                <td>
                    {houseVote}
                    {senateVote}
                </td>
            </tr>;

        return expandedItem;

    }

    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item._id);
        const icon = this.handleIcon(item._id);

        const itemRows = [
            <tr className={"table-row"} onClick={clickCallback} key={`row-data-${item._id}-${icon}`}>
                <td><i className={`fas fa-${icon}`}></i></td>
                <td>{billNbDict(item["bill-id"])}</td>
                <td>{item.name}</td>
                <td>{item["category"]}</td>
                <td>
                    <div className={`icon icon-${item["pass-fail"]}`}>
                        <i className={`fas fa-${passFailDict[item["pass-fail"]]}`}></i>
                    </div> <span className={"item-status"}>{`${item.status}`}</span>
                </td>
            </tr>
        ];

        if (this.state.expandedRows.includes(item._id)) {
            itemRows.push(this.renderExpandedRow(item));

        }

        return itemRows;

        }

    render() {
        let allItemRows = [];

        this.state.data.forEach(d => {
            const perItemRows = this.renderItem(d);
            allItemRows = allItemRows.concat(perItemRows);

        });

        return (
            <tbody className='table-body'>{allItemRows}</tbody>
        );
    }
}

export default ExpandableRow;
