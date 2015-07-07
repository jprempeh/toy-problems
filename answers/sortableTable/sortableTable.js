/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
    // select elements to change
    var $tbody = $('tbody');
    var $rows = $tbody.children();

    // Get value from row el + col index
    var getCellValue = function(rowEl, colIx) {
        var td = rowEl.children[colIx];
        return $(td).text();
    };

    if () {
    }
    // Determine whether value is string or number
    var getType = function(colIx) {
        var val = getCellValue($rows[0], colIx);
        return isNan(val) ? 'string': 'number';
    };

    $('th').on('click', function (e) {
        var colIx = $(this).index();
        var type = getType(colIx);
    });
    // detach rows and sort them by cell value, detach is important because it prevents us from losing any listener

    $rows.detach().sort(function (row1, row2) {
        var value1 = getCellValue(row1, colIx);
        var value2 = getCellValue(row2, colIx);
        if (type === 'string') return value1 > value2;
        if (type === 'number') return value1 - value2;
    });

    $tbody.append($rows);

});

