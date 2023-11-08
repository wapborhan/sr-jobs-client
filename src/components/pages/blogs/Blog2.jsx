const Blog2 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a onClick={() => document.getElementById("my_modal_2").showModal()}>
        <div className="relative">
          <img
            className="w-full"
            src="https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png"
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              EXPRESS JS
            </div>
          </a>
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a
          href="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
        >
          What is express js? What is Nest JS (google it)?
        </a>
      </div>

      <dialog id="my_modal_2" className="modal modal-center sm:modal-large">
        <div className="modal-box max-w-7xl">
          <h3 className="font-bold text-lg">
            What is express js? What is Nest JS (google it)?
          </h3>
          <p className="py-4">
            Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for building web
            and mobile applications. It is one of the most popular and widely
            used web frameworks for Node.js, known for its simplicity and speed.
            Express.js is often used to create server-side applications and APIs
            (Application Programming Interfaces).
          </p>
          <p className="py-4">
            Express.js offers a range of features, including routing, middleware
            support, and template engines. It allows developers to create web
            servers and handle HTTP requests and responses efficiently.
            Express.js is known for its unopinionated nature, which means it
            doesn't impose a particular structure or way of doing things on
            developers, allowing them to build applications the way they see
            fit.
          </p>

          <p className="py-4">
            Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for building web
            and mobile applications. It is one of the most popular and widely
            used web frameworks for Node.js, known for its simplicity and speed.
            Express.js is often used to create server-side applications and APIs
            (Application Programming Interfaces). Express.js offers a range of
            features, including routing, middleware support, and template
            engines. It allows developers to create web servers and handle HTTP
            requests and responses efficiently. Express.js is known for its
            unopinionated nature, which means it doesn impose a particular
            structure or way of doing things on developers, allowing them to
            build applications the way they see fit. NestJS, on the other hand,
            is a more opinionated and feature-rich web framework for building
            scalable and maintainable server-side applications in Node.js. It is
            built on top of Express.js and provides an additional layer of
            structure and organization to your Node.js applications. NestJS is
            inspired by Angular (a popular front-end framework) and follows a
            modular architecture that promotes the use of TypeScript for
            building server-side applications.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Blog2;
