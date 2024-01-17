import React from "react";

export default function Stats({ items, item }) {
  const numitem = items.length;
  const packednum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packednum / numitem) * 100);

  return (
    <div className="stats">
      {!numitem ? (
        <p>Not Packed Yet</p>
      ) : (
        <footer className="stats">
          {percentage === 100 ? (
            <p>Ready To Go </p>
          ) : (
            <em>
              {" "}
              You Have {numitem} items on Your list, and You already packed{" "}
              {packednum} and {percentage}%{" "}
            </em>
          )}
        </footer>
      )}
    </div>
  );
}
