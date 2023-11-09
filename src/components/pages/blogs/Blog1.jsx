const Blog1 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a onClick={() => document.getElementById("my_modal_1").showModal()}>
        <div className="relative">
          <img
            className="w-full h-48"
            src="https://frontegg.com/wp-content/webp-express/webp-images/uploads/2022/04/Access-Token.png.webp"
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              JWT
            </div>
          </a>
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a
          href="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
        >
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </a>
      </div>
      <dialog id="my_modal_1" className="modal modal-center sm:modal-large">
        <div className="modal-box max-w-7xl">
          <h3 className="font-bold text-lg">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="py-4">
            Access tokens and refresh tokens are commonly used in authentication
            and authorization systems to enable secure access to resources or
            services on the web. They work together to provide a way for a
            client (e.g., a mobile app or a web application) to access protected
            resources on a server without needing to share the user's
            credentials for each request.
          </p>
          <p className="py-4">
            <ul>
              <li>
                An access token is a short-lived credential that is used to gain
                access to a specific resource or perform certain actions on
                behalf of a user.
              </li>
              <li>
                It is typically issued by an authentication server after the
                user has successfully authenticated (e.g., through a login
                process) and authorized the client application to access their
                data.
              </li>
              <li>
                Access tokens have a limited lifespan, typically lasting from a
                few minutes to several hours.
              </li>
              <li>
                They are included in the HTTP requests made by the client to the
                resource server (e.g., an API), and the server validates the
                access token to determine whether the client has the necessary
                permissions to access the requested resource.
              </li>
            </ul>
          </p>
          <p className="py-4"></p>
          <p className="py-4"></p>
          <p className="py-4">
            Access Token: Refresh Token: A refresh token is a long-lived
            credential that is used to obtain a new access token when the
            current access token expires or becomes invalid. It is typically
            issued along with the access token during the initial authorization
            process and is stored securely on the client side. When the access
            token expires, the client can use the refresh token to request a new
            access token without the user having to re-enter their credentials.
            Refresh tokens are more durable and have a longer lifespan than
            access tokens. They can be used to obtain new access tokens until
            they are revoked or expire.
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

export default Blog1;
