import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useLoginUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = btoa(user?.email);
  const {
    data: loggedInUser = [],
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

  return [loggedInUser, refetch, isLoading, isPending, isError];
};

export default useLoginUser;
