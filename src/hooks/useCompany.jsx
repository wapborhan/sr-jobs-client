import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCompany = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: allCompany = [], isLoading } = useQuery({
    queryKey: ["allCompany"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get("/company");
      return res.data;
    },
  });

  return [allCompany, isLoading];
};

export default useCompany;
