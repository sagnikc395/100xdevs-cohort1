
## Week 5.1 
Practing React.

- Doing the medium course selling dashboard.

### How to think 
- OVer a high level overview for the dashboard, need a signup/signin page.
- Admin dashboard + course selling website.
- components -> abstract lot of HTML together which is basically repeated together and can be reused multiple times.
- Should idially put a lot of code that can be reusused in different components.
- inline css in react:
  - write all css inside 2 curly braces not one.
  
- SignUp:
  - Convert the Singup process to a card type.
  - added some CSS ; but use famous styling components;used in the industry.
  - using MUI, to make our components faster.

- Using MUI to style our Components, add customizing our components based on that.

- AppBar:
  - UserPROFILE pic,LOGO, SIGNUP, SIGNIN
  - flexbox to render in 1 line.
  - search about vw and vh in CSS.
  - Flexbox:
    - position elements to left,right,top,bottom and center of the screen.
    - we know that elements that shouldnt take the full width , the parent div, that we want it to take it give it css :- display: flex.
    - and then can use justifyContent to justify where the children can reside:
      - flex-start :default 
      - flex-end 
      - justify
      - space-between -> one to left, second to right 

  - when we have done flex to a parent it doesnt mean its grand child will also see a flex.
  - makes the change at the child level as well.

- Routing :
  - We want to make sure that clicking on Signup takes the user to Signup page and clicking on Signin takes the user to the Signin page.
  - i.e we want to conditionally render page depending on what the user in clicking.
  - if the person has clicked on signup we want the signup page to be rendered.
  - if the person has clicked on signin , we want the signin page to be rendered.

- The most generic way to solve this is using state management.
- There are libraries that help us do routing.

- using window.location, will lead to realod on that page, this page 
  - React creates SPA , the structure of the page changes, but it does not need to create a full page reload.
  - the reason is using window.location.
  - Rather than that we want the routing to happen in this only.

- using useNavigate to route in and out.

- different ways to route:
  - hashrouter : encrypted router
  - browserrouter


## State Management:
- getElementbyId is not the right way to get the right way to get usernames and passwords in react.
- the way to do that is to use the state variable at the top.
- 