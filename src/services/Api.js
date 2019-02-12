/** 
 *  Base class used for retriving data from Web Server...
 * 
*/
class Api {
    fetchAsync(url,method,headers,body) {
       return fetch(url, {
            method: method,
            headers: headers,
            body: body
            // credentials: 'include'
        }).then((response) => response.json());
    }
    
    fetch(url,method,headers,body) {
        return fetch(url, {
             method: method,
             headers: headers,
             body: body
         });
     }
 }
 export default Api