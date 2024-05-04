import { z } from "zod";
import { v4 as uuid } from "uuid";

export const BaseUnitSchema = z.object({
  id: z
    .string()
    .optional()
    .default(() => uuid()),
  isEditing: z.boolean().optional(),
  variant: z.optional(z.string()),
});

type UnitSchema<T> = {
  id?: string;
  name: string;
  data: T;
  isEditing?: boolean;
  variant?: string;
};

export type UnitFormProps<T> = {
  data: T;
  index: number;
  name: string;
  onChange: (data: T) => void;
  variant: string | undefined;
};

export type UnitRenderProps<T> = {
  data: T;
  variant: string | undefined;
};

export type UnitFuncs<T> = {
  data: T;
  variant: string | undefined;
  variants?: string[];
  Form: (props: UnitFormProps<T>) => JSX.Element;
  Render: (props: UnitRenderProps<T>) => JSX.Element;
  Schema: z.ZodType<UnitSchema<T>>;
};
