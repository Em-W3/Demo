"javascript
  require('dotenv').config();

Const apiKey=process.env.API_KEY;

//Now you can use apiKey in your code
Console.log(apiKey):
"
"javascript
  const apiKey = 
  document.querySelector('meta[name-"api-key"}').getAttribute('content');
console.log(apiKey);
"
  "javascript
  fetch('/lists/current/hardcover-fiction.json")
        .then(response=>{
          if (!response.ok) {
            throw new Error('Network response was not ok '+ response.statusText);
          }
          return response.json();// Or response.text() if it's not JSON
        })
        .then(data=>{
          // Do something with your data here console.log(data);
         })
        .catch(error=>{
          console.error('There was a problem with the fetch operation:', error);
        });
        "
          }
        }])
"javascript
  const filteredData = data.filter(item =< Rank on the list item.Rank<10);
"
