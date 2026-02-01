import { client } from "../tina/__generated__/client";

export default async function HomePage() {
  // Tady říkáme Tině: "Dej mi všechny 'Zážitky'"
  const zazitkyResponse = await client.queries.zazitekConnection();
  const seznamZazitku = zazitkyResponse.data.zazitekConnection.edges;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📸 Moje Vzpomínky</h1>
      <hr />
      <div style={{ marginTop: "2rem" }}>
        {seznamZazitku?.map((zazitek) => (
          <div key={zazitek?.node?.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #eee" }}>
            <h2>{zazitek?.node?.title}</h2>
            {/* Tady budeme později vykreslovat text a fotky */}
            <p>Zážitek je připraven k naplnění!</p>
          </div>
        ))}
      </div>
    </main>
  );
}
