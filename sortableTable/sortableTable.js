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
    $('th').on('click', function() {
        var col = this;
        var rows = $('tbody tr');
        var rlen = rows.length;
        var arr = [];
        var i, j, cells, clen;

        for (i = 0; i < rlen; i++) {
            cells = rows[i].cells;
            clen = cells.length;
            arr[i] = [];
            for (j = 0; j < clen; j++) {
                arr[i][j] = cells[j].innerHTML;
            }
        }
        // sort the array by column number
        arr.sort(function(a,b){
            return (a[col] == b[col]) ? 0 : ((a[col] > b [col]) ? asc : -1*asc);
        });
        for(i = 0; i < rlen; i++) {
            arr[i] = "<td>" + arr[i].join("</td><td>")+"</td>";
        }
        $('tbody').innerHTML = "<tr>" + arr.join("</tr><tr>") + "</tr>";
    });
});

