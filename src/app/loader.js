import ReactDOM from "react-dom";

const Loader = () => {
  // Use reactdom to create the portal for the loader we created in index.html
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <h3>Loading...</h3>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
