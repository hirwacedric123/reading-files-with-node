

---

# PDF Viewer with Node.js and pdf.js

This project demonstrates how to read and display a PDF file in the browser using **Node.js** for the backend and **pdf.js** for rendering the PDF on the frontend.

## Features

- Serve PDF files via a Node.js backend.
- Render PDFs in the browser using pdf.js.
- Display the first page of the PDF in a canvas element.
- Easy-to-extend for adding navigation, zoom, or multi-page rendering.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- A web browser for frontend testing

---

## Getting Started

### 1. Clone the Repository


### 2. Install Dependencies

```bash
npm install
```

### 3. Add a PDF File

Place your PDF file in the root directory of the project and name it `sample.pdf`. You can change the file name but ensure the route in the code matches.

### 4. Run the Server

Start the Node.js server:

```bash
node server.js
```

The server will start on `http://localhost:3000`.

### 5. View in Browser

Open your browser and navigate to:

```
http://localhost:3000
```

You will see the first page of the PDF rendered on a canvas element.

---

## Project Structure

```
/pdf-viewer
  ├── public/             # Frontend files
  │   └── index.html      # HTML file for rendering the PDF
  ├── sample.pdf          # Sample PDF file to display
  ├── server.js           # Node.js backend
  ├── package.json        # Project metadata and dependencies
  ├── README.md           # Project documentation
```

---

## How It Works

1. **Backend**:  
   - The Node.js server serves the PDF file and frontend files.
   - The `/pdf` route serves the PDF file to the frontend.

2. **Frontend**:  
   - The HTML file includes the **pdf.js** library from a CDN.
   - The script fetches the PDF from the `/pdf` route and renders the first page on a `<canvas>` element.

---

## Extending the Project

- **Multi-Page Support**: Use the `pdf.getPage(pageNumber)` function to render additional pages.
- **Zoom Functionality**: Adjust the `scale` parameter in `getViewport({ scale })` to zoom in or out.
- **PDF Uploads**: Add a file input element and use JavaScript to load user-selected PDFs.

---

## License

This project is licensed under the MIT License.

---
