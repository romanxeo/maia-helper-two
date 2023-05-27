type TMods = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: TMods = {},
  additional: (string | undefined)[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
