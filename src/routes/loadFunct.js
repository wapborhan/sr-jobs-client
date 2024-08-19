const allJobsFetch = () => fetch(`${import.meta.env.VITE_BACKEND_URL}/jobs`);
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

  return fetch(url);
};

export {
  allJobsFetch,
  allusersFetch,
  profileLoader,
  jobDetailsLoader,
  companyDetailsLoader,
  jobEditLoader,
};
