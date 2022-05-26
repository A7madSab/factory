export function str2Hex(hex: any) {
  return Number(`0x${hex.substr(1)}`);
}
