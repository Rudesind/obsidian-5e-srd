/**
 * Placeholder
 */

const apiUrl = 'https://www.dnd5eapi.co/api/';
// Search format: spells/?name=Acid+Arrow
// Use the Index to pull back the the exact ID used in another query
// Get: spells/acid-arrow/

searchSrd("spells", "Acid+Arrow")
  .then(data => {
    // Use the data in some way
    console.log(data);

    console.log(data.results[0].index);
    getSrd("spells", data.results[0].index)
      .then(spell => {
        
        console.log(spell);

      })
    .catch(error => console.error(error));

  })
  .catch(error => console.error(error));

/**
 * Searches the SRD and returns the ID for an index if found.
 * If multiple items are found, selects the first result.
 * 
 * Replace spaces with "+" in the search text.
 * 
 * @param {string} category - The category to search for.
 * @param {string} searchTxt - Text to search for in the SRD.
 * @returns 
 */
function searchSrd(/* String */ category, /* String */ searchTxt) {

  // Build URL
  //
  const searchUrl = apiUrl + category + "/?name=" + searchTxt;

  // Pull data and return
  //
  return fetch(searchUrl)
    .then(response => response.json())
    .catch(error => console.error(error));

}

/**
 * Pull the SRD info.
 */
function getSrd(/* String */ category, /* String */ index) {
  
  // Build URL
  //
  const getUrl = apiUrl + category + "/" + index;

  // Pull data and return
  //
  return fetch(getUrl)
    .then(response => response.json())
    .catch(error => console.error(error));

}