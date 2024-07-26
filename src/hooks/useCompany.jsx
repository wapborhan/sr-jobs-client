import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCompany = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allCompany = [] } = useQuery({
    queryKey: ["allCompany"],
    queryFn: async () => {
      const res = await axiosPublic.get("/company");
      return res.data;
    },
  });

  return [allCompany];
};

export default useCompany;
