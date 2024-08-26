import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCompanyWiseJob = (compId) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: compWiseJob = [], isLoading } = useQuery({
    queryKey: ["compWiseJob"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/company-job/${compId}`);
      return res.data;
    },
  });

  return [compWiseJob, isLoading];
};

export default useCompanyWiseJob;
