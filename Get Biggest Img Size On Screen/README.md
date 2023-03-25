Function to Get the Biggest Image Size on Screen
------------------------------------------------

This function is designed to retrieve all the images that are currently displayed on the screen, regardless of whether they are fully or partially visible. It then compares the sizes of all the images and returns the size of the largest one.

### Assumptions

The following assumptions have been made when creating this function:

*   All `<img>` tags on the screen are assumed not to be overlapping each other.
*   Even if an image is only showing 1 pixel in the viewport, it is considered to be "on screen."

### Parameters

This function takes no parameters.

### Return Value

The function returns the size of the largest image that is currently displayed on the screen.
