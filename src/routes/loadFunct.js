const myJobsFetch = () =>
  fetch(
    `${import.meta.env.VITE_BACKEND_URL}/my-jobs?email=borhanuddin979@gmail.com`
  );
const allusersFetch = () => fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);

const companyDetailsLoader = async ({ params }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/company/${params.id}`;

  return fetch(url);
};

const jobDetailsLoader = async ({ params }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/job/${params.id}`;

  return fetch(url);
};

const jobEditLoader = async ({ params }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/job/${params.id}`;

  return fetch(url);
};

const profileLoader = async ({ request }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/user?data=${new URL(
    request.url
  ).searchParams.get("data")}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Server is not responding");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      error: true,
      message: "Server is not working. Please try again later.",
    };
  }
};

export {
  myJobsFetch,
  allusersFetch,
  profileLoader,
  jobDetailsLoader,
  companyDetailsLoader,
  jobEditLoader,
};
