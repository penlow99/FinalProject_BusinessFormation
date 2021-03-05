$(document).ready(function() {
    $('#table_data').dataTable( {
        pageLength : 100,
        fixedHeader: {
            headerOffset: 78
        },
        select: {
            style: 'multi'
        }
    } );
} );

