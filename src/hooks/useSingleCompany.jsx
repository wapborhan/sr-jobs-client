import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useSingleCompany = (id) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: singleCompany = [] } = useQuery({
    queryKey: ["singleCompany"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/company/${id}`);
      return res.data;
    },
  });

  return [singleCompany];
};

export default useSingleCompany;
