'use client'
import {useEffect, useRef} from "react";
import DataTables, {Config, ExtClassesSettings} from "datatables.net-dt";
import './react-data-table.scss';
import $ from 'jquery';

// source https://cdn.datatables.net/2.1.4/js/dataTables.bootstrap4.js
const DataTable = $.fn.dataTable;

/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
    renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( true, DataTable.ext.classes, {
    container: "dt-container dt-bootstrap4",
    search: {
        container: 'd-flex',
        input: "form-control",
    },
    length: {
        container: 'd-flex',
        select: "custom-select form-control"
    },
    processing: {
        container: "dt-processing card"
    },
    layout: {
        row: 'row justify-content-between',
        cell: 'd-md-flex justify-content-between align-items-center',
        tableCell: 'col-12',
        start: 'dt-layout-start col-md-auto mr-auto',
        end: 'dt-layout-end col-md-auto ml-auto',
        full: 'dt-layout-full col-md'
    }
} as ExtClassesSettings );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pagingButton.bootstrap = function (settings, buttonType, content, active, disabled) {
    const btnClasses = ['dt-paging-button', 'page-item'];

    if (active) {
        btnClasses.push('active');
    }

    if (disabled) {
        btnClasses.push('disabled')
    }

    const li = $('<li>').addClass(btnClasses.join(' '));
    const a = $('<a>', {
        'href': disabled ? null : '#',
        'class': 'page-link'
    })
        .html(content)
        .appendTo(li);

    return {
        display: li,
        clicker: a
    };
};

DataTable.ext.renderer.pagingContainer.bootstrap = function (settings, buttonEls) {
    return $('<ul/>').addClass('pagination').append(buttonEls);
};



type customProps = Config & {
    title?: string;
}

const ReactDataTables = ({ ...props }: customProps) => {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const dt = new DataTables(tableRef.current!, props);
        return () => {
            dt.destroy();
        };
    });


    return (
        <div>
            {props.title && <div className={'data-table-custom-title'}>{props.title}</div>}
            <table ref={tableRef} className={'table'}></table>
        </div>
    )
}

export default ReactDataTables;