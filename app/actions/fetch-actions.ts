export async function getAllBillionaires() {
  const res = await fetch('https://billions-api.nomadcoders.workers.dev/', {
    next: { revalidate: 60 * 60 * 24 },
  });
  const json = res.json();

  return json;
}

export async function getBillionarieDetails(id: string) {
  const res = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  const json = res.json();

  return json;
}
