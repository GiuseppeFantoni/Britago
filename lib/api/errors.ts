import { AxiosError } from "axios";

export class ApiError extends Error {
  readonly status?: number;
  readonly code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;

  if (error instanceof AxiosError) {
    const data = error.response?.data as { error?: string; message?: string } | undefined;
    const message =
      data?.error ?? data?.message ?? error.message ?? "Erro de comunicação com o servidor.";
    return new ApiError(message, error.response?.status, error.code);
  }

  if (error instanceof Error) return new ApiError(error.message);

  return new ApiError("Erro desconhecido.");
}
