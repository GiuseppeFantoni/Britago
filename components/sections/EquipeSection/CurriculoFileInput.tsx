"use client";

import { useId, useRef } from "react";
import { FiFile, FiUploadCloud, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { CURRICULO_ACCEPTED_MIME_TYPE, CURRICULO_MAX_FILE_SIZE_BYTES } from "./constants";

interface CurriculoFileInputProps {
  file: File | null;
  onChange: (file: File | null) => void;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function CurriculoFileInput({ file, onChange }: CurriculoFileInputProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    onChange(selected && selected.size <= CURRICULO_MAX_FILE_SIZE_BYTES ? selected : null);
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  if (file) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-lg border border-britago-gray-light bg-britago-light px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-britago-primary/10">
            <FiFile size={16} className="text-britago-primary" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="truncate font-roboto text-sm font-medium text-britago-dark">
              {file.name}
            </p>
            <p className="font-roboto text-xs text-britago-gray">{formatFileSize(file.size)}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remover arquivo"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-britago-gray transition-colors duration-200 hover:bg-britago-gray-light hover:text-britago-dark"
        >
          <FiX size={15} aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-britago-gray-light bg-britago-light px-4 py-6 text-center transition-all duration-200",
        "hover:border-britago-primary hover:bg-britago-primary/5",
      )}
    >
      <FiUploadCloud size={22} className="text-britago-primary" aria-hidden />
      <span className="font-roboto text-sm font-medium text-britago-dark">
        Clique para selecionar seu currículo
      </span>
      <span className="font-roboto text-xs text-britago-gray">Apenas PDF, até 5MB</span>
      <input
        ref={inputRef}
        id={inputId}
        name="arquivo"
        type="file"
        required
        accept={CURRICULO_ACCEPTED_MIME_TYPE}
        onChange={handleFileChange}
        className="sr-only"
      />
    </label>
  );
}
