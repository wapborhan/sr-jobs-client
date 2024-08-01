import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleCompany = (id) => {
  const axiosPublic = useAxiosPublic();

  const { data: singleCompany = [] } = useQuery({
    queryKey: ["singleCompany"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/company/${id}`);
      return res.data;
    },
  });

  return [singleCompany];
};

export default useSingleCompany;
