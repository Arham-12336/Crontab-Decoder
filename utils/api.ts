export const checkingAPI = async () => {
  const res = await fetch(new Request("/api/decoder"), {
    method: "GET",
  });
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
