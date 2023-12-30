# State Management in React

- after the person has logged in , add a route to show their email/ username.
- add another route in backend to check if logged in using the header :
  - /admin/me route :
    - need to authenticate the request 
    - if not authenticated then person will get a 403 
    - if not we can get a res.json({username: 'username'}) and send as the result.
  - the appbar need to conditionally render the signup/signin or email and logout button if already logged in.
    - useEffect() hook takes 2 args, a function and a array , if array is [] , then doenst matter how many times it runs , it will only run once. Need to send request only once, hence we do effect inside the  useEffect.
    ```jsx 
        useEffect(() => {
            fetch(`http://localhost:3000/admin/me`,{
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("token");
                }
            }).then((res) => res.json().then((data) => console.log(data)));
        },[]);
    ```
  - not render signup and signin, and to store the info we use another state variable userEmail and setUserEmail and render the email and logout using the if check.
  ```jsx 
    const [userEmail,setUserEmail] = useState('');


    return (
    if(userEmail){
        ///... conditionally redenr this 
        // add a logout button here 
        <Button onClick=(() => {
            //set token to null and logged out 
            localStorage.setItem("token",null)
        })/>
    }
    // return the other part here 
    ) 
  ```

-  To automatically refresh the page when the user signs in use another state varibale isLoading to check if loading and provide a transition messsage between page loads.
- can use window.location to manually refresh to that location.

- standard 
