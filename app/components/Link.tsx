"use client";

import NextLink from "next/dist/client/link";
import type { ComponentProps } from "react";

export type { LinkProps } from "next/dist/client/link";

type Props = ComponentProps<typeof NextLink>;

/** Global Link wrapper: prefetch off by default (see next.config.mjs alias). */
export default function Link({ prefetch = false, ...props }: Props) {
  return <NextLink prefetch={prefetch} {...props} />;
}
