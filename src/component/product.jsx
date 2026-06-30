import React, { useEffect, useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://alkyetest-738240239910.us-central1.run.app/myapp/list/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  // ================= DETAILS PAGE =================

  if (selected) {
    return (
      <div
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          ⬢ TEST
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "38px",
            margin: "15px 0 5px",
          }}
        >
          alkye
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#888",
            marginBottom: "30px",
          }}
        >
          The easiest test you will ever do
        </p>

        <img
          src={selected.image_url}
          alt=""
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <h2
          style={{
            marginTop: "20px",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {selected.title}
        </h2>

        <p
          style={{
            marginTop: "15px",
            fontSize: "15px",
            lineHeight: "25px",
            fontWeight: "600",
          }}
        >
          {selected.short_description}
        </p>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            lineHeight: "26px",
            color: "#444",
            whiteSpace: "pre-line",
          }}
        >
          {selected.content}
        </p>

        <button
          onClick={() => setSelected(null)}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    );
  }

  // ================= HOME PAGE =================

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ⬢ TEST
      </div>

      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginTop: "15px",
        }}
      >
        alkye
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#888",
          marginBottom: "30px",
        }}
      >
        The easiest test you will ever do
      </p>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "18px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            style={{
              minWidth: "350px",
              height: "520px",
              borderRadius: "25px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img
              src={item.image_url}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.7))",
                padding: "22px",
                color: "#fff",
              }}
            >
              <span
                style={{
                  background: "#000",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  display: "inline-block",
                  marginBottom: "20px",
                }}
              >
                {item.prompt}
              </span>

              <h3
                style={{
                  fontSize: "22px",
                  lineHeight: "30px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                }}
              >
                {item.short_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;