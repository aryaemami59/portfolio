export type AnyObject = Record<string, unknown>;

export type NavLinkClassName = (props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined;
