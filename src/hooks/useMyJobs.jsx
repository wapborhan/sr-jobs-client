import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMyJobs = (email) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: myJobs = [] } = useQuery({
    queryKey: ["myJobs", email],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-jobs?email=${email}`);
      return res.data;
    },
  });

  return [myJobs];
};

export default useMyJobs;
