//The purpose of this file is to do the CRUD operations on a MongoDB. The exercise is specifically to store decibel readings.

//Code is originally from the class lecture. https://shielded-sea-3725.herokuapp.com/Lectures/ClientServerCommunication.html


$('#create').on( 'click', createReading );
$('#read').on( 'click', listReading );
$('#update').on( 'click', updateReading );
$('#delete').on( 'click', deleteReading );


 //$('#create').off( );

//=============================================================================

function createReading( evt ){
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'aking'; //Use your own!
    var date = $('#create-date').val();
    var time = $('#create-time').val();
    var gpsLat = $('#create-lat').val();
    var gpsLong = $('#create-long').val();
    var dB = $('#create-dB').val();
    var comment = $('#create-comment').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                date: date,
                time: time,
                gpsLat: gpsLat,
                gpsLong: gpsLong,
                dB: dB,
                comment: comment
              },
        success: logCreateResult,
        error: logAjaxError
    } );
 }

function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

        
//================================================================

function listReading( evt ){
 var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
 var collection = 'aking'; //personal DB

  $.ajax( baseUrl + collection,
         {
    method: 'GET',
    success: logListResult,
    error: logAjaxError
    } )
  
  
 //diplaying information into a div. NOT WORKING
//  function displayResults() {
//   $('#DBList').append( baseUrl + collection );
//  }


  function logListResult( data ) {
    console.log( 'Data received:', data );
  }

  function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:',    errorThrown );
  }
}
//================================================================

function updateReading( evt ){
 
  //$('#update-submit').off( );
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'aking'; 
    var id = $('#update-ID').val();
    var date = $('#update-date').val();
    var time = $('#update-time').val();
    var gpsLat = $('#update-lat').val();
    var gpsLong = $('#update-long').val();
    var db = $('#update-db').val();
    var comment = $('#update-comment').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'PUT',
        data: {
                date: date,
                time: time,
                gpsLat: gpsLat,
                gpsLong: gpsLong,
                db: db,
                comment: comment
              },
        success: logUpdateResult,
        error: logAjaxError
    } );

 function logUpdateResult( data ) {
    console.log( 'Data received:', data );
 }

  function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
  }
}
//================================================================

function deleteReading( evt ){

    $('#delete-submit').off( );
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'aking';
    var id = $('#delete-ID').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'DELETE',
        success: logDeleteResult,
        error: logAjaxError
    } );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}
      
}




//================================================================
// function reset( ) {
//   $('#form')[0].reset();
//}
 
//=================================================================


//=================================================================




                    


