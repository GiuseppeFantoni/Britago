import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { apiClient } from "./client";
import { type ApiError } from "./errors";

type HttpMethod = "post" | "put" | "patch" | "delete";

interface UseRequestQueryConfig<TData> extends Omit<
  UseQueryOptions<TData, ApiError>,
  "queryKey" | "queryFn"
> {
  queryKey: unknown[];
  endpoint: string;
}

export function useRequestQuery<TData>({
  queryKey,
  endpoint,
  ...options
}: UseRequestQueryConfig<TData>) {
  return useQuery<TData, ApiError>({
    queryKey,
    queryFn: async () => {
      const { data } = await apiClient.get<TData>(endpoint);
      return data;
    },
    ...options,
  });
}

interface UseRequestMutationConfig<TData, TVariables> extends Omit<
  UseMutationOptions<TData, ApiError, TVariables>,
  "mutationFn"
> {
  endpoint: string;
  method?: HttpMethod;
}

export function useRequestMutation<TData, TVariables = void>({
  endpoint,
  method = "post",
  ...options
}: UseRequestMutationConfig<TData, TVariables>) {
  return useMutation<TData, ApiError, TVariables>({
    mutationFn: async (variables) => {
      const { data } =
        method === "delete"
          ? await apiClient.delete<TData>(endpoint, { data: variables })
          : await apiClient[method]<TData>(endpoint, variables);
      return data;
    },
    ...options,
  });
}
