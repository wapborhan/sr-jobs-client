import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAppliedJob = (id) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: appliedJob = [] } = useQuery({
    queryKey: ["appliedJob"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/apply?id=${id}`);
      return res.data;
    },
  });

  return [appliedJob];
};

export default useAppliedJob;
