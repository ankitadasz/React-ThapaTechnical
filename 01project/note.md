jsx mean writing html code inside javascript

each jsx expression must contain one parent element, which means if you try to return multiple elements , react will throw an error

React Fragment:<> </>
instead of unneccesary div we can use react fragment
it can also be used as arrays
react doesnt render false,null,nan,undefined in the  dom,this values when used in jsx will result in nothing being displayed
0 and empty string can be displayed("")