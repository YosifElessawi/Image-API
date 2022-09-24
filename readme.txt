I. Project architecture:

1) We have one endpoint in our project which can accessed using the following URL: http://localhost:3000/api/resize.

2) We have a validation middleware and a resize middleware where we process the image.


II. Project functionality:

1) First step we do after receiving a request is validate the URL to be with this form http://localhost:3000/api/resize?filename=FILENAME&width=number&height=number . using the validation middleware.

2) Second step after passing validation is to check if file do exist using a method in resize middleware. 

3) If the image exist and does not need processing all we do is send it back as response, otherwise if the image do exist but need further processing we call the resize function in middleware which process the image save it to our thumbs folder and send it back to the user.


III. Test:

1) Endpoint was tested using Jasmine plus supertest.

2) Both middlewares were tested validation; comparing the errors with the expected error of a faulty url and Image prrocessing; was test comparing the buffer of a test image with the buffer returned response to a given url.
Test urls:
-'/api/resize?filename=&width=200&height=200' for validation
-'/api/resize?filename=fjord&width=200&height=200' for resize process.

