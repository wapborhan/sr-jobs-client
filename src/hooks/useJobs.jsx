import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useJobs = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allJobs = [] } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/jobs");
      return res?.data;
    },
  });

  return [allJobs];
};

export default useJobs;
