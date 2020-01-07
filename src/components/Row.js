import React, {Component} from 'react';

import {headerDict,statusDict,formatDate,parseDate} from '../utils/utils';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers:[
                "icon",
                "bill-id",
                "name",
                "category",
                "pass-fail",
            ]
        };
    }

    renderRows() {
        return this.props.header ? this.parseHeader() : this.parseBody();
    }

    renderBodyCells(data,headers) {
        const cells = headers.map(d => {
            if (d === 'url') {
                return (
                    <td className={d} key={d}>
                        <a href={data[d]}>
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </td>
                );
            } else if (d === 'current_status') {
                return (
                    <td className={statusDict[data[d]]} key={d}>
                        <p className={"status"}>{data[d]}</p>
                    </td>
                );
            } else if (d === 'last_move') {
                const date = parseDate(data[d]);

                return (

                    <td className={d} key={d}>{formatDate(date)}</td>
                );
            } else {
                return (
                    <td className={d} key={d}>{data[d]}</td>
                );
            }
        });

        return cells;
    };

    handleClick(event,d) {
        this.props.sortFunc(d);
    }

    parseHeader() {
        const headers = this.state.headers.map(d => {

            return (
                <th key={d} className={"header-value"} onClick={e => this.handleClick(e,d)}>{headerDict[d].toUpperCase()}</th>
            );
        });

        return (
            <tr className={"header-row"}>{headers}</tr>
        );
    }

    parseBody() {
        const d = this.props.data;

        return d.map(e => {
            const cells = this.renderBodyCells(e,this.state.headers);
            return (
                <tr key={e.bill_name}>{cells}</tr>
            );
        });

    }

    render() {
        return (
            this.renderRows()
        );
    }
}

export default Row;
