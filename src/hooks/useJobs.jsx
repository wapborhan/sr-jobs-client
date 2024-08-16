import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useJobs = ({ jobCat, jobSerch }) => {
  const axiosPublic = useAxiosPublic();

  const { data: allJobs = [], isLoading } = useQuery({
    queryKey: ["allJobs", jobCat, jobSerch],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/jobs?cat=${jobCat}&&text=${jobSerch}`
      );
      return res?.data;
    },
  });

  return [allJobs, isLoading];
};

export default useJobs;
