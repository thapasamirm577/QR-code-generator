import makeQr from "../api";

export const generator = async (data: string) => {
  const res = await fetch(`${makeQr}${data}`);
  return res;
};
