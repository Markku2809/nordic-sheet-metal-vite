import React from "react";

export default function ProductsNO() {
  const products = [
    { code: "BKR", name: "Reduksjon (horisontal)" },
    { code: "BKD", name: "Reduksjon (vertikal)" },
    { code: "BKN", name: "Forskyvning / nihe" },
    { code: "BKP", name: "Albue / bøy" },
    { code: "BKT", name: "T-stykke" },
    { code: "BSS", name: "Silesadul (rett skjøt)" },
    { code: "BSV", name: "Otsik (rist med nett)" },
    { code: "BVK", name: "V-V-otsik (dobbel overgang)" },
    { code: "BKO", name: "Pime (blindlokk)" },
    { code: "BSK", name: "Kaldu sadul (skrå sadel)" }
  ];

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>Produkter (NO)</h1>
      <p>Rektangulære kanaldeler – grunnutvalg for Norden.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p.code} style={{ padding: "10px 0", borderBottom: "1px solid #e5e7eb" }}>
            <strong>{p.code}</strong> — {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
