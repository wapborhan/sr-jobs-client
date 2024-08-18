import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useSingleUser = (email) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: singleUser = [],
    refetch,
    isLoading,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["singleUser"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?data=${email}`);
      return res.data;
    },
  });

  return [singleUser, refetch, isLoading, isPending, isError];
};

export default useSingleUser;
