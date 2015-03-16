var UI = require('ui');

//Creates the UI Card!
var card = new UI.Card({
  title:'HHS Lunch',
  subtitle:'Fetching...',
  scrollable: true
});
card.show();

//Sets the Date!
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd;
}
if(mm<10){
  mm='0'+mm;
}
var today = mm+'/'+dd+'/'+yyyy;

//Requests The Lunch Info From HHS
var ajax = require('ajax');
  ajax(
    {
      url: 'http://www.hayshighindians.com/databases/lunch/lunch.php',
      type:'GET',
    },
    function(data) {
      console.log('Successfully fetched lunch data!');
      //Displays Date as Subtitle
      card.subtitle(today);
      //Replaces the <br /> Tags
      var str = data.replace(/<br \/>/gi, "");
      
      //Sets Body as Lunch Info
      card.body(str);
    },
    function(jqXHR, textStatus, errorThrown, error) {
      // in case something went wrong, show error
      console.log('Failed fetching lunch data: ' + textStatus + errorThrown + error);
    }
  );