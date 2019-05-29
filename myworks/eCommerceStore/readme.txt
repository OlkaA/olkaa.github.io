E-store
An application that allows to see a list of products, to add them into user's basket and to edit the basket.

Application uses Vue.js, Bootstrap v.4.3.1 and Font Awesome.

This application has a list of products and a storage(basket).
Each product from list of products has:
* title;
* image;
* cropped description;
* button "Read more";
* button "Add to basket"

When user clicks on the button "Read more", the full description is shown. Button changes its value on "Read less".
After user clicks on "Read less", the cropped description is appeared. Button changes its value to "Read more".
By clicking on the button "Add to basket" user adds item to the basket. User can add the same item multiply times.

Short version of basket is at the right top of the content.
The number shows total amount of added items(regardless what type of item it is.):
- either 0, which means that there is no added items,
- or amount of items that is saved as a persisted data.

By clicking on the short version of basket, the full version of basket is shown and the small version of basket is hidden.
The full basket contains a list of added items with titles, amount of each items and buttons("+", "-", "(picture of trash bin)", "X").
User can add or substract amount of items by 1 by clicking on buttons "-" and "+" accordingly.
If amount of each item is less than one, the item is removed from the basket.
User can also click on the "(picture of trash bin)" to remove item completely from basket.
By clicking on the "X" button the small version of basket is shown and the full version of basket is hidden.

If images are broken they are replaced with a default one.

Application allows to persist the data in the basket. In other words when you open the page at some later point, the basket's state will be persisted.




