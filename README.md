# Social Brothers Assignment

## Installation

```
npm install
```

## Run

```
npm start
```

## Features

### Form

- The form is validated and shows an error message if any of the fields are empty

- Upon successful submission, the button shows its success status and becomes disabled for 1.5s and the new post is added to the list aside. It resets the form.

- Upon selecting an image, the title of the image is shown and can be removed by clicking the icon aside.

### Pagination

I went for a slightly different approach to improve UX (especially on mobile) finding a compromise between the proposed design and what I had in mind. Since there a lot of pages to browse I added an icon that skips to the next set of pages (5 pages on desktop, 3 on mobile)

### Notes

- the img_url of the posts is missing the root. I could not figure out how to retrieve the images. The server creates an image ID when a new post is created but does it save the actual picture anywhere in the server?
  I place a placeholder to emulate the design instead.
